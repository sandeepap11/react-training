import React from "react";
import "./App.css";
import AppTile from "./AppTile-Functional";

const App = () => {
  return (
    <div className="App">
      {[1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19].map(number => (
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
      ))}
    </div>
  );
};

export default App;
