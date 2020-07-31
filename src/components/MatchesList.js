import React, { useState, useEffect } from "react";
import Match from "./Match";

export default function PhotoRoll() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch("https://worldcup.sfg.io/matches").then(res =>
      res.json().then(matches => setMatches(matches))
    );
  }, []);

  return (
    <div className="matches-main">
      <h1>World Cup 2019 Results</h1>
      {matches.length === 0 && "Loading ..."}
      <div className="matches-list">
        {matches.map(match => (
          <Match key={match.fifa_id} {...match} />
        ))}
      </div>
    </div>
  );
}
