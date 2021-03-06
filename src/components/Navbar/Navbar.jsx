import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.less";

const lightBG = {
  color: "#222f3e",
  textShadow: "0 0 35px #222f3e"
};

const lightBGSmallScreen = {
  color: "#222f3e",
  textShadow: "0 1px 10px #222f3e"
};

const darkBG = {
  color: "#fff",
  textShadow: "0 0 35px #fff"
};

export default class Navbar extends Component {
  render() {
    const { toggleMenuIcon, screenWidth, toggleMenuIconFunction } = this.props;
    return (
      <div className="navbar">
        <Link to="/" className="navbar-link">
          <h3
            style={
              window.location.pathname !== "/" && screenWidth > 1024
                ? darkBG
                : screenWidth < 1024
                  ? lightBGSmallScreen
                  : lightBG
            }
          >
            Eugeville
          </h3>
        </Link>
        <div
          className="three-bars-icon-container"
          onClick={toggleMenuIconFunction}
        >
          <div className={`bar-1 ${toggleMenuIcon ? "change-1" : ""}`} />
          <div className={`bar-2 ${toggleMenuIcon ? "change-2" : ""}`} />
          <div className={`bar-3 ${toggleMenuIcon ? "change-3" : ""}`} />
        </div>
      </div>
    );
  }
}
