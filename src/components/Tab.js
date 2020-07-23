import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

function Tab({ location, tab }) {
  const isSelected = location.pathname === tab.path;
  return (
    <li
      style={{
        backgroundColor: !isSelected ? "black" : "white",
        color: isSelected ? "black" : "white"
      }}
    >
      <Link to={tab.path}>{tab.name}</Link>
    </li>
  );
}

export default withRouter(Tab);
