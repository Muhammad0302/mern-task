import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import ForgetPasswordPage from "./components/pages/ForgetPasswordPage";
import HomePage from "./components/pages/HomePage";

import "./App.css";
import Detail from "./components/pages/Detail";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forget-password" element={<ForgetPasswordPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

const Footer = () => {
  return (
    <p className="text-center" style={FooterStyle}>
      Designed & coded by{" "}
      <a href="#" target="_blank" rel="noopener noreferrer">
        Muhammad Ismail
      </a>
    </p>
  );
};

const FooterStyle = {
  background: "#222",
  fontSize: ".8rem",
  color: "#fff",
  position: "fixed",
  bottom: 0,
  padding: "1rem",
  margin: 0,
  width: "100%",
  opacity: ".5",
};
