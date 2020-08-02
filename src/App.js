import React, { useState, Suspense } from "react";
import "./App.css";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const OtherComponent = React.lazy(() => import("./components/Notifications"));

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
        <Suspense fallback={<div>Loading...</div>}>
          <OtherComponent />
        </Suspense>
      </div>
      <div className="app-body">Welcome to the {selectedTab} tab!</div>
    </div>
  );
}

export default App;
