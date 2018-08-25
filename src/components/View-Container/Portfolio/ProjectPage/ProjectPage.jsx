import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProjectPage.less";

// ----------REACT-CSS-TRANSITION-GROUP-----------
// css rules for transtions are located in global.css
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default class ProjectPage extends Component {
  componentWillMount() {
    this.props.checkIfLandedFromAnotherPage();
  }

  render() {
    const { projects, match } = this.props;
    const name = match.params.projectName;
    const project = projects[name];

    let techUsedJSX = project.tech.map(item => {
      return (
        <div className="tech-wrapper" key={item}>
          <i className="far fa-star" />
          <h3>{item}</h3>
        </div>
      );
    });

    let mobileImagesJSX = project.imagesMobile.map(image => {
      return (
        <div
          className="mobile-image"
          style={{
            backgroundImage: `url(${image})`
          }}
        />
      );
    });

    return (
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={300}
        transitionName="fade-effect"
      >
        <div className="selected-project-container">
          <div className="selected-project-header">
            <h2>{project.name}</h2>
            <hr className="pink-hr" />
          </div>

          <div className="selected-project-content">
            <section className="desktop-content-wrapper">
              <div className="desktop-image-wrapper">
                <div
                  className="desktop-image"
                  style={{
                    backgroundImage: `url(${project.imageDesktop})`
                  }}
                />
              </div>
              <div className="desktop-text-wrapper">
                <h3>{project.longDescription}</h3>
              </div>
            </section>

            <section className="mobile-content-wrapper">
              <div className="mobile-text-wrapper">{techUsedJSX}</div>
              <div className="mobile-image-wrapper">{mobileImagesJSX}</div>
            </section>
          </div>

          <div className="buttons-container">
            <Link to="/projects" className="custom-btn btn-back">
              back
            </Link>
            <span
              onClick={() => window.open(`${project.link}`, "_blank")}
              className="custom-btn btn-visit"
            >
              visit project
            </span>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
