import "./Login.css";
import { useState } from "react";
import { useAuth } from "../../contexts/auth-context";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { validLogin } from "../../utilities/auth";
const UserLogin = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [passwordType, setPasswordType] = useState(true);
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
      localStorage.setItem("user", JSON.stringify(data.foundUser));
      navigate(-1);
    } catch (err) {
      console.log(err.response.data);
      setLoginErrors((loginErr) => ({
        ...loginErr,
        others: err.response.data.errors[0],
      }));
      authDispatch({ type: "USER_LOAD_FAILURE" });
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

  const testLoginHandler = (e) => {
    e.preventDefault();

    setLoginData({
      email: "adarshbalak@gmail.com",
      password: "adarshBalaki123",
    });
  };

  return (
    <form className="bg" onSubmit={handleSubmit}>
      <div className="auth-container center">
        <h1>
          Log
          <span className="action-color">in</span>
        </h1>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={loginData.email}
          onChange={inputHandler}
          className="auth-input"
        />

        {loginErrors.email && (
          <span className="err-msg">
            <i className="fa-solid fa-circle-exclamation"></i>
            {loginErrors.email}
          </span>
        )}
        <div className="auth-input-div">
          <input
            type={passwordType ? "password" : "text"}
            id="password"
            placeholder="Password"
            name="password"
            value={loginData.password}
            onChange={inputHandler}
            className="input-reset"
          />
          <i
            class="fa-solid fa-eye"
            onClick={() => setPasswordType(!passwordType)}
          ></i>
        </div>

        {loginErrors.password && (
          <span className="err-msg">
            <i className="fa-solid fa-circle-exclamation"></i>
            {loginErrors.password}
          </span>
        )}
        {loginErrors.others && (
          <span className="err-msg">
            <i className="fa-solid fa-circle-exclamation"></i>
            {loginErrors.others}
          </span>
        )}
        <button className="login-btn">
          {authState.loading && "loading"} Login
        </button>
        <button className="test-btn" onClick={testLoginHandler}>
          {authState.loading && "loading"} Test Login
        </button>
        <Link to="/signup">
          Don't have an account ?<span className="action-color"> Signup</span>
        </Link>
      </div>
    </form>
  );
};
export { UserLogin };
