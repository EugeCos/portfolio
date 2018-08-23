import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.less";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-link">
        <h3>Eugeville</h3>
      </Link>
    </div>
  );
};

export default Navbar;
