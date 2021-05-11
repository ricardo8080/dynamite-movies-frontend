import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import ImageMovie from "../../assets/images/default.png";
import moment from 'moment';
import "../style.css";
class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
    };
    this.show = this.show.bind(this);
  }
  show(event) {
    event.preventDefault();
    this.setState({ showDetails: !this.state.showDetails });
  }
  changeDateFormat(date) {
    return moment(date.toString().split('T')[0]).format('MMMM Do, YYYY');
  }
  showGenres(list) {
    let text = "";
    list.forEach((genre) => {
      genre !== list[list.length - 1]
        ? text += `${genre}, `
        : text += `${genre}`;
    });
    return text;
  }
  render() {
    const { movie } = this.props;
    return (
      <div>
        <Card className="movie-card--content" key={movie._id} onClick={(event) => this.show(event)}>
          <Card.Img variant="top" src={movie.principalImage} className="movie-card--img" />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="movie-card--title">{movie.nameMovie}</Card.Title>
            <Card.Subtitle className="movie-card--subtitle">
              <strong>Release Date: </strong>
              {this.changeDateFormat(movie.releaseDate)}
            </Card.Subtitle>
            <Card.Subtitle className="movie-card--subtitle">
              <strong>Country: </strong>
              {movie.country}
            </Card.Subtitle>
            <Card.Subtitle className="movie-card--subtitle">
              <strong>Genres: </strong>
              {this.showGenres(movie.genres)}
            </Card.Subtitle>
            {this.state.showDetails
              ? <>
                <Card.Subtitle className="movie-card--subtitle">
                  <strong>Description: </strong>
                </Card.Subtitle>
                <Card.Text className="movie-card--text">{movie.description}</Card.Text>
              </>
              : <></>
            }
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
    releaseDate: new Date().toISOString(),
    country: "none",
    genres: ["none"],
    principalImage: ImageMovie,
    description: "none",
  },
};
export default MovieCard;
