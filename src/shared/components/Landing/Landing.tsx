import "./Landing.css";

function Landing() {
  return (
    <div className="landing-container">
      <div className="text-container">
        <div className="search-container">
          <div className="search">
            <input type="text" placeholder="Nume Restaurant" />
            <i className="bi bi-search"></i>
          </div>
          <button>Caută</button>
        </div>
        <h1>
          Bucură-te de o <br />
          <span>Masă Delicioasă!</span>
        </h1>
        <p>
          Descoperă restaurantele tale preferate, rezervă o masă fără efort,
          comandă mâncare acasă sau fă precomenzi rapid și simplu.
        </p>
      </div>
      <div className="image-container">
        <img src="src/assets/logo.svg" alt="Pizza" />
      </div>
    </div>
  );
}

export default Landing;
