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
        <Card className="movie-card--content">
          <Card.Img variant="top" src={movie.img} />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="movie-card--title">{movie.title}</Card.Title>
            <Card.Subtitle>Date: {movie.date}</Card.Subtitle>
            <Card.Subtitle>Country: {movie.country}</Card.Subtitle>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.oneOf(PropTypes.any).isRequired,
};
MovieCard.defaultProps = {
  movie: {
    title: "none",
    date: "none",
    country: "none",
    img: ImageMovie,
  },
};
export default MovieCard;
