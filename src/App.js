import React, { Component } from "react";
import "./App.less";
import "./css/global.less";

// ----------COMPONENTS----------
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import ViewContainer from "./components/View-Container/View-Container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Navbar />
        <ViewContainer />
      </div>
    );
  }
}

export default App;
