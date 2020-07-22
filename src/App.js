import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-main">
          {[1, 2, 3, 4].map(number => (
            <div key={number} className="Box">
              {number}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
