import { Dispatch, SetStateAction } from "react";
import "./Navigation.css";

type navProps = {
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

function Navigation({ open, setOpen }: navProps) {
  return <div className="navigation">Navigation</div>;
}

export default Navigation;
