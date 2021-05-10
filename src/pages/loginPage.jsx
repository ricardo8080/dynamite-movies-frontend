/*index.jsx*/
import React from "react";
import { BsPeopleCircle } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link , useHistory } from "react-router-dom";
import { useAuth } from '../AuthenthicationFiles/authFiles'
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import logo from "../assets/images/logoLogin.png"
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
            <Row className="backgroundForm">
                <Col className="divLogin">
                <img src={logo} alt="Logo" />
                </Col>
                <Col className="divLogin">
                    <h1>Sign In</h1>
                    <Form.Group className="margin">
                    <strong><Form.Label className="loginLabels">Username:</Form.Label></strong>
                    <Form.Group className="input-group form-group">
                        <div>
                            <span className="input-group-text"><i><BsPeopleCircle className="icon-color"/></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder="Username"/>
                        
                    </Form.Group>
                
                    <strong><Form.Label className="loginLabels">Password:</Form.Label></strong>
                        <Form.Group className="input-group form-group">
                            <div>
                                <span className="input-group-text"><i><RiLockPasswordFill className="icon-color"/></i></span>
                            </div>
                            <input type="password" className="form-control" placeholder="Password"/>
                            
                        </Form.Group>
                    </Form.Group>
                    <Form.Group className="d-flex justify-content-center links">
                        <Button type="button" className="btn btn-login"
                            onClick={login}>
                            Login
                        </Button>
                    </Form.Group>
                    <Form.Group className="margin">
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
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    )};

export default LoginPage;