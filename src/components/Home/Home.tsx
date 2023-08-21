import React from "react";
import "./Home.css";
import { motion } from "framer-motion";

const textvariants = {
  visible: { opacity: 1, transition: { delay: 0.9, duration: 1.5 } },
  hidden: { opacity: 0, transition: { delay: 0.9, duration: 1.5 } },
};

function Home() {
  return (
    <div className="home">
      <div className="home-nav">
        <div className="home-hamburger-menu">x</div>
      </div>
      <div className="home-body">
        <motion.div
          className="home-body-info"
          initial="hidden"
          animate="visible"
          variants={textvariants}
        >
          <p className="name-info">Haile Melaku</p>
          <p className="career-info">Software engineer, Designer</p>
          <p className="decor-info">Hello</p>
          <p className="decor-info">world</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
