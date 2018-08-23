import React, { Component } from "react";
import "./View-Container.less";

export default class ViewContainer extends Component {
  render() {
    return (
      <div className="view-container-positioner">
        <div className="view-container-body">
          <video
            className="video"
            src="/video/drop.mp4"
            loop
            muted
            autoPlay="autoplay"
          />
        </div>
      </div>
    );
  }
}
