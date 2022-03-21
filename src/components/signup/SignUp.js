import "./SignUp.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../contexts/auth-context";

const SignUp = () => {
  const { authDispatch } = useAuth();

  const [userInfo, setUserInfo] = useState({
    firstname: "",
    secondname: "",
    mobile: "",
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    e.preventDefault();

    setUserInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  };
  const postSignUpDetails = async (e) => {
    e.preventDefault();
    authDispatch({ type: "USER_LOAD" });

    try {
      const { data } = await axios.post("/api/auth/signup", userInfo);
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
          name="firstname"
          value={userInfo.firstname}
          onChange={inputHandler}
        />
        <input
          type="text"
          placeholder="Second Name"
          name="secondname"
          value={userInfo.secondname}
          onChange={inputHandler}
        />
        <input
          type="text"
          placeholder="Mobile"
          name="mobile"
          value={userInfo.mobile}
          onChange={inputHandler}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={userInfo.email}
          onChange={inputHandler}
        />
        <input
          type="text"
          placeholder="Password`"
          name="password"
          value={userInfo.password}
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
