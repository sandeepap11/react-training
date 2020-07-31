import * as React from "react";

export default class Counter extends React.Component {
  state = {
    count: 0
  };

  changeCounter = type =>
    this.setState(prevState => ({
      count: type === "-" ? prevState.count - 1 : prevState.count + 1
    }));

  render() {
    return (
      <div className="main-counter-class">
        <button onClick={() => this.changeCounter("-")}>-</button>
        <div>{this.state.count}</div>
        <button onClick={() => this.changeCounter("+")}>+</button>
      </div>
    );
  }
}
