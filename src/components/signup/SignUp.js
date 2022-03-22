import "./SignUp.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../contexts/auth-context";
import { validSignUp } from "../../utilities/auth";

const SignUp = () => {
  const { authState, authDispatch } = useAuth();

  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [signUpErrors, setSignUpErrors] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: "",
  });

  const inputHandler = (e) => {
    if (e.target.value === "checkbox") {
      setSignUpData((signUpData) => ({
        ...signUpData,
        [e.target.id]: e.target.checked,
      }));
    }
    setSignUpData((data) => ({ ...data, [e.target.name]: e.target.value }));
    setSignUpErrors((errData) => ({
      ...errData,
      [e.target.name]: "",
    }));
  };

  console.log(signUpData);
  const postSignUpDetails = async (e) => {
    try {
      e.preventDefault();
      const { isValid, errors } = validSignUp(signUpData, signUpErrors);
      if (!isValid) {
        setSignUpErrors(errors);
        return;
      }
      authDispatch({ type: "USER_LOAD" });
      const { data } = await axios.post("/api/auth/signup", signUpData);
      authDispatch({ type: "USER_LOAD_SUCCESS", payload: data.createdUser });
      console.log(data);
      localStorage.setItem("token", data.encodedToken);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="center">
      <form className="login-container" onSubmit={postSignUpDetails}>
        <h1 className="login-title">Sign up</h1>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={signUpData.firstName}
          onChange={inputHandler}
        />
        {signUpErrors.firstName && (
          <span className="err-msg">
            <i className="fa-solid fa-circle-exclamation"></i>
            {signUpErrors.firstName}
          </span>
        )}
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={signUpData.lastName}
          onChange={inputHandler}
        />
        {signUpErrors.lastName && (
          <span className="err-msg">
            <i className="fa-solid fa-circle-exclamation"></i>
            {signUpErrors.lastName}
          </span>
        )}
        <input
          type="text"
          placeholder="Mobile"
          name="mobile"
          value={signUpData.mobile}
          onChange={inputHandler}
        />
        {signUpErrors.mobile && (
          <span className="err-msg">
            <i className="fa-solid fa-circle-exclamation"></i>
            {signUpErrors.mobile}
          </span>
        )}
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={signUpData.email}
          onChange={inputHandler}
        />
        {signUpErrors.email && (
          <span className="err-msg">
            <i className="fa-solid fa-circle-exclamation"></i>
            {signUpErrors.email}
          </span>
        )}
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={signUpData.password}
          onChange={inputHandler}
        />
        {signUpErrors.password && (
          <span className="err-msg">
            <i className="fa-solid fa-circle-exclamation"></i>
            {signUpErrors.password}
          </span>
        )}
        <input
          type="text"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={signUpData.confirmPassword}
          onChange={inputHandler}
        />
        {signUpErrors.confirmPassword && (
          <span className="err-msg">
            <i className="fa-solid fa-circle-exclamation"></i>
            {signUpErrors.confirmPassword}
          </span>
        )}
        <div className="signup-options">
          <div>
            <input
              type="checkbox"
              name="terms"
              value={signUpData.terms}
              onChange={inputHandler}
              id="terms"
            />

            <label htmlFor="terms">I accept all Terms & Conditions</label>
          </div>
          {signUpErrors.terms && (
            <span className="err-msg">
              <i className="fa-solid fa-circle-exclamation"></i>
              {signUpErrors.terms}
            </span>
          )}
        </div>
        <button className="login-btn" type="submit">
          {authState.loading && "loading"} Creat New Account
        </button>
      </form>
    </main>
  );
};
export { SignUp };
