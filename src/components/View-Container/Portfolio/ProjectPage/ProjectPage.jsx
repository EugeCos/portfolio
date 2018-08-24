import React, { Component } from "react";
import "./ProjectPage.less";

// ----------REACT-CSS-TRANSITION-GROUP-----------
// css rules for transtions are located in global.css
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default class ProjectPage extends Component {
  render() {
    console.log(this.props.match.params);
    return (
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={300}
        transitionName="fade-effect"
      >
        <div className="selected-project-container">
          <h2>Project Page</h2>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
