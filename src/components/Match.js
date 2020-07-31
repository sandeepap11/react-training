import * as React from "react";

export default function Match({ stage_name, location, home_team, away_team }) {
  return (
    <div className="match-card">
      <div>
        <p>{stage_name}</p>
        <p>{location}</p>
      </div>
      <p>
        {home_team.country} {home_team.goals} - {away_team.goals}{" "}
        {away_team.country}
      </p>
    </div>
  );
}
