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
          link: "/you-used-to-call-me-on-my-cell-phone"
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
    const { toggleMenuIcon, closeMenu } = this.props;

    let menuItemsJSX = menuItems.map(item => {
      return (
        <Link
          to={item.link}
          key={item.name}
          className={`menu-item ${item.name.replace(/\s/g, "").toLowerCase()} ${
            window.location.pathname === item.link ? "selected" : ""
          }`}
          onClick={closeMenu}
        >
          {item.name}
        </Link>
      );
    });

    let socialIconsJSX = socialIcons.map(socialItem => {
      return (
        <i
          key={socialItem.name}
          className={`social-icon ${socialItem.icon}`}
          onClick={() => window.open(socialItem.link, "_blank")}
        />
      );
    });

    return (
      <div className={`menu-items-container ${toggleMenuIcon ? "" : "hide"}`}>
        <div className="menu-item-wrapper">{menuItemsJSX}</div>
        <hr className="hr-styled" />
        <div className="social-links-wrapper">{socialIconsJSX}</div>
      </div>
    );
  }
}
