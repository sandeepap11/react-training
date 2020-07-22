import React from "react";
import "./App.css";
import AppTile from "./AppTile";

// Class Components examples here
// App-Functional.js has functional components

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {[1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19].map(
          number => (
            <AppTile
              key={number}
              isBlackTile={number % 2 === 0}
              number={number}
            />
          )
        )}
      </div>
    );
  }
}

export default App;
