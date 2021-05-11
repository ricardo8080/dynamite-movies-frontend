import React, { Component } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import SearchFilters from "../search/SearchFilters";
import "../style.css";
import 'font-awesome/css/font-awesome.min.css';
class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterEnabledButton: true,
    };
    this.openFilterOptions = this.openFilterOptions.bind(this);
  }
  openFilterOptions() {
    this.setState({ filterEnabledButton: !this.state.filterEnabledButton });
  }
  render() {
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
                <Form.Control className="input search-form--form-control" placeholder="Search..." autoComplete="off" />
              </Col>
              <Col sm={2}>
                <button
                  type="button"
                  className="btn search-form--button"
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
    );
  }
}
export default SearchForm;
