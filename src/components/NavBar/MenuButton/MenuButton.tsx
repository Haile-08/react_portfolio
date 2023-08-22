import "./MenuButton.css";
import { motion } from "framer-motion";

type props = {
  open?: boolean;
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
    <motion.div className="menu-container">
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
