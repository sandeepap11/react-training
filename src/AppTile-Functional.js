import React from "react";

function AppTile(props) {
  const { isBlackTile, number } = props;

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

export default AppTile;
