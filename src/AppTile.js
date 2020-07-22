import React, { Component } from "react";

class AppTile extends Component {
  render() {
    const { isBlackTile, number } = this.props;

    return (
      <div
        style={
          isBlackTile
            ? { color: "#fff", backgroundColor: "#000" }
            : { color: "#000", backgroundColor: "#fff" }
        }
      >
        {number}
      </div>
    );
  }
}

export default AppTile;
