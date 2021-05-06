import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import MovieCard from "../movie/MovieCard";
import movies from "../../mockData.json";
import "../style.css";
class MovieList extends Component {
  render() {
    return (
      <Container>
        <Row>
          {movies.map((data) => (
            <Col className="mb-5 movie-list--card-group" key={data.id}>
              <MovieCard movie={data} />
            </Col>
          ))}
          <Col>
            <MovieCard />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default MovieList;
