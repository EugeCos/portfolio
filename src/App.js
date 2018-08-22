import React, { Component } from "react";
import "./App.less";
import "./css/global.less";

// ----------COMPONENTS----------
import Sidebar from "./components/Sidebar/Sidebar";
import ViewContainer from "./components/View-Container/View-Container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <ViewContainer />
      </div>
    );
  }
}

export default App;
