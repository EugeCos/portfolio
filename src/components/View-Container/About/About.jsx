import React, { Component } from "react";
import "./About.less";

// ----------REACT-CSS-TRANSITION-GROUP-----------
// css rules for transtions are located in global.css
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default class About extends Component {
  componentWillMount() {
    this.props.checkIfLandedFromAnotherPage();
  }

  render() {
    const { screenWidth } = this.props;
    return (
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={300}
        transitionName={screenWidth > 1024 ? "fade-effect" : ""}
      >
        <div className="about-container">
          <div className="header-container">
            {screenWidth < 1024 ? (
              <img
                src="/img/headshot.jpg"
                alt="headshot"
                className="profile-headshot"
              />
            ) : (
              ""
            )}
            <h2>HELLO THERE, I'M EUGENE</h2>
            <hr className="about-hr" />
          </div>

          <h3>
            <span className="first-letter">I</span>
            &nbsp;am happy to see you here,{" "}
            {screenWidth > 1024 ? (
              <span>
                hope the splashing water doesn't distract you much from reading
                my little story.
              </span>
            ) : (
              <span>hope you're having a sunny day.</span>
            )}
          </h3>
          <br />
          <h3>
            <span className="first-letter">W</span>
            hat have I been up to recently? Well, I am a full stack web
            developer with a range of successful web projects: websites, CMS
            platforms and single page applications. I have a BA in Economics and
            I have completed a full-time intensive web development program (with
            emphasis on MERN stack).
          </h3>
          <br />
          <h3>
            <span className="first-letter">O</span>
            riginally from wonderful and friendly&nbsp;
            <span
              style={{ color: "#ffeaa7", cursor: "pointer" }}
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
            a very 90's kind of person. Also, I am an avid indie-film and
            indie-music lover, as well as a long-term pizza enthusiast. I firmly
            believe the best days are the snowiest ones.
          </h3>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
