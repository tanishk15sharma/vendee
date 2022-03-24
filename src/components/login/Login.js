import "./Login.css";
import { useState } from "react";
import { useAuth } from "../../contexts/auth-context";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { validLogin } from "../../utilities/auth";
const UserLogin = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const { authState, authDispatch } = useAuth();
  const [loginErrors, setLoginErrors] = useState({
    email: "",
    password: "",
    others: "",
  });
  const inputHandler = (e) => {
    setLoginData((data) => ({ ...data, [e.target.name]: e.target.value }));
    setLoginErrors((loginErr) => ({ ...loginErr, [e.target.name]: "" }));
  };

  const postLoginDetails = async (email, password) => {
    try {
      authDispatch({ type: "USER_LOAD" });
      const { data } = await axios.post("/api/auth/login", { email, password });
      authDispatch({ type: "USER_LOAD_SUCCESS", payload: data.foundUser });
      console.log(data);
      localStorage.setItem("token", data.encodedToken);
      navigate(-1);
    } catch (err) {
      console.log(err.response.data);
      setLoginErrors((loginErr) => ({
        ...loginErr,
        others: err.response.data.errors[0],
      }));
    }
  };
  console.log(authState);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, errors } = validLogin(loginData, loginErrors);
    if (!isValid) {
      setLoginErrors(errors);
      return;
    }
    postLoginDetails(loginData.email, loginData.password);
  };

  return (
    <form className="bg" onSubmit={handleSubmit}>
      <div className="login-container center">
        <h1 className="login-title">Login</h1>

        <input
          type="text"
          placeholder="Email"
          name="email"
          value={loginData.email}
          onChange={inputHandler}
          className="login-input"
        />

        {loginErrors.email && (
          <span className="err-msg">
            <i className="fa-solid fa-circle-exclamation"></i>
            {loginErrors.email}
          </span>
        )}

        <input
          type="text"
          placeholder="Password"
          name="password"
          value={loginData.password}
          onChange={inputHandler}
          className="login-input"
        />

        {loginErrors.password && (
          <span className="err-msg">
            <i className="fa-solid fa-circle-exclamation"></i>
            {loginErrors.password}
          </span>
        )}

        <div className="login-options">
          <div>
            <input type="checkbox" />

            <label htmlFor="remember-me">Remember me</label>
          </div>
          <a href="#">Forget Password</a>
        </div>
        {loginErrors.others && (
          <span className="err-msg">
            <i className="fa-solid fa-circle-exclamation"></i>
            {loginErrors.others}
          </span>
        )}
        <button className="login-btn">
          {authState.loading && "loading"} Login
        </button>
        <Link to="/signup">
          Create New Account
          <i className="fa-solid fa-greater-than"></i>
        </Link>
      </div>
    </form>
  );
};
export { UserLogin };
