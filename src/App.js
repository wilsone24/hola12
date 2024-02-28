import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import Meettheteam from "./Pages/Home/Homescreen/team";
import Hypo from "./Pages/Home/Homescreen/argument";
import Visua from "./Pages/Home/Homescreen/data";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<Meettheteam />}></Route>
            <Route path="/hypothesis" element={<Hypo />}></Route>
            <Route path="/visualization" element={<Visua />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
