import "./Home.css";
import { AnimatePresence, motion } from "framer-motion";

const textvariants = {
  visible: { opacity: 1, transition: { delay: 0.3, duration: 1.5 } },
  hidden: { opacity: 0, transition: { delay: 0.3, duration: 1.5 } },
  leave: { opacity: 0, transition: { delay: 0.3, duration: 1.5 } },
};

function Home() {
  return (
    <div className="home">
      <div className="home-body">
        <AnimatePresence>
          <motion.div
            key="home-body-info"
            className="home-body-info"
            initial="hidden"
            animate="visible"
            exit="leave"
            variants={textvariants}
          >
            <p className="name-info">Haile Melaku</p>
            <p className="career-info">Software engineer, Designer</p>
            <p className="decor-info">Hello</p>
            <p className="decor-info">world</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <motion.div
        className="home-scroll"
        key="home-body-info"
        initial="hidden"
        animate="visible"
        exit="leave"
        variants={textvariants}
      >
        <div className="home-scroll-text">
          <p>SCROLL</p>
        </div>
        <div className="home-scroll-line">
          <hr className="line" />
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
