import React from "react";
import "./App.css";
import BuggyApp from "./BuggyApp";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <BuggyApp />
      </ErrorBoundary>
    </div>
  );
}

export default App;
