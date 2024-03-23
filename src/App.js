import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/homescreen";
function App() {
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
