import "./Login.css";
// one context n reduce for login n singup
// on login btn or sing up btn = function in which I will create a post request and send it to backend

const Login = () => {
  return (
    <main className="bg">
      <div class="login-container center">
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
