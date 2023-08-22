import "./Navigation.css";
import x from "../../assets/x.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation-body">
        <div className="navigation-social">
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
        <div className="navigation-menu">
          <div className="navigation-menu-container">
            <a href="http://">Home</a>
            <a href="http://">Project</a>
            <a href="http://">Contact</a>
            <a href="http://">About</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
