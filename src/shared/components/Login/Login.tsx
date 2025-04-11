import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <div className="login-input">
          <div className="input-group">
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
          </div>
        </div>
        <button>Log in</button>
        <div className="register-redirect">
          <p>Don't have an account?</p>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
