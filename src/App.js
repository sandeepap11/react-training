import React from "react";
import "./App.css";
import Player from "./components/Player";

function App() {
  return (
    <div className="app-main">
      <Player
        {...{
          firstName: "Stephen",
          lastName: "Curry",
          age: 32,
          team: "Golden State Warriors"
        }}
      />
    </div>
  );
}

export default App;
