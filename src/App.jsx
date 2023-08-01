import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home"
import Blue from "./components/Blue"
import Red from "./components/Red"
import Green from "./components/Green"
import Links from "./components/Link"
import './App.css'

const App = () => {
  return (
    <>
      <div id="main-section">
        <nav>
          <Links/>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blue" element={<Blue/>} />
          <Route path="/red" element={<Red/>} />
          <Route path="/green" element={<Green/>}/>
        </Routes>
      </div>
    </>
  );
};

export default App
