import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className="app">
        <Home open={open} setOpen={setOpen} />
      </div>
    </>
  );
}

export default App;
