import React, { Component } from "react";
import { SONG_DATA } from "../utils/Data";

class SongInfo extends Component {
  render() {
    const { songName, lyrics } = SONG_DATA;
    return (
      <>
        <h1>Song Info</h1>
        <div className="App-song">Song: {songName}</div>
        <p className="App-lyrics">Lyrics: {lyrics}</p>
      </>
    );
  }
}

export default SongInfo;
