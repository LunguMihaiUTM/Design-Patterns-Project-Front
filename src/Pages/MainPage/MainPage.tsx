import React from "react";
import Header from "../../shared/components/Header/Header";
import Landing from "../../shared/components/Landing/Landing";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="main-page">
      <Header></Header>
      <Landing></Landing>
    </div>
  );
}

export default MainPage;
