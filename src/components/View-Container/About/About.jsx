import React, { Component } from "react";
import { Link } from "react-router-dom";
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
            &nbsp;am happy to see you here, hope you're having a sunny day.
          </h3>
          <br />
          <h3>
            <span className="first-letter">I&nbsp;</span>am a full stack web
            developer with a range of successful web projects: websites, CMS
            platforms and single page applications. I mostly work with
            front-end, with an emphasis on MERN stack. If you need a custom
            modern-looking website for your restaurant, yoga studio, music band
            or any other type of business, feel free to reach out. In general,
            I'm open for new projects, as long as you promise it will be
            interesting and engaging ;). If you wish to learn more, please feel
            free to message me.
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

          {screenWidth < 480 ? (
            <div className="buttons-container">
              <Link to="/projects" className="btn-orange">
                visit portfolio
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
