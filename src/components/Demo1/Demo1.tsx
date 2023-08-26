import "./Demo1.css";
import { motion } from "framer-motion";

const demo1variantsfull = {
  visible: {
    opacity: 1,
    width: "100vw",
    height: "100vh",
    top: 0,
    left: 0,
    transition: { delay: 0, duration: 0.5 },
  },
  hidden: {
    opacity: 0,
    width: "60vw",
    height: "0vh",
    transition: { delay: 0, duration: 0.5 },
  },
};

function Demo1() {
  return (
    <motion.div
      className="demo1-page"
      initial="hidden"
      whileInView="visible"
      variants={demo1variantsfull}
    >
      haile melaku
    </motion.div>
  );
}

export default Demo1;
