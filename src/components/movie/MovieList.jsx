import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import MovieCard from "../movie/MovieCard";
import PropTypes from "prop-types";
import axios from "axios";
import "../style.css";

const MovieList = (props) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const retrieveData = async () => {
      if (props.filterEnabled) {
        try {
          const { data } = await axios.get(
            "http://localhost:5000/movie/search-results/filter",
            { "headers": { "nameMovie": props.nameMovie, "country": props.country, "genres": props.genres } }
          );
          // const { data } = await axios.get("https://dynamite--movies-app.herokuapp.com/movie/search-results/filter");
          setMovies(data);
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          const {
            data,
          } = await axios.get("http://localhost:5000/movie/search-results", {
            headers: { nameMovie: props.nameMovie },
          });
          // const { data } = await axios.get("https://dynamite--movies-app.herokuapp.com/movie/search-results");
          setMovies(data);
        } catch (err) {
          console.log(err);
        }
      }
    };
    retrieveData().catch(null);
    return () => {
      setMovies([]);
    };
  }, [props]);
  return (
    <Container>
      <Row>
        {movies.map((movie) => (
          <Col className="mb-5 movie-list--card-group" key={movie._id}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
MovieList.propTypes = {
  nameMovie: PropTypes.string.isRequired,
};
export default MovieList;
