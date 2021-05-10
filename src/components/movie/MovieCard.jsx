import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import ImageMovie from "../../assets/images/default.png";
import "../style.css";
class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <Card className="movie-card--content" key={movie._id}>
          <Card.Img variant="top" src={movie.principalImage} />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="movie-card--title">{movie.nameMovie}</Card.Title>
            <Card.Subtitle>Date: {movie.releaseDate}</Card.Subtitle>
            <Card.Subtitle>Country: {movie.country}</Card.Subtitle>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
MovieCard.defaultProps = {
  movie: {
    _id: 0,
    nameMovie: "none",
    releaseDate: "none",
    country: "none",
    principalImage: ImageMovie,
  },
};
export default MovieCard;
