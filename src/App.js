// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./componants/NavBar";
import TextForm from "./componants/TextForm";
import About from "./componants/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.title = "text magic dark-mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "text magic light-mode";
    }
  };
  return (
    <>
      <Router>
        <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} />

        <div className="container">
          <Routes>
            <Route exect path="/About" element={<About mode={mode} />} />
            <Route
              exect
              path="/"
              element={<TextForm heading="TEXT MAGIC " mode={mode} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

//V6 VERSION OF REACT ROUTER DOM

// {
//   /* <Routes>
//         <Route exact path='/' element={<Home />} />
//         <Route path='/register' element={<Signup />} />
//         <Route path='/Login' element={<Login />} />
//         </Routes> */
// }
