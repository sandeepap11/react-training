import React, { Component } from "react";

class SongInfo extends Component {
  render() {
    const { songName, lyrics } = this.props;
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
