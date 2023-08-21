import { Dispatch, SetStateAction } from "react";
import "./Navigation.css";
import MenuButton from "../Home/MenuButton/MenuButton";

type navProps = {
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

function Navigation({ open, setOpen }: navProps) {
  return (
    <div className="navigation">
      <div className="navigation-nav">
        <div className="navigation-hamburger-menu">
          <MenuButton open={open} />
        </div>
      </div>
      <div className="navigation-body"></div>
    </div>
  );
}

export default Navigation;
