import React, { useContext } from "react";
import { RoboUser } from "./RoboUser";
import { RoboContext } from "../App";

export const RoboUsers = () => {
  const roboContext = useContext(RoboContext);

  return (
    <div className="main-class">
      <h1>Robo Users</h1>
      {roboContext.roboUsers
        .filter(roboUser => roboUser.isActive)
        .map(roboUser => (
          <RoboUser key={roboUser.id} {...roboUser} />
        ))}
      <button
        className="robo-reinstate-button"
        onClick={() =>
          roboContext.dispatch({
            type: "RESET_USERS"
          })
        }
      >
        REINSTATE
      </button>
    </div>
  );
};
