import React from "react";
import Header from "../../shared/components/Header/Header";
import Categories from "../../shared/components/Categories/Categories";
import "./CategoryPage.css";

function CategoryPage() {
  return (
    <div className="category-page">
      <Header></Header>
      <Categories></Categories>
    </div>
  );
}

export default CategoryPage;
