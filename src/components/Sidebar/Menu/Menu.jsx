import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Menu.less";

export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      menuItems: [
        {
          name: "Home",
          link: "/"
        },
        {
          name: "About Me",
          link: "/about"
        },
        {
          name: "Portfolio",
          link: "/projects"
        },
        {
          name: "Contact",
          link: "/contact"
        }
      ],
      socialIcons: [
        {
          name: "LinkedIn",
          icon: "fab fa-linkedin-in",
          link: "https://ca.linkedin.com/in/eugenecostov"
        },
        {
          name: "Github",
          icon: "fab fa-github",
          link: "https://github.com/EugeCos"
        }
      ]
    };
  }

  render() {
    const { menuItems, socialIcons } = this.state;

    let menuItemsJSX = menuItems.map(item => {
      return (
        <Link
          to={item.link}
          key={item.name}
          className={`menu-item ${
            window.location.pathname === item.link ? "selected" : ""
          }`}
        >
          {item.name}
        </Link>
      );
    });

    let socialIconsJSX = socialIcons.map(socialItem => {
      return (
        <i
          className={`social-icon ${socialItem.icon}`}
          onClick={() => window.open(socialItem.link, "_blank")}
        />
      );
    });

    return (
      <div className="menu-items-container">
        <div className="menu-item-wrapper">{menuItemsJSX}</div>
        <hr className="hr-styled" />
        <div className="social-links-wrapper">{socialIconsJSX}</div>
      </div>
    );
  }
}
