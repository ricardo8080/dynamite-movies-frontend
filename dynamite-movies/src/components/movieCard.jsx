import React, { Component } from 'react';
import ImageMovie from '../assets/images/default.png';
import "./style.css";
import { Card } from "react-bootstrap";
class MovieCard extends Component {
  render() {
    return (
      <Card className="movie-card--content">
        <Card.Img variant="top" src={ImageMovie} />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="movie-card--title">Name of Video</Card.Title>
          <Card.Subtitle >Date:</Card.Subtitle>
          <Card.Subtitle >Country:</Card.Subtitle>
        </Card.Body>
      </Card>
    );
  }
}
export default (MovieCard);
