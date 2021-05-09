import React, { Component } from "react";
import { Form, Col, Row } from "react-bootstrap";
import Select, { components } from 'react-select';
import "../style.css";

const IndicatorsContainer = props => {
  return (
    <div style={{ background: "transparent", color: 'white' }}>
      <components.IndicatorsContainer {...props} />
    </div>
  );
};
class SearchForm extends Component {
  render() {
    const optionsForGender = [
      { value: 'action', label: 'Action' },
      { value: 'animation', label: 'Animation' },
      { value: 'documentary', label: 'Documentary' },
      { value: 'drama', label: 'Drama' },
      { value: 'educational', label: 'Educational' },
      { value: 'fantasy', label: 'Fantasy' },
      { value: 'historical', label: 'Historical drama' },
      { value: 'horror', label: 'Horror' },
      { value: 'musical', label: 'Musical' },
      { value: 'romantic', label: 'Romantic' },
      { value: 'thriller', label: 'Thriller' },
    ];
    const optionsForCountries = ["", "China", "Egypt", "France", "Hong Kong", "India", "Indonesia", "Iran", "Japan",
      "Korea", "Pakistan", "Poland", "Turkey", "United Kingdom", "United States"];
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
          controlId="formGender"
          className="search-form--form-group"
        >
          <Form.Label column sm="2" className="search-form--label">
            Gender
            </Form.Label>
          <Col sm="6">
            <Select
              closeMenuOnSelect={false}
              isMulti
              name="gender"
              theme={theme => ({
                ...theme,
                colors: {
                  neutral0: '#07010d',
                  primary25: 'white',
                },
              })}
              styles={{
                option: (styles, { isFocused, isSelected }) => {
                  return {
                    ...styles,
                    backgroundColor: isFocused
                      ? '#a89bc5'
                      : isSelected
                        ? '#291f41'
                        : 'null',
                    color: 'white',
                  };
                },
                multiValue: (styles) => {
                  return {
                    ...styles,
                    backgroundColor: '#a89bc5',
                    color: 'white',
                  };
                },
                valueContainer: base => ({
                  ...base,
                  background: '#07010d',
                  color: 'white',
                }),
                multiValueLabel: (styles) => ({
                  ...styles,
                  color: 'white',
                }),
                multiValueRemove: (styles) => ({
                  ...styles,
                  color: 'white',
                  ':hover': {
                    backgroundColor: 'red',
                    color: 'white',
                  },
                }),
              }}
              components={{ IndicatorsContainer }}
              isSearchable
              options={optionsForGender}
            />
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
