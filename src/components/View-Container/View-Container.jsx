import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./View-Container.less";

// -------COMPONENTS--------
import Home from "./Home/Home";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import ProjectPage from "./Portfolio/ProjectPage/ProjectPage";

export default class ViewContainer extends Component {
  constructor() {
    super();
    this.state = {
      projects: {
        velvet: {
          name: "Velvet Crypto",
          shortDescription: "Cryptocurrency exchange app",
          longDescription:
            "A serverless web-app that allows users to look up cryptocurrencies from a database of 2500+ options and perform basic virtual trade manipulations (buy and sell coins)",
          tech: ["React / Redux", "Axios", "Material-UI", "Less"],
          imageHover: "/img/velvet/velvet.jpg",
          imageBackground: "/img/velvet/velvet_bw.jpg",
          imageDesktop: "/img/velvet/velvet_desktop.png",
          imagesMobile: [
            "/img/velvet/velvet_mobile_1.png",
            "/img/velvet/velvet_ipad.png",
            "/img/velvet/velvet_mobile_2.png"
          ],
          index: 1
        },
        fairmont: {
          name: "Fairmont Property Management",
          shortDescription: "Property management site with custom CMS platform",
          longDescription:
            "Property management platform for a rental company based in Dallas, TX. Development was based on designer’s Sketch prototype using mobile-first approach. Site included a custom CMS platform with Sanity.io, this allows client to easily update site content",
          tech: ["React", "React Google Maps", "Less", "Sanity.io"],
          imageHover: "/img/fairmont/fairmont.jpg",
          imageBackground: "/img/fairmont/fairmont_bw.jpg",
          imageDesktop: "/img/fairmont/fairmont_desktop.png",
          imagesMobile: [
            "/img/fairmont/fairmont_mobile_1.png",
            "/img/fairmont/fairmont_ipad.png",
            "/img/fairmont/fairmont_mobile_2.png"
          ],
          index: 2
        }
      }
    };
  }

  render() {
    const { projects } = this.state;
    return (
      <div className="view-container-positioner">
        <div className="view-container-body">
          <Switch>
            <Route path="/about" component={About} />
            <Route
              exact
              path="/projects"
              component={() => <Portfolio projects={projects} />}
            />
            <Route
              exact
              path="/projects/:projectName"
              component={props => (
                <ProjectPage match={props.match} projects={projects} />
              )}
            />
            <Route path="/" component={Home} />
          </Switch>

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
