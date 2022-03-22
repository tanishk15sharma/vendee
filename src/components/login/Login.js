import "./Login.css";
import { useState } from "react";
import { useAuth } from "../../contexts/auth-context";
import axios from "axios";
import { Link } from "react-router-dom";
import { validLogin } from "../../utilities/auth";
const UserLogin = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const { authDispatch } = useAuth();
  const [loginErrors, setLoginErrors] = useState({
    email: "",
    password: "",
  });
  const inputHandler = (e) => {
    setLoginData((data) => ({ ...data, [e.target.name]: e.target.value }));
    setLoginErrors((loginErr) => ({ ...loginErr, [e.target.name]: "" }));
  };

  const postLoginDetails = async (email, password) => {
    try {
      authDispatch({ type: "USER_LOAD" });
      const { data } = await axios.post("/api/auth/login", { email, password });
      authDispatch({ type: "USER_LOAD_SUCCESS", payload: data });
      console.log(data);
      localStorage.setItem("token", data.encodedToken);
    } catch (err) {
      console.log(err);
    }
  };

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
        />
        {loginErrors.email && (
          <p>
            <i className="fa-solid fa-circle-exclamation"></i>{" "}
            {loginErrors.email}
          </p>
        )}
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={loginData.password}
          onChange={inputHandler}
        />
        {loginErrors.password && loginErrors.password}

        <div className="login-options">
          <div>
            <input type="checkbox" />

            <label htmlFor="remember-me">Remember me</label>
          </div>
          <a href="#">Forget Password</a>
        </div>
        <button className="login-btn">Login</button>
        <Link to="/signup">
          Create New Account
          <i className="fa-solid fa-greater-than"></i>
        </Link>
      </div>
    </form>
  );
};
export { UserLogin };
