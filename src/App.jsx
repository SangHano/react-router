import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home"
import Blue from "./components/Blue"
import Red from "./components/Red"
import Green from "./components/Green"
import './App.css'

const App = () => {
  return (
    <>
      <div id="main-section">
        <nav>
          <Link id="homeLink" to="/">Home</Link>
          <Link id="blueLink" to="/blue">Daily Life</Link>
          <Link id="redLink" to="/red">Not Done YET!!!!!</Link>
          <Link id="greenLink" to ="/green">Not Dont YET!!!</Link>
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
