import "./SignUp.css";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
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
    try {
      const response = await axios.post("/api/auth/signup", userInfo);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <main className="center">
      <form class="login-container" onSubmit={postSignUpDetails}>
        <h1 class="login-title">Sign up</h1>
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
        <div class="signup-options">
          <div>
            <input type="checkbox" />

            <label for="remember-me">I accept all Terms & Conditions</label>
          </div>
        </div>
        <button class="login-btn" type="submit">
          Creat New Account
        </button>
      </form>
    </main>
  );
};
export { SignUp };
