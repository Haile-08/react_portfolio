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
            <div className="x">
              <img src={x} alt="x" />
            </div>
          </div>
          <div className="icon">
            <div className="github">
              <img src={github} alt="github" />
            </div>
          </div>
          <div className="icon">
            <div className="linkedin">
              <img src={linkedin} alt="linkedin" />
            </div>
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
