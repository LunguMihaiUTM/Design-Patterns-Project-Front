import "./Categories.css";

function Categories() {
  return (
    <div className="main-container">
      <div className="categories-container">
        <div className="category">
          <div className="category-image">
            <img src="src/assets/burger.png" alt="category" />
          </div>
          <p>BURGER</p>
        </div>

        <div className="category">
          <div className="category-image">
            <img src="src/assets/kebab.png" alt="category" />
          </div>
          <p>KEBAB</p>
        </div>

        <div className="category">
          <div className="category-image">
            <img src="src/assets/sushi.png" alt="category" />
          </div>
          <p>SUSHI</p>
        </div>

        <div className="category">
          <div className="category-image">
            <img src="src/assets/traditional.png" alt="category" />
          </div>
          <p>TRADITIONAL</p>
        </div>

        <div className="category">
          <div className="category-image">
            <img src="src/assets/coffe.png" alt="category" />
          </div>
          <p>COFFE</p>
        </div>
      </div>

      <h1>RECOMANDAM !</h1>
      <div className="recommended-container">
        <div className="left-next">
          <img src="src/assets/next.png" alt="" />
        </div>
        <div className="recommended-image">
          <img src="src/assets/BurgerCraft.png" alt="" />
        </div>
        <div className="recommended-image">
          <img src="src/assets/Andys.png" alt="" />
        </div>
        <div className="recommended-image">
          <img src="src/assets/Torro.png" alt="" />
        </div>
        <div className="right-next">
          <img src="src/assets/next.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Categories;
