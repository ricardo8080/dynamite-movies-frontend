import React, { Component } from "react";
import { Form, Col, Row } from "react-bootstrap";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import "./style.css";

const animatedComponents = makeAnimated();

class SearchForm extends Component {
  render() {
    const optionsForGender = [
      { value: 'action', label: 'Action' },
      { value: 'animation', label: 'Animation' },
      { value: 'documentary', label: 'Documentary' },
      { value: 'drama', label: 'Drama', color: '#FF5630' },
      { value: 'educational', label: 'Educational' },
      { value: 'fantasy', label: 'Fantasy', color: '#FFC400' },
      { value: 'historical', label: 'Historical drama' },
      { value: 'horror', label: 'Horror' },
      { value: 'musical', label: 'Musical' },
      { value: 'romantic', label: 'Romantic' },
      { value: 'thriller', label: 'Thriller' },
    ];
    return (
      <div className="search-form--content">
        <Form className="search-form--form">
          <Form.Group
            as={Row}
            controlId="SearchInput"
            className="search-form--form-group"
          >
            <Row>
              <Col sm={8}>
                {/* <Form.Control className="search-form--form-control" placeholder="Search..." /> */}
                <Form.Control placeholder="Search..." />
              </Col>
              <Col sm={2}>
                <button
                  type="button"
                  className="btn btn-outline-info search-form--button"
                >
                  Search
                </button>
              </Col>
            </Row>
          </Form.Group>
          <div className="search-form--link-trends">
            <a href="#">Show Trends/Last Seen</a>
          </div>
          <Form.Group
            as={Row}
            controlId="formCountry"
            className="search-form--form-group"
          >
            <Form.Label column sm="2" className="search-form--label">
              Country
            </Form.Label>
            <Col sm="6">
              <Form.Control as="select" defaultValue="Select...">
                <option></option>
                <option>USA</option>
                <option>Korea</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            controlId="formGender"
            className="search-form--form-group"
          >
            <Form.Label column sm="2" className="search-form--label">
              Gender
            </Form.Label>
            <Col sm="6">
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                name="gender"
                options={optionsForGender}
                classNamePrefix="select"
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            controlId="formDate"
            className="search-form--form-group"
          >
            <Form.Label column sm="2" className="search-form--label">
              Date
            </Form.Label>
            <Form.Label column sm="2" className="search-form--label">
              Start Date
            </Form.Label>
            <Col sm="2">
              <Form.Control type="date" name='date_of_birth' />
            </Col>
            <Form.Label column sm="2" className="search-form--label">
              End Date
            </Form.Label>
            <Col sm="2">
              <Form.Control type="date" name='date_of_birth' />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2}>
              Radios
      </Form.Label>
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
                />
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
export default SearchForm;
