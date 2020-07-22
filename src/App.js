import React from "react";
import "./App.css";
import SongInfo from "./components/SongInfo";
import AlbumInfo from "./components/AlbumInfo";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SongInfo />
        <AlbumInfo />
      </div>
    );
  }
}

export default App;
