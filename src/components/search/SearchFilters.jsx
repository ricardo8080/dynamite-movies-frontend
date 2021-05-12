import React, { Component } from "react";
import { Form, Col, Row } from "react-bootstrap";
import "../style.css";
import MultiSelectComponent from "./MultiSelect";
class SearchForm extends Component {
  render() {
    const optionsForCountries = ["", "China", "India", "Indonesia", "Japan", "Korea", "Turkey", "United Kingdom", "United States"];
    return (
      <div >
        <Form.Group
          as={Row}
          controlId="formCountry"
          className="search-form--form-group"
        >
          <Form.Label column sm="2" className="search-form--label">
            Country
            </Form.Label>
          <Col sm="6">
            <Form.Control as="select" className="search-form--form-control">
              {
                optionsForCountries.map((option, index) => {
                  return (<option key={index} value={option}>{option}</option>)
                })
              }
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          controlId="formGenres"
          className="search-form--form-group"
        >
          <Form.Label column sm="2" className="search-form--label">
            Genres
            </Form.Label>
          <Col sm="6">
            <MultiSelectComponent />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          controlId="formDate"
          className="search-form--form-group"
        >
          <Form.Label column sm="1" className="search-form--label">
            Date
            </Form.Label>
          <Form.Label column sm="1" className="search-form--label">
            Start Date
            </Form.Label>
          <Col sm="3">
            <Form.Control type="date" name='start_date' className="search-form--form-control" />
          </Col>
          <Form.Label column sm="1" className="search-form--label">
            End Date
            </Form.Label>
          <Col sm="3">
            <Form.Control type="date" name='end_date' className="search-form--form-control" />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Row>
            <Col sm={2}>
              <Form.Check
                type="radio"
                label="Today"
                name="searchRadios"
                id="searchRadios1"
                className="search-form--label"
              />
            </Col>
            <Col sm={2}>
              <Form.Check
                type="radio"
                label="Last Week"
                name="searchRadios"
                id="searchRadios2"
                className="search-form--label"
              />
            </Col>
            <Col sm={2}>
              <Form.Check
                type="radio"
                label="Last Month"
                name="searchRadios"
                id="searchRadios3"
                className="search-form--label"
              />
            </Col>
            <Col sm={2}>
              <Form.Check
                type="radio"
                label="Last Year"
                name="searchRadios"
                id="searchRadios4"
                className="search-form--label"
              />
            </Col>
            <Col sm={2}>
              <Form.Check
                type="radio"
                label="All"
                name="searchRadios"
                id="searchRadios5"
                className="search-form--label"
                defaultChecked="true"
              />
            </Col>
          </Row>
        </Form.Group>
      </div >
    );
  }
}
export default SearchForm;
