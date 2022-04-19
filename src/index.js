import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./components/App.js";
import Header from "./components/Header.js";
import EvalStatus from "./components/EvalStatus.js";
import NotFound from "./components/NotFound.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/success" element={<EvalStatus />} />
        <Route path="/failure" element={<EvalStatus />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </StrictMode>
);
