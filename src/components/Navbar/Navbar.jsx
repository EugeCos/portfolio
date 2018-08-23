import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.less";

const lightBG = {
  color: "#222f3e",
  textShadow: "0 0 25px #222f3e"
};

const darkBG = {
  color: "#fff",
  textShadow: "0 0 35px #fff"
};

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-link">
        <h3 style={window.location.pathname !== "/" ? darkBG : lightBG}>
          Eugeville
        </h3>
      </Link>
    </div>
  );
};

export default Navbar;
