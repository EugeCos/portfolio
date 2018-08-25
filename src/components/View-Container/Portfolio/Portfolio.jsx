import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Portfolio.less";

// ----------REACT-CSS-TRANSITION-GROUP-----------
// css rules for transtions are located in global.css
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      hover: false,
      hoveredProject: ""
    };
  }

  hoverOn = projectName => {
    this.setState({
      hover: true,
      hoveredProject: projectName
    });
  };

  hoverOff = () => {
    this.setState({
      hover: false,
      hoveredProject: ""
    });
  };

  render() {
    const { hoveredProject, hover } = this.state;
    const { projects } = this.props;

    let projectJSX = Object.keys(projects).map(key => {
      const currentProject = projects[key];
      return (
        <Link
          to={`/projects/${key}`}
          key={currentProject.index}
          className="project-container"
        >
          <div
            onMouseEnter={() => this.hoverOn(currentProject.name)}
            onMouseLeave={() => this.hoverOff(currentProject.name)}
          >
            <div
              className={`${
                hoveredProject === currentProject.name
                  ? "project-number-hover"
                  : "project-number"
              }`}
            >
              {currentProject.index}
            </div>
            <img
              className="project-image"
              src={
                hover
                  ? hoveredProject === currentProject.name
                    ? currentProject.imageHover
                    : currentProject.imageBackground
                  : currentProject.imageBackground
              }
              alt="project"
            />
            <div
              className={`${
                hoveredProject === currentProject.name
                  ? "hover-style hover-overlay"
                  : "dark-overlay"
              }`}
            />
            <div
              className={`${
                hoveredProject === currentProject.name
                  ? "project-name-container-hover"
                  : "project-name-container"
              }`}
            >
              <h3
                className={`${
                  hoveredProject === currentProject.name
                    ? "project-name-hover"
                    : "project-name"
                }`}
              >
                {currentProject.name}
              </h3>
              <h4
                className={`${
                  hoveredProject === currentProject.name
                    ? "project-description-hover"
                    : "project-description"
                }`}
              >
                {currentProject.shortDescription}
              </h4>
            </div>
          </div>
        </Link>
      );
    });

    return (
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={300}
        transitionName="fade-effect"
      >
        <div className="portfolio-container">
          <div className="portfolio-header">
            <h2>PROJECTS</h2>
            <hr className="pink-hr" />
          </div>
          <div className="projects-wrapper">{projectJSX}</div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
