import x from "../../assets/x.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-body">
        <div className="footer-logo">
          <p>HAILE</p>
        </div>
        <hr className="footer-line" />
        <div className="footer-info">
          <p>Copyright © 2023</p>
          <p>Developed by Haile Melaku</p>
        </div>
        <div className="footer-contact">
          <div className="icon">
            <a
              href="https://twitter.com/Haile09774574"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="x">
                <img src={x} alt="x" />
              </div>
            </a>
          </div>
          <div className="icon">
            <a
              href="https://github.com/Haile-08"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="github">
                <img src={github} alt="github" />
              </div>
            </a>
          </div>
          <div className="icon">
            <a
              href="https://www.linkedin.com/in/haile-melaku/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="linkedin">
                <img src={linkedin} alt="linkedin" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
