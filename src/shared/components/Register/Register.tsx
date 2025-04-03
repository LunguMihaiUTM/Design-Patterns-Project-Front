import "./Register.css";

function Register() {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Register</h1>
        <div className="login-input">
          <div className="input-group">
            <input type="text" placeholder="Username" required />
            <input type="text" placeholder="Email" required />
            <input type="text" placeholder="Password" required />
          </div>
        </div>
        <button>Register</button>
        <div className="register-redirect">
          <p>Don't have an account?</p>
          <a href="">Login</a>
        </div>
      </div>
    </div>
  );
}

export default Register;
