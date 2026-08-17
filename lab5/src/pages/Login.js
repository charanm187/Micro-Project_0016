import "./Login.css";

function Login() {
  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-icon">
          RVU
        </div>

        <h1>Welcome Back</h1>

        <p className="login-subtitle">
          Login to your RVU App account
        </p>

        <form>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="login-options">
            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="/">Forgot Password?</a>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>

        </form>

        <p className="signup-text">
          Don't have an account?
          <a href="/"> Sign up</a>
        </p>

      </div>

    </div>
  );
}

export default Login;