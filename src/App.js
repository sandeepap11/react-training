import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: 1
    };
  }

  setSelected = number => this.setState({ selected: number });

  render() {
    return (
      <div className="App">
        <div className="App-main">
          {[1, 2, 3, 4].map(number => (
            <div
              key={number}
              className={
                this.state.selected === number ? "Box-selected" : "Box"
              }
              onClick={() => this.setSelected(number)}
            >
              {number}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
