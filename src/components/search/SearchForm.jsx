import React, { Component } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import SearchFilters from "../search/SearchFilters";
import MovieList from "../movie/MovieList";
import "../style.css";
import 'font-awesome/css/font-awesome.min.css';
class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterEnabledButton: true,
      nameMovie: '',
      search: '',
    };
    this.openFilterOptions = this.openFilterOptions.bind(this);
    this.searchMovie = this.searchMovie.bind(this);
  }
  openFilterOptions() {
    this.setState({ filterEnabledButton: !this.state.filterEnabledButton });
  }
  searchMovie(event) {
    event.preventDefault();
    this.setState({ search: this.state.nameMovie });
  }
  render() {
    return (
      <div>
        <div className="search-form--content">
          <Form className="search-form--form">
            <Form.Group
              as={Row}
              controlId="SearchInput"
              className="search-form--form-group"
            >
              <Row>
                <Col sm={8}>
                  <Form.Control
                    value={this.state.nameMovie}
                    onChange={(event) => this.setState({ nameMovie: event.target.value })}
                    className="input search-form--form-control"
                    placeholder="Search..."
                    autoComplete="off" />
                </Col>
                <Col sm={2}>
                  <button
                    type="button"
                    className="btn search-form--button"
                    onClick={(event) => this.searchMovie(event)}
                  >
                    Search
                  {' '}
                    <i className="fa fa-search" aria-hidden="false" />
                  </button>
                </Col>
              </Row>
            </Form.Group>
            <div style={{ color: "#4f3b78", margin: "10px" }} onClick={() => this.openFilterOptions()}>
              <Button className="showFilters" variant="dark" style={{ backgroundColor: "#4f3b78" }}>
                {this.state.filterEnabledButton
                  ? <i className="fa fa-chevron-circle-down" aria-hidden="false" />
                  : <i className="fa fa-chevron-circle-up" aria-hidden="false" />
                }
                {this.state.filterEnabledButton ? " Search with Filters " : " Show Trends/Last Seen "}
              </Button>
            </div>
            {this.state.filterEnabledButton
              ? < SearchFilters />
              : <h1>Trends/Last Seen</h1>
            }
          </Form>
        </div>
        <div>
          {this.state.search !== '' && this.state.nameMovie !== ''
            ? <MovieList nameMovie={this.state.search} />
            : <></>
          }
        </div>
      </div>
    );
  }
}
export default SearchForm;
