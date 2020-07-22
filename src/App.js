import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      textValue: ""
    };
  }
  render() {
    return (
      <div className="App">
        <input
          type="text"
          style={{ height: "40px", width: "200px", margin: "5% 20%" }}
          onChange={event => this.setState({ textValue: event.target.value })}
        />
        <button
          onClick={() => this.setState({ inputValue: this.state.textValue })}
        >
          Show Value
        </button>
        <div>Value is {this.state.inputValue}</div>
      </div>
    );
  }
}

export default App;
