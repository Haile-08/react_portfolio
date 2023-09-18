import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-body">
        <div className="about-title">
          <p>About Me</p>
        </div>
        <div className="about-info">
          <div className="about-bar">
            <div className="about-description">
              <h1>DESCRIPTION</h1>
              <hr />
              <p>
                HI, I am a highly skilled and dedicated Software Developer with
                a Bachelor's degree in Computer Science and Engineering,
                complemented by a one-year intensive Software engineering boot
                camp from Holberton School. I bring over three years of
                professional experience in the field, consistently delivering
                polished, linted, formatted, and thoroughly tested projects.
              </p>
            </div>
            <div className="about-education">
              <h1>EDUCATION</h1>
              <hr />
              <div className="edu">
                <p>02.2019- 10.2023</p>
                <p>
                  Adama Science And Technology University - Computer science and
                  engineering (CSE)
                </p>
              </div>
              <hr />
              <div className="edu">
                <p>05.2022 - 01.2024</p>
                <p>Holberton School - Software engineering</p>
              </div>
              <hr />
            </div>
            <a href="/1. Haile_Melaku_Resume.pdf" download>
              <button>RESUME</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
