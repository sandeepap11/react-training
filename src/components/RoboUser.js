import * as React from "react";
import { RoboContext } from "../App";

export const RoboUser = ({ id, name, email }) => {
  const roboContext = React.useContext(RoboContext);
  return (
    <div className="robo-user-main">
      <img src={`https://robohash.org/${email}`} alt={name} />
      <div className="robo-user-info">
        <div className="robo-user-name">{name}</div>
        <div className="robo-user-email">{email}</div>
      </div>
      <button
        className="robo-remove-button"
        onClick={() =>
          roboContext.dispatch({
            type: "REMOVE_USER",
            id
          })
        }
      >
        X
      </button>
    </div>
  );
};
