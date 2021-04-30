import React, { Component } from "react";
import { CardGroup } from "react-bootstrap";
import MovieCard from "../movie/MovieCard";
import "../style.css";
class MovieList extends Component {
  render() {
    return (
      <CardGroup className="movie-list--card-group">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </CardGroup>
    );
  }
}
export default MovieList;
