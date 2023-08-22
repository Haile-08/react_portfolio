import "./NavBar.css";
import MenuButton from "./MenuButton/MenuButton";
import { Dispatch, SetStateAction } from "react";

type navProps = {
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

function NavBar({ open, setOpen }: navProps) {
  const handleClick = () => {
    if (setOpen) {
      setOpen((prevState) => !prevState);
    }
  };
  return (
    <div className="navBar">
      <div className="navBar-nav">
        <div className="navBar-hamburger-menu" onClick={handleClick}>
          <MenuButton open={open} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
