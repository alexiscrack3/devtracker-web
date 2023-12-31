import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Roadmaps } from "../pages";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/roadmaps" element={<Roadmaps />} />
    </Routes>
  </Router>
);
