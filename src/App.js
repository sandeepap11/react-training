import React from "react";
import "./styles/CSSStyles.css";
import TabsList from "./components/TabsList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="app-header">Click on Tabs</h1>
        <TabsList />
      </div>
    );
  }
}

export default App;
