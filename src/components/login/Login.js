import "./Login.css";

const Login = () => {
  return (
    <main className="center">
      <div class="login-container">
        <h1 class="login-title">Login</h1>
        {/* <!-- <label for="address">Email address</label> --> */}
        <input type="text" placeholder="Email" />
        {/* <!-- <label for="passowrd">Password</label> --> */}
        <input type="text" placeholder="Password`" />
        <div class="login-options">
          <div>
            <input type="checkbox" />

            <label for="remember-me">Remember me</label>
          </div>
          <a href="#">Forget Password</a>
        </div>
        <button class="login-btn">Login</button>
        <a href="./signup.html" class="login-route">
          Create New Account
          <i class="fa-solid fa-greater-than"></i>
        </a>
      </div>
    </main>
  );
};
export { Login };
