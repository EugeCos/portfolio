import React, { Component } from "react";
import "./About.less";

// ----------REACT-CSS-TRANSITION-GROUP-----------
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default class About extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={300}
        transitionName="fade-effect"
      >
        <div className="about-container">
          <div className="stars-container">
            <i className="far fa-star" />
            <i className="far fa-star" />
            <i className="far fa-star" />
          </div>

          <h3>
            <span className="first-letter">H</span>
            ello there! I am happy to see you here, hope the splashing water
            doesn't distract you much from reading my little story.
          </h3>
          <br />
          <h3>
            <span className="first-letter">I</span>
            &nbsp;am a full stack web developer with a range of successful web
            projects: websites, CMS platforms and single page applications
            (click on PORTFOLIO to check out some of them). I have a BA in
            Economics and I have completed a full-time intensive web development
            program (with emphasis on MERN stack).
          </h3>
          <br />
          <h3>
            <span className="first-letter">O</span>
            riginally from wonderful and picturesque{" "}
            <span
              style={{ color: "#0652DD", cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "http://chumash.us/wp-content/uploads/2013/05/MAX8389.jpg",
                  "_blank"
                )
              }
            >
              Republic of Moldova
            </span>
            , I currently reside in Toronto, Ontario. I would describe myself as
            an avid road cyclist and skier, indie-film and indie-music lover, as
            well as long-term pizza enthusiast. I firmly believe the best days
            are the snowiest ones.
          </h3>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
