import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
