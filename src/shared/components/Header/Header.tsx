import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">
        <h1>EasyToEat</h1>
      </div>
      <div className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">Restaurants</li>
          <li className="nav-item">
            <Link to="/categories">Categories</Link>
          </li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li>
          <li className="nav-item">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
