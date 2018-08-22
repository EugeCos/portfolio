import React, { Component, Fragment } from "react";
import "./App.less";
import "./css/global.less";

// ----------COMPONENTS----------
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
      </Fragment>
    );
  }
}

export default App;
