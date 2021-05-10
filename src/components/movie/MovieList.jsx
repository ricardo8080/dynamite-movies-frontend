import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import MovieCard from "../movie/MovieCard";
import axios from "axios";

import "../style.css";

const MovieList = () => {

  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/movie/movies");
      // const { data } = await axios.get("https://dynamite--movies-app.herokuapp.com/movie/movies");
      console.log(data);
      setMovies(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMovies().catch(null);
  }, []);

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

}
export default MovieList;
