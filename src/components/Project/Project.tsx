import "./Project.css";
import { motion } from "framer-motion";

function Project() {
  return (
    <div className="project">
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
            whileHover={{
              scale: 1.03,
              textShadow: "0px 0px 4px gray",
            }}
            transition={{ delay: 0.1, duration: 0.3 }}
          ></motion.div>
          <motion.div
            className="project-demo-2"
            whileHover={{
              scale: 1.03,
              textShadow: "0px 0px 4px gray",
            }}
            transition={{ delay: 0.1, duration: 0.3 }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
}

export default Project;
