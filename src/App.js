import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  render() {
    return React.createElement("div", null, [
      "Hey",
      React.createElement("p", null, "Hello World")
    ]);
  }
}

export default App;
