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
    const { projects, handleSelectedProject } = this.props;
    let projectJSX = projects.map(project => {
      return (
        <Link
          to={`/projects/${project.index}`}
          key={project.index}
          className="project-container"
        >
          <div
            onMouseEnter={() => this.hoverOn(project.name)}
            onMouseLeave={() => this.hoverOff(project.name)}
            onClick={() => {
              handleSelectedProject(project.index);
            }}
          >
            <div
              className={`${
                hoveredProject === project.name
                  ? "project-number-hover"
                  : "project-number"
              }`}
            >
              {project.index}
            </div>
            <img
              className="project-image"
              src={
                hover
                  ? hoveredProject === project.name
                    ? project.imageHover
                    : project.imageBackground
                  : project.imageBackground
              }
              alt="project"
            />
            <div
              className={`${
                hoveredProject === project.name
                  ? "hover-style hover-overlay"
                  : "dark-overlay"
              }`}
            />
            <div
              className={`${
                hoveredProject === project.name
                  ? "project-name-container-hover"
                  : "project-name-container"
              }`}
            >
              <h3
                className={`${
                  hoveredProject === project.name
                    ? "project-name-hover"
                    : "project-name"
                }`}
              >
                {project.name}
              </h3>
              <h4
                className={`${
                  hoveredProject === project.name
                    ? "project-description-hover"
                    : "project-description"
                }`}
              >
                {project.description}
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
          </div>
          <div className="projects-wrapper">{projectJSX}</div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
