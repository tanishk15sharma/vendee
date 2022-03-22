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
  });

  const [signUpErrors, setSignUpErrors] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputHandler = (e) => {
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
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={signUpData.lastName}
          onChange={inputHandler}
        />
        <input
          type="text"
          placeholder="Mobile"
          name="mobile"
          value={signUpData.mobile}
          onChange={inputHandler}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={signUpData.email}
          onChange={inputHandler}
        />
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={signUpData.password}
          onChange={inputHandler}
        />
        <input
          type="text"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={signUpData.confirmPassword}
          onChange={inputHandler}
        />
        <div className="signup-options">
          <div>
            <input type="checkbox" />

            <label htmlFor="remember-me">I accept all Terms & Conditions</label>
          </div>
        </div>
        <button className="login-btn" type="submit">
          Creat New Account
        </button>
      </form>
    </main>
  );
};
export { SignUp };
