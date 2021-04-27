import React, { Component } from 'react';
import ImageMovie from '../assets/images/default.png';
import "./style.css";
class MovieCard extends Component {
  render() {
    return (
      <div className="card shadow-lg rounded movie-card--content">
        <img class="card-img-top" src={ImageMovie} alt="Card image cap"/>
        <div class="card-body">
          <h4 class="card-title">Name of Video</h4>
          <h6>Date:</h6>
          <h6>Country:</h6>
        </div>
      </div>
    );
  }
}
export default (MovieCard);
