import "./Navigation.css";

type navProps = {
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

function Navigation() {
  return <div className="navigation">Navigation</div>;
}

export default Navigation;
