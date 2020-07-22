import React from "react";
import "./App.css";
import { SONG_DATA } from "./utils/Data";
import SongInfo from "./components/SongInfo";
import AlbumInfo from "./components/AlbumInfo";

class App extends React.Component {
  render() {
    const { songName, lyrics, artist, album, year, albumCover } = SONG_DATA;
    return (
      <div className="App">
        <SongInfo songName={songName} lyrics={lyrics} />
        <AlbumInfo
          artist={artist}
          album={album}
          year={year}
          albumCover={albumCover}
        />
      </div>
    );
  }
}

export default App;
