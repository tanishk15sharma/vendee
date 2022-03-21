import "./Login.css";
import { useState } from "react";
import { useAuth } from "../../contexts/auth-context";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const { authState, authDispatch } = useAuth();

  const inputHandler = (e) => {
    setUserData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const postLoginDetails = async ({ email, password }) => {
    authDispatch({ type: "USER_LOAD" });
    try {
      console.log(email, password);
      let { data } = await axios.post("/api/auth/login", { email, password });
      authDispatch({ type: "USER_LOAD_SUCCESS", payload: data });
      console.log(data);
      localStorage.setItem("token", data.encodedToken);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(authState);
  return (
    <main className="bg">
      <div class="login-container center">
        <h1 class="login-title">Login</h1>

        <input
          type="text"
          placeholder="Email"
          name="email"
          value={userData.email}
          onChange={inputHandler}
        />

        <input
          type="text"
          placeholder="Password"
          name="password"
          value={userData.password}
          onChange={inputHandler}
        />
        <div class="login-options">
          <div>
            <input type="checkbox" />

            <label for="remember-me">Remember me</label>
          </div>
          <a href="#">Forget Password</a>
        </div>
        <button class="login-btn" onClick={() => postLoginDetails(userData)}>
          {authState.loading && "loading"} Login
        </button>
        <Link to="/signup">
          Create New Account
          <i class="fa-solid fa-greater-than"></i>
        </Link>
      </div>
    </main>
  );
};
export { Login };
