import "./Project.css";
import { motion } from "framer-motion";

const project1variants = {
  visible: { opacity: 1, transition: { delay: 0.3, duration: 0.8 } },
  hidden: { opacity: 0, transition: { delay: 0.3, duration: 0.8 } },
  hover: {
    scale: 1.03,
    textShadow: "0px 0px 4px gray",
    transition: { delay: 0.1, duration: 0.4 },
  },
};

const project2variants = {
  visible: { opacity: 1, transition: { delay: 0.9, duration: 0.5 } },
  hidden: { opacity: 0, transition: { delay: 0.9, duration: 0.5 } },
  hover: {
    scale: 1.03,
    textShadow: "0px 0px 4px gray",
    transition: { delay: 0.1, duration: 0.4 },
  },
};

function Project() {
  return (
    <div className="project" id="project">
      <div className="project-scroll-line">
        <hr className="project-line" />
      </div>
      <div className="project-body">
        <div className="project-title">
          <p>Portfolio Project</p>
        </div>
        <div className="project-demo">
          <motion.div
            className="project-demo-1"
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            variants={project1variants}
          ></motion.div>
          <motion.div
            className="project-demo-2"
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            variants={project2variants}
          ></motion.div>
        </div>
      </div>
    </div>
  );
}

export default Project;
