import React, { Component } from "react";
import "./Sidebar.less";

// ---------COMPONENTS----------
import Bio from "./Bio/Bio";
import Menu from "./Menu/Menu";

export default class Sidebar extends Component {
  render() {
    const { toggleMenuIcon, toggleMenuIconFunction, closeMenu } = this.props;
    return (
      <div className="sidebar-positioner">
        <div className="sidebar-container">
          <Bio />
          <hr className="hr-styled" />
          <Menu toggleMenuIcon={toggleMenuIcon} closeMenu={closeMenu} />
        </div>

        {/* Background dark overlay  */}
        <div
          onClick={toggleMenuIconFunction}
          className="overlay"
          style={
            toggleMenuIcon
              ? { background: "#000000" }
              : { background: "transparent", pointerEvents: "none" }
          }
        />
      </div>
    );
  }
}
