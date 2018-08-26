import React, { Component } from "react";
import "./App.less";
import "./css/global.less";

// ----------COMPONENTS----------
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import ViewContainer from "./components/View-Container/View-Container";

class App extends Component {
  constructor() {
    super();
    this.state = { toggleMenuIcon: false };
  }

  toggleMenuIcon = () => {
    this.setState({
      toggleMenuIcon: !this.state.toggleMenuIcon
    });
  };

  render() {
    const { toggleMenuIcon } = this.state;
    return (
      <div className="App">
        <Navbar
          toggleMenuIcon={toggleMenuIcon}
          toggleMenuIconFunction={this.toggleMenuIcon}
        />
        <Sidebar
          toggleMenuIcon={toggleMenuIcon}
          toggleMenuIconFunction={this.toggleMenuIcon}
        />
        <ViewContainer />
      </div>
    );
  }
}

export default App;
