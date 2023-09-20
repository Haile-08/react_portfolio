import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const description = {
  visible: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
  hidden: { opacity: 0, transition: { delay: 0.5, duration: 0.5 } },
};

const education = {
  visible: { opacity: 1, transition: { delay: 0.7, duration: 0.5 } },
  hidden: { opacity: 0, transition: { delay: 0.7, duration: 0.5 } },
};
const resume = {
  visible: { opacity: 1, transition: { delay: 0.9, duration: 0.5 } },
  hidden: { opacity: 0, transition: { delay: 0.9, duration: 0.5 } },
};

function About() {
  return (
    <div className="about" id="about">
      <div className="about-body">
        <div className="about-title">
          <p>About Me</p>
        </div>
        <div className="about-info">
          <div className="about-bar">
            <motion.div
              className="about-description"
              initial="hidden"
              whileInView="visible"
              variants={description}
            >
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
            </motion.div>
            <motion.div
              className="about-education"
              initial="hidden"
              whileInView="visible"
              variants={education}
            >
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
            </motion.div>
            <a href="/1. Haile_Melaku_Resume.pdf" download>
              <motion.button
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                variants={resume}
              >
                RESUME
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
