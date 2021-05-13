import React, { Component } from "react";
import { Form, Col, Row } from "react-bootstrap";
import moment from "moment";
import Select from "react-select";
import Genres from "./genres.json";
import { MultiStyle, IndicatorsContainer } from "./MultiSelect";
import MovieList from "../movie/MovieList";
class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: "",
      selectedGenre: null,
      selected: [],
      dateTo: moment(new Date().toISOString().toString().split("T")[0]).format(
        "YYYY-MM-DD"
      ),
      dateFrom: "1940-01-01",
      rb: "All",
    };
    this.handleChange = this.handleChange.bind(this);
    this.changeRadioButtons = this.changeRadioButtons.bind(this);
  }
  handleChange(selectedGenre) {
    this.setState({ selectedGenre });
    this.setState({ selected: selectedGenre });
  }
  changeRadioButtons(event) {
    this.setState({ rb: event.target.id });
    let newDate = "";
    switch (event.target.id) {
      case "Today":
        newDate = moment(
          new Date().toISOString().toString().split("T")[0]
        ).format("YYYY-MM-DD");
        break;
      case "LastWeek":
        newDate = moment().subtract(7, "days");
        break;
      case "LastMonth":
        newDate = moment().subtract(1, "months");
        break;
      case "LastYear":
        newDate = moment().subtract(1, "years");
        break;
      case "All":
        newDate = "1940-01-01";
        break;
      default:
    }
    this.setState({
      dateFrom: moment(newDate).format("YYYY-MM-DD"),
    });
  }

  getGenres() {
    let genresList = "";
    this.state.selected.forEach((genre) => {
      genresList += `${genre.value},`;
    });
    return genresList.substring(0, genresList.length - 1);
  }
  render() {
    const optionsForCountries = ["", "China", "India", "Japan", "Korea", "Turkey", "United Kingdom", "United States"];
    return (
      <div>
        <div className="search-form--content">
          <Form className="search-form--form">
            <Form.Group
              as={Row}
              controlId="formCountry"
              className="search-form--form-group"
            >
              <Form.Label column sm="2" className="search-form--label">
                Country
              </Form.Label>
              <Col sm="6">
                <Form.Control
                  as="select"
                  className="search-form--form-control"
                  onChange={(e) =>
                    this.setState({ selectedCountry: e.target.value })
                  }
                  defaultValue={optionsForCountries[0]}
                >
                  {optionsForCountries.map((option, index) => {
                    return (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    );
                  })}
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="formGenres"
              className="search-form--form-group"
            >
              <Form.Label column sm="2" className="search-form--label">
                {" "}
                Genres{" "}
              </Form.Label>
              <Col sm="6">
                <Select
                  closeMenuOnSelect={false}
                  isMulti
                  name="genres"
                  theme={(theme) => ({
                    ...theme,
                    colors: {
                      neutral0: "#07010d",
                      primary25: "white",
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
          </Form>
        </div>
        <div>
          <MovieList
            nameMovie={this.props.nameMovie}
            filterEnabled={true}
            country={this.state.selectedCountry}
            genres={this.getGenres()}
            dateTo={this.state.dateTo}
            dateFrom={this.state.dateFrom}
          />
        </div>
      </div>
    );
  }
}
export default SearchForm;
