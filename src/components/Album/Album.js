import React from "react";
import propTypes from "prop-types";
import "./Album.css";

const Album = props => (
  <div className="onealbum">
    <h2>Album: {props.id}</h2>
    <h1>Artist: {props.artistName}</h1>
    <img src={props.imageUrl} />
    <p>Collection: {props.collection}</p>
    <p>Release date: {props.releaseDate}</p>
    <p>Genre: {props.genre}</p>
    <p> URL Link: {props.linkUrl} </p>
  </div>
);

Album.propTypes = {
  album: propTypes.string.isRequired,
  imageUrl: propTypes.string.isRequired,
  releaseDate: propTypes.string.isRequired,
  genre: propTypes.string.isRequired
};

export default Album;
