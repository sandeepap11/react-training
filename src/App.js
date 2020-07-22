import React from "react";
import "./App.css";
import { SONG_DATA } from "./utils/Data";

class App extends React.Component {
  render() {
    const { songName, artist, album, year, albumCover, lyrics } = SONG_DATA;

    return (
      <div className="App">
        <h1>Song Info</h1>
        <div className="App-song">Song: {songName}</div>
        <p className="App-lyrics">Lyrics: {lyrics}</p>
        <div className="App-album">
          <img src={albumCover} />
          <div>
            <h2>Artist: {artist}</h2>
            <p>Album: {album}</p>
            <p>Year: {year}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
