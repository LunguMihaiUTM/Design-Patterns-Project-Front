import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">
        <h1>EasyToEat</h1>
      </div>
      <div className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">Restaurants</li>
          <li className="nav-item">Categroies</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li>
          <li className="nav-item">Login</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
