import React from "react";
import "./Home.css";

//fonts
import "../../fonts/Lato/Lato-Light.ttf"
import "../../fonts/Lato/Lato-Thin.ttf"

function Home() {
  return (
    <div className="home">
      <div className="home-nav">
        <div className="home-hamburger-menu">x</div>
      </div>
      <div className="home-body">
        <div className="home-body-info">
          <p className="name-info">Haile Melaku</p>
          <p className="career-info">Software engineer, Designer</p>
          <p className="decor-info">Hello</p>
          <p className="decor-info">world</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
