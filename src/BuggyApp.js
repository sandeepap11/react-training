import React from "react";

export default class BuggyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }));
  }

  render() {
    if (this.state.counter === 5) {
      // Simulate a JS error
      throw new Error("I crashed!");
    }
    return [
      <h1 key="header">{this.state.counter}</h1>,
      <button key="button" onClick={this.handleClick}>
        +
      </button>
    ];
  }
}
