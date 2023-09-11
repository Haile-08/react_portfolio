import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about-body">
        <div className="about-title">
          <p>About Me</p>
        </div>
        <div className="about-info">
          <div className="about-bar">
            <p>
              Hi, I specialize in developing cutting-edge applications that
              drive business growth and leave a lasting impression. With a keen
              eye for exceptional design and a passion for seamless
              functionality, I bring your ideas to life.
            </p>
            <button>Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
