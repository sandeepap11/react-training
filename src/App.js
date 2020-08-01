import React, { useState } from "react";
import "./App.css";
import Notifications from "./Notifications";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <div className="app-main">
      <div className="app-tabs">
        {["Home", "About", "Contact"].map(tab => (
          <div
            key={tab}
            className={selectedTab === tab ? "selected" : "not-selected"}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </div>
        ))}
        <Notifications />
      </div>
      <div className="app-body">Welcome to the {selectedTab} tab!</div>
    </div>
  );
}

export default App;
