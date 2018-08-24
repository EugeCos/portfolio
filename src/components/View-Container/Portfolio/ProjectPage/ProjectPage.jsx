import React, { Component } from "react";
import "./ProjectPage.less";

// ----------REACT-CSS-TRANSITION-GROUP-----------
// css rules for transtions are located in global.css
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default class ProjectPage extends Component {
  render() {
    const { projects, match } = this.props;
    const name = match.params.projectName;
    const project = projects[name];

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
            <section className="selected-project-content">
              <div className="desktop-content-wrapper">
                <div
                  className="desktop-image"
                  style={{
                    backgroundImage: `url(${project.imageDesktop})`
                  }}
                />
                <h3>{project.longDescription}</h3>
              </div>
            </section>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
