import React, { Component } from "react";
import Tile from "./Tile";
import "./Chess.css";

class Board extends Component {
  render() {
    let tileArray = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        tileArray.push(`${i} + ${j}`);
      }
    }
    return (
      <div className="chess-main">
        {tileArray.map(tile => (
          <Tile key={tile} />
        ))}
      </div>
    );
  }
}

export default Board;
