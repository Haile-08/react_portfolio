import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar/NavBar";
import Project from "./components/Project/Project";
import Contact from "./components/contact/Contact";
import About from "./components/About/About";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <NavBar open={open} setOpen={setOpen} />

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "-100vh" }}
            transition={{ delay: 0.2, duration: 0.5, type: "tween" }}
          >
            <Navigation setOpen={setOpen} />
          </motion.div>
        )}
      </AnimatePresence>
      {!open && (
        <div className="app">
          <Home />
          <Project />
          <About />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;
