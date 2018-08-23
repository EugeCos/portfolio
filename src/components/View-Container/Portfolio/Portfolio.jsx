import React, { Component } from "react";
import "./Portfolio.less";

export default class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      hover: false,
      hoveredProject: "",
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
      ]
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
    const { projects, hoveredProject, hover } = this.state;
    let projectJSX = projects.map(project => {
      return (
        <div
          className="project-container"
          key={project.index}
          onMouseEnter={() => this.hoverOn(project.name)}
          onMouseLeave={() => this.hoverOff(project.name)}
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
      );
    });

    return (
      <div className="portfolio-container">
        <h3 className="portfolio-header">PROJECTS</h3>
        {projectJSX}
      </div>
    );
  }
}
