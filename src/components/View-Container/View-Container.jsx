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
      projects: [
        {
          name: "Velvet Crypto",
          description: "Cryptocurrency exchange app",
          imageHover: "/img/velvet.jpg",
          imageBackground: "/img/velvet_bw.jpg",
          index: 1
        },
        {
          name: "Fairmont Property Management",
          description: "Property management site with custom CMS platform",
          imageHover: "/img/fairmont.jpg",
          imageBackground: "/img/fairmont_bw.jpg",
          index: 2
        }
      ],
      selectedProject: {}
    };
  }

  handleSelectedProject = projectId => {
    this.setState({
      selectedProject: projectId
    });
  };

  render() {
    const { projects, selectedProject } = this.state;
    return (
      <div className="view-container-positioner">
        <div className="view-container-body">
          <Switch>
            <Route path="/about" component={About} />
            <Route
              exact
              path="/projects"
              component={() => (
                <Portfolio
                  projects={projects}
                  handleSelectedProject={this.handleSelectedProject}
                />
              )}
            />
            <Route
              exact
              path="/projects/:projectId"
              component={() => <ProjectPage project={projects} />}
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
