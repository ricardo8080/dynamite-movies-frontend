import React, { Component } from "react";
import Logo from "../assets/images/logoLogin.png";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Image, Navbar, Nav } from "react-bootstrap";
import md5 from 'md5-hash';
import "./style.css";
class PersonalizedNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: {},
      hashUrl: '',
      defaultProfile: 'https://www.gravatar.com/avatar/a8df5423f56ac1c628d54ee04ea44a64',
    };
  }
  async componentDidMount() {
    try {
      const { data } = await axios.get(
        " https://dynamite--movies-app.herokuapp.com/account/account-information",
        { "headers": { "username": this.props.match.params.username } }
      );
      this.setState({ account: data[0] });
      this.setState({ hashUrl: `https://www.gravatar.com/avatar/${md5(this.state.account.email)}?d=${this.state.defaultProfile}` });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <div>
        <Navbar className="navbar" variant="dark">
          <Navbar.Brand>
            <Image
              src={Logo}
              className="navbar-image"
              roundedCircle
            ></Image>
            {' '} Dynamite Movies
          </Navbar.Brand>
          <div style={{ marginLeft: "70%" }}>
            <Nav className="mr-auto">
              <Image
                className="navbar-image"
                src={this.state.hashUrl}
                roundedCircle
              ></Image>
              <Nav.Link>{this.state.account.username}</Nav.Link>
            </Nav>
          </div>
          <Nav className="mr-auto" style={{ marginLeft: "3%" }}>
            <Nav.Link href="/">Log out</Nav.Link>
          </Nav>
        </Navbar>
      </div >
    );
  }
};

export default withRouter(PersonalizedNavBar);
