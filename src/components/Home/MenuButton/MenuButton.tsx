import "./MenuButton.css";
import { motion } from "framer-motion";

type props = {
  open?: boolean;
};

const buttonvariants = {
  visible: { opacity: 1, transition: { delay: 0.9, duration: 1.5 } },
  hidden: { opacity: 0, transition: { delay: 0.9, duration: 1.5 } },
};

function MenuButton({ open }: props) {
  const variant = open ? "opened" : "closed";
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 10,
    },
  };
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -10,
    },
  };
  return (
    <motion.div
      className="menu-container"
      initial="hidden"
      animate="visible"
      variants={buttonvariants}
    >
      <motion.div
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        variants={top}
        initial="closed"
        animate={variant}
        className="diff"
      />
      <motion.div
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        variants={center}
        initial="closed"
        animate={variant}
        className="diff"
      />
      <motion.div
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        variants={bottom}
        initial="closed"
        animate={variant}
        className="diff"
      />
    </motion.div>
  );
}

export default MenuButton;
