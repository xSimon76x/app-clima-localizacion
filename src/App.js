// import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //link
import React from "react";
import Home from "./pages/home";
import MetaWeather from "./api/metaWeather";
// import { useState } from "react";

function App() {
  return (
    <div
      className="App"
      style={{
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        position: "absolute",
      }}
    >
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
