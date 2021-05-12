import React, { Component } from "react";
import { Form, Col, Row } from "react-bootstrap";
import "../style.css";
import { MultiStyle, IndicatorsContainer } from "./MultiSelect";
import Select from 'react-select';
import Genres from "./genres.json";
class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: '',
      selectedGenre: null,
      selected: [],
      dateTo: '',
      dateFrom: '',
      rb: 'All'
    };
    // console.log(this.props.nameMovie);
    // console.log(this.props.enable);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(selectedGenre) {
    this.setState({ selectedGenre });
    this.setState({ selected: selectedGenre });
  }
  render() {
    const optionsForCountries = ["", "China", "India", "Indonesia", "Japan", "Korea", "Turkey", "United Kingdom", "United States"];
    return (
      <div >
        <Form.Group as={Row} controlId="formCountry" className="search-form--form-group" >
          <Form.Label column sm="2" className="search-form--label">Country</Form.Label>
          <Col sm="6">
            <Form.Control as="select" className="search-form--form-control"
              onChange={(e) => this.setState({ selectedCountry: e.target.value })} defaultValue={optionsForCountries[0]}>
              {
                optionsForCountries.map((option, index) => {
                  return (<option key={index} value={option}>{option}</option>)
                })
              }
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formGenres" className="search-form--form-group" >
          <Form.Label column sm="2" className="search-form--label"> Genres </Form.Label>
          <Col sm="6">
            <Select
              closeMenuOnSelect={false}
              isMulti
              name="genres"
              theme={theme => ({
                ...theme,
                colors: {
                  neutral0: '#07010d',
                  primary25: 'white',
                },
              })}
              styles={MultiStyle}
              components={{ IndicatorsContainer }}
              isSearchable
              options={Genres}
              value={this.state.selectedGenre}
              onChange={this.handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formDate" className="search-form--form-group" >
          <Form.Label column sm="1" className="search-form--label">Release Date</Form.Label>
          <Form.Label column sm="1" className="search-form--label"> Start Date</Form.Label>
          <Col sm="3">
            <Form.Control type="date" name='start_date' className="search-form--form-control"
              onChange={(e) => this.setState({ dateFrom: e.target.value })} />
          </Col>
          <Form.Label column sm="1" className="search-form--label">End Date</Form.Label>
          <Col sm="3">
            <Form.Control type="date" name='end_date' className="search-form--form-control"
              onChange={(e) => this.setState({ dateTo: e.target.value })} />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={2}>
            <Form.Check type="radio" label="Today" name="radioButtons" id="rb1"
              className="search-form--label" onChange={(e) => this.setState({ rb: "Today" })} />
          </Col>
          <Col sm={2}>
            <Form.Check type="radio" label="Last Week" name="radioButtons" id="rb2"
              className="search-form--label" onChange={(e) => this.setState({ rb: "Last Week" })} />
          </Col>
          <Col sm={2}>
            <Form.Check type="radio" label="Last Month" name="radioButtons" id="rb3"
              className="search-form--label" onChange={(e) => this.setState({ rb: "Last Month" })} />
          </Col>
          <Col sm={2}>
            <Form.Check type="radio" label="Last Year" name="radioButtons" id="rb4"
              className="search-form--label" onChange={(e) => this.setState({ rb: "Last Year" })} />
          </Col>
          <Col sm={2}>
            <Form.Check type="radio" label="All" name="radioButtons" id="rb5"
              className="search-form--label" onChange={(e) => this.setState({ rb: "All" })} defaultChecked="true" />
          </Col>
        </Form.Group>
      </div >
    );
  }
}
export default SearchForm;
