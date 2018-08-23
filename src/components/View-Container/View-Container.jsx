import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./View-Container.less";

// -------COMPONENTS--------
import Home from "./Home/Home";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";

export default class ViewContainer extends Component {
  render() {
    return (
      <div className="view-container-positioner">
        <div className="view-container-body">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Portfolio} />

          <video
            className="video"
            src="/video/drop.mp4"
            type="video/mp4"
            loop
            muted
            autoPlay="autoplay"
          />
          <div
            className={`${
              window.location.pathname !== "/"
                ? "dark-video-overlay"
                : "dark-video-overlay-none"
            }`}
          />
        </div>
      </div>
    );
  }
}
