import React, { Component } from "react";
import "./Contact.less";

// ----------REACT-CSS-TRANSITION-GROUP-----------
// css rules for transtions are located in global.css
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      hovered: false,
      hoveredElement: ""
    };
  }

  hoverOn = hoveredElement => {
    const { screenWidth } = this.props;
    if (screenWidth > 1024) {
      this.setState({
        hovered: true,
        hoveredElement
      });
    }
  };

  hoverOff = () => {
    this.setState({
      hovered: false,
      hoveredElement: ""
    });
  };

  componentWillMount() {
    this.props.checkIfLandedFromAnotherPage();
  }

  render() {
    const { hoveredElement } = this.state;
    const { screenWidth } = this.props;

    return (
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={300}
        // transitionName={screenWidth > 1024 ? "fade-effect" : ""}
        transitionName="fade-effect"
      >
        <div className="contact-container">
          <div className="contact-header">
            <h2>Contact me</h2>
            <hr className="pink-hr" />

            <div className="name-email">
              <h3>Eugene Costov</h3>
              <a class="mailto" href="mailto:contact@test.com">
                eugene.costov@gmail.com
              </a>
            </div>
          </div>
          <div className="linkedin-github-wrapper">
            <div
              className={`${
                hoveredElement === "linkedin" ? "linkedin-hover" : "linkedin"
              }`}
            >
              <h3
                className={`${
                  hoveredElement === "linkedin"
                    ? "social-name-hover"
                    : "social-name"
                }`}
              >
                LINKEDIN
              </h3>
              <h4
                onMouseEnter={() => this.hoverOn("linkedin")}
                onMouseLeave={() => this.hoverOff()}
                onClick={() =>
                  window.open(
                    "https://ca.linkedin.com/in/eugenecostov",
                    "_blank"
                  )
                }
              >
                ca.linkedin.com/in/eugenecostov
              </h4>
            </div>
            <div
              className={`${
                hoveredElement === "github" ? "github-hover" : "github"
              }`}
            >
              <h3
                className={`${
                  hoveredElement === "github"
                    ? "social-name-hover"
                    : "social-name"
                }`}
              >
                GITHUB
              </h3>
              <h4
                onMouseEnter={() => this.hoverOn("github")}
                onMouseLeave={() => this.hoverOff()}
                onClick={() =>
                  window.open("https://github.com/EugeCos", "_blank")
                }
              >
                github.com/EugeCos
              </h4>
            </div>
          </div>

          <div
            className={`${
              hoveredElement === "resume" ? "resume-hover" : "resume"
            }`}
          >
            <div>
              <h3
                className={`${
                  hoveredElement === "resume"
                    ? "social-name-hover"
                    : "social-name"
                }`}
              >
                RESUME
              </h3>
              <h4
                onMouseEnter={() => this.hoverOn("resume")}
                onMouseLeave={() => this.hoverOff()}
                // onClick={() => window.open("#")}
              >
                Download resume
              </h4>
            </div>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
