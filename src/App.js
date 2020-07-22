import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      inputValue: ""
    };
  }
  render() {
    return (
      <div className="App">
        <input
          type="text"
          style={{ height: "40px", width: "200px", margin: "5% 20%" }}
          ref={this.inputRef}
        />
        <button
          onClick={() =>
            this.setState({ inputValue: this.inputRef.current.value })
          }
        >
          Show Value
        </button>
        <div>Value is {this.state.inputValue}</div>
      </div>
    );
  }
}

export default App;
