import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import MovieCard from "../movie/MovieCard";
import PropTypes from "prop-types";
import axios from "axios";

import "../style.css";
class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }
  async componentDidMount() {
    try {
      // const { data } = await axios.get(
      //   // "http://localhost:5000/movie/movies"
      //   "http://localhost:5000/movie/search-results",
      //   { "headers": { "nameMovie": props.nameMovie } }
      // );
      console.log(this.props.nameMovie);
      const { data } = await axios.get("http://localhost:5000/movie/search-results",
        { "headers": { "nameMovie": this.props.nameMovie } });
      // const { data } = await axios.get("https://dynamite--movies-app.herokuapp.com/movie/search-results");
      console.log(data);
      this.setState({ movies: { data } });
    } catch (err) {
      console.log(err);
    }
  }
  // const getMovies = async () => {
  //   try {
  //     // const { data } = await axios.get(
  //     //   // "http://localhost:5000/movie/movies"
  //     //   "http://localhost:5000/movie/search-results",
  //     //   { "headers": { "nameMovie": props.nameMovie } }
  //     // );
  //     const { data } = await axios.get("http://localhost:5000/movie/search-results",
  //       { "headers": { "nameMovie": props.nameMovie } });
  //     // const { data } = await axios.get("https://dynamite--movies-app.herokuapp.com/movie/search-results");
  //     console.log(data);
  //     setMovies(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   getMovies().catch(null);
  // }, []);
  render() {
    return (
      <Container>
        <Row>
          {this.state.movies.map((movie) => (
            <Col className="mb-5 movie-list--card-group" key={movie._id}>
              <MovieCard movie={movie} />
            </Col>
          ))}
          <Col className="mb-5 movie-list--card-group">
            <MovieCard />
          </Col>
        </Row>
      </Container>
    );
  }
}
MovieList.propTypes = {
  nameMovie: PropTypes.string.isRequired
};
export default MovieList;
