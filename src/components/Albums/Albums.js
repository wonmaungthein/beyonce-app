import React, { Component } from "react";
import propTypes from "prop-types";
import Album from "../Album/Album";

// const albumContainer = {
//   background: "yellow",
//   border: 3
// };

// const albumsArray = this.albums.map(album => album);
class Albums extends Component {
  constructor() {
    super();
    this.state = {
      albums: []
    };
  }

  componentDidMount() {
    const AlbumsLink =
      "https://rawgit.com/rarmatei/f5ae92ac93d9716affab822a3f54f95b/raw/e62641b3f5ddd12c4fe34aa0912488224594e5a7/beyonce-albums.json";
    fetch(AlbumsLink)
      .then(result => result.json())
      .then(albumsList => {
        this.setState({ albums: albumsList });
      });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.albums.map((album, index) => (
            <div className="albumContainer">
              <Album
                key={index}
                releaseDate={album.releaseDate}
                genre={album.primaryGenreName}
                imageUrl={album.artworkUrl100}
                id={album.albumId}
                artistName={album.artistName}
                collection={album.collectionName}
                linkUrl={album.url}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Albums.propTypes = {};

export default Albums;
