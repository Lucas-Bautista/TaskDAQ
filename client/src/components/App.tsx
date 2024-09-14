import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Goals from "./pages/Goals"
import NavBar from "./modules/Navbar"
import "./App.scss"
const App = () => {
    return (
        <> 
        <NavBar/>
        <div className="page">
          <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/Goals" element = {<Goals/>}/>
          </Routes> 
        </div>
        </>
      );
}

export default App