import React, { Component } from "react";
import "./App.css";
import "./css/global.less";

// ----------COMPONENTS----------
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import ViewContainer from "./components/View-Container/View-Container";

class App extends Component {
  constructor() {
    super();
    this.state = { toggleMenuIcon: false, screenWidth: undefined };
  }

  toggleMenuIcon = () => {
    this.setState({
      toggleMenuIcon: !this.state.toggleMenuIcon
    });
  };

  closeMenu = () => {
    this.setState({
      toggleMenuIcon: false
    });
  };

  getScreenWidth = () => {
    this.setState({
      screenWidth: window.innerWidth
    });
  };

  componentWillMount() {
    this.getScreenWidth();
    // window.addEventListener("resize", this.getScreenWidth);
  }
  componentWillUnmount() {
    // window.removeEventListener("resize", this.getScreenWidth);
  }

  render() {
    const { toggleMenuIcon, screenWidth } = this.state;
    return (
      <div className="App">
        <Navbar
          screenWidth={screenWidth}
          toggleMenuIcon={toggleMenuIcon}
          toggleMenuIconFunction={this.toggleMenuIcon}
        />
        <Sidebar
          toggleMenuIcon={toggleMenuIcon}
          toggleMenuIconFunction={this.toggleMenuIcon}
          closeMenu={this.closeMenu}
        />
        <ViewContainer screenWidth={screenWidth} />
      </div>
    );
  }
}

export default App;
