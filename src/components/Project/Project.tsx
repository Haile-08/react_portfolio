import { useState } from "react";
import "./Project.css";
import { motion } from "framer-motion";
import Demo1 from "../Demo1/Demo1";
import Demo2 from "../Demo2/Demo2";

const demo1variants = {
  visible: { opacity: 1, transition: { delay: 0.1, duration: 0.8 } },
  hidden: { opacity: 0, transition: { delay: 0.1, duration: 0.8 } },
  hover: {
    scale: 1.03,
    textShadow: "0px 0px 4px gray",
    transition: { delay: 0.1, duration: 0.4 },
  },
};

const demo2variants = {
  visible: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
  hidden: { opacity: 0, transition: { delay: 0.5, duration: 0.5 } },
  hover: {
    scale: 1.03,
    textShadow: "0px 0px 4px gray",
    transition: { delay: 0.1, duration: 0.4 },
  },
};

function Project() {
  const [openDemo1, setOpenDemo1] = useState<boolean>(false);
  const [openDemo2, setOpenDemo2] = useState<boolean>(false);
  console.log(`demo 1 ${openDemo1}`);
  console.log(`demo 2 ${openDemo2}`);
  const handleDemo1Click = () => {
    if (setOpenDemo1) {
      setOpenDemo1((prevState) => !prevState);
    }
  };
  const handleDemo2Click = () => {
    if (setOpenDemo2) {
      setOpenDemo2((prevState) => !prevState);
    }
  };

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
          <motion.div className="project-demo-1">
            {openDemo1 ? (
              <Demo1 />
            ) : (
              <motion.div
                className="demo-small"
                onClick={handleDemo1Click}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                variants={demo1variants}
              >
                demo 1 small
              </motion.div>
            )}
          </motion.div>
          <div className="project-demo-2">
            {openDemo2 ? (
              <Demo2 />
            ) : (
              <motion.div
                className="demo-small"
                onClick={handleDemo2Click}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                variants={demo2variants}
              >
                demo 2 small
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
