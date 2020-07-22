import React, { Component } from "react";

class AlbumInfo extends Component {
  render() {
    const { artist, album, year, albumCover } = this.props;
    return (
      <div className="App-album">
        <img src={albumCover} />
        <div>
          <h2>Artist: {artist}</h2>
          <p>Album: {album}</p>
          <p>Year: {year}</p>
        </div>
      </div>
    );
  }
}

export default AlbumInfo;
