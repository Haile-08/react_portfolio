import "./Contact.css";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-title">
        <p>Contact me</p>
      </div>
      <div className="contact-body">
        <p>SAY HI</p>
        <form action="">
          <div className="contact-top">
            <input
              type="email"
              name="email"
              className="contact-email"
              placeholder="Email"
            />
            <input
              type="text"
              name="subject"
              className="contact-subject"
              placeholder="Subject"
            />
          </div>
          <textarea
            name="body"
            className="contact-input-body"
            placeholder="Body"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Send
          </motion.button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
