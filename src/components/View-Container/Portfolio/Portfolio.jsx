import React, { Component } from "react";
import "./Portfolio.less";

export default class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          name: "Velvet Crypto",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, dolore.",
          imageHover: "/img/velvet.jpg",
          imageBackground: "/img/velvet_bw.jpg",
          index: 1
        },
        {
          name: "Fairmont Property Management",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, dolore.",
          imageHover: "/img/fairmont.jpg",
          imageBackground: "/img/fairmont_bw.jpg",
          index: 2
        }
      ]
    };
  }
  render() {
    const { projects } = this.state;
    let projectJSX = projects.map(project => {
      return (
        <div className="project-container" key={project.index}>
          <img
            className="project-image"
            src={project.imageBackground}
            alt="image"
          />
        </div>
      );
    });

    return <div className="portfolio-container">{projectJSX}</div>;
  }
}
