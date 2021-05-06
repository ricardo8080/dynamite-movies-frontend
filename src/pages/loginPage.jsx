/*index.jsx*/
import React from "react";
import { BsPeopleCircle } from "react-icons/bs";
import { BiKey } from "react-icons/bi";
import { Link , useHistory } from "react-router-dom";
import { useAuth } from '../AuthenthicationFiles/authFiles'
import { Container, Col, Row } from "react-bootstrap";
import logo from "../assets/images/logo3.png"
import "./loginPage.css";

export const LoginPage = () => {
    let history = useHistory();
    let auth = useAuth();
  
    let login = () => {
      auth.signin(() => {
        //Login specifically to the mainPage instead of the page called.
        history.replace("/mainPage");
      });
    };
    return (
        <Container className="centerForm">
            <Row className="formLogin">
                <Col className="divLogin">
                <img src={logo} alt="Logo" />
                </Col>
                <Col className="divLogin">
                    <h1>Sign In</h1>
                    <div className="margin">
                        <strong><label className="loginLabels">Username:</label></strong>
                        <div className="input-group form-group">
                            <div>
                                <span className="input-group-text"><i><BsPeopleCircle className="icon-color"/></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Username"/>
                            
                        </div>
                    </div>
                    <div className="margin">
                    <strong><label className="loginLabels">Password:</label></strong>
                        <div className="input-group form-group">
                            <div>
                                <span className="input-group-text"><i><BiKey className="icon-color"/></i></span>
                            </div>
                            <input type="password" className="form-control" placeholder="Password"/>
                            
                        </div>
                    </div>
                    <div className="d-flex justify-content-center links">
                        <button type="button" className="btn btn-login"
                            onClick={login}>
                            Login
                        </button>
                    </div>
                    <div className="margin">
                        <strong>
                            <div className="loginLabels d-flex justify-content-center" >Don't have an account?
                                <Link to="/signup" className="link-color" style={{ textDecoration: 'none' }}>
                                Sign up
                                </Link>
                            </div>
                            <div className="d-flex justify-content-center" >
                                <Link to="/forgotpassword" className="link-color" style={{ textDecoration: 'none' }}>
                                Forgot Password
                                </Link>
                            </div>
                        </strong>
                    </div>
                </Col>
            </Row>
        </Container>
    )};

export default LoginPage;