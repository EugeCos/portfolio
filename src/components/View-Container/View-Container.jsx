import React, { Component } from "react";
import "./View-Container.less";

// -------COMPONENTS--------
import Home from "./Home/Home";

export default class ViewContainer extends Component {
  render() {
    return (
      <div className="view-container-positioner">
        <div className="view-container-body">
          <Home />
          <video
            className="video"
            src="/video/drop.mp4"
            type="video/mp4"
            loop
            muted
            autoPlay="autoplay"
          />
        </div>
      </div>
    );
  }
}
