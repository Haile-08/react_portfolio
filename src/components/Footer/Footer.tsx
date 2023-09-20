import x from "../../assets/x.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-body">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
          <h1>HAILE</h1>
        </div>
        <hr className="footer-line" />
        <div className="footer-info">
          <p>Copyright © 2023</p>
          <p>Developed by Haile Melaku</p>
        </div>
        <div className="footer-contact">
          <div className="f-icon">
            <a
              href="https://twitter.com/Haile09774574"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="f-x">
                <img src={x} alt="x" />
              </div>
            </a>
          </div>
          <div className="f-icon">
            <a
              href="https://github.com/Haile-08"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="f-github">
                <img src={github} alt="github" />
              </div>
            </a>
          </div>
          <div className="f-icon">
            <a
              href="https://www.linkedin.com/in/haile-melaku/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="f-linkedin">
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
