import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "../node_modules/react-router-dom/dist/index";
import Products from "./components/Products/Products";
import Navbar from "./components/NavBar/Navbar";
import About from "./components/About/About";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={"/"} component={Products} element={Products} />
      </Routes>
    </Router>
  );
};

export default App;
