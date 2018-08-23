import React, { Component } from "react";
import "./Sidebar.less";

// ---------COMPONENTS----------
import Bio from "./Bio/Bio";
import Menu from "./Menu/Menu";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-positioner">
        <div className="sidebar-container">
          <Bio />
          <hr className="hr-styled" />
          <Menu />
        </div>
      </div>
    );
  }
}
