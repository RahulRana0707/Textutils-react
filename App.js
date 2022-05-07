import "./App.css";
// import About from "./About";
import { useState } from "react";
import Component from "./Component";
import Textform from './Textform'
import Alert from "./Alert";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom"

export default function App() {
  const [alert, setalert] = useState(null);
  const [enabletext, setenabletext] = useState("Enable DarkMode");
  const [mode, setmode] = useState("light");
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      setenabletext("Enable LightMode");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "grey";
      showalert("Dark Mode has been activated", "success");
    } else {
      setmode("light");

      document.body.style.color = "#343a40";
      document.body.style.backgroundColor = "white";
      setenabletext("Enable DarkMode");
      showalert("Light Mode has been activated", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
        <Alert alert={alert} />
        <Component
          title="Rahul Rana"
          link1="Home"
          link2="About"
          link3="Contact"
          mode={mode}
          togglemode={togglemode}
          enabletext={enabletext}
        />
        <div className="container">
        <Textform heading="hello"></Textform>
          {/* <Routes> */}
            {/* <Route exact path="/" element={<Texform heading="Textutils"/>}/>
            <Route exact path="/about" element={<About/>}/>
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}
