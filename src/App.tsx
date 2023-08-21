import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      {open ? (
        <AnimatePresence>
          <motion.div
            className="nav"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "-100vh" }}
            transition={{ delay: 0.5, duration: 0.7, type: "tween" }}
          >
            <Navigation open={open} setOpen={setOpen} />
          </motion.div>
        </AnimatePresence>
      ) : (
        <div className="app">
          <Home open={open} setOpen={setOpen} />
        </div>
      )}
    </>
  );
}

export default App;
