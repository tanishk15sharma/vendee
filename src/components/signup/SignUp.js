import "./SignUp.css";

const SignUp = () => {
  return (
    <main className="center">
      <div class="login-container">
        <h1 class="login-title">Sign up</h1>
        {/* <!-- <label for="address">Email address</label> --> */}
        <input type="text" placeholder="Full Name" />

        <input type="text" placeholder="Email" />
        {/* <!-- <label for="passowrd">Password</label> --> */}
        <input type="text" placeholder="Password`" />
        <div class="signup-options">
          <div>
            <input type="checkbox" />

            <label for="remember-me">I accept all Terms & Conditions</label>
          </div>
        </div>
        <button class="login-btn">Creat New Account</button>
      </div>
    </main>
  );
};
export { SignUp };
