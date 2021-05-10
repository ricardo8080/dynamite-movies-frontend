/*index.jsx*/
import React from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import {Link} from "react-router-dom";
import { BsPeopleCircle } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdLocationCity } from "react-icons/md";
import { GiModernCity } from "react-icons/gi";
import "./loginPage.css";
import UnloadImage from "../components/UnloadImage"

export const Register = () => {
    
    return ( 
        <Container className="centerForm">
        <Row className="backgroundForm">
        <Col className="divRegister">
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
                    <strong><Form.Label className="loginLabels">Confirm Password:</Form.Label></strong>
                    <Form.Group className="input-group form-group">
                        <div>
                            <span className="input-group-text"><i><RiLockPasswordFill className="icon-color"/></i></span>
                        </div>
                        <input type="password" className="form-control" placeholder="Confirm Password"/>
                        
                    </Form.Group>
                    <strong><Form.Label className="loginLabels">Birthday:</Form.Label></strong> 
                    <Form.Group
                        controlId="formDate"
                        className="input-group form-group"
                    > 
                        <Form.Control type="date" name='birthday' className="register--form-control" />
                    </Form.Group>
                    <strong><Form.Label className="loginLabels">City:</Form.Label></strong>
                    <Form.Group className="input-group form-group">
                        <div>
                            <span className="input-group-text"><i><MdLocationCity className="icon-color"/></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder="City"/>
                        
                    </Form.Group>
                    <strong><Form.Label className="loginLabels">Country of Residence:</Form.Label></strong>
                    <Form.Group className="input-group form-group">
                        <div>
                            <span className="input-group-text"><i><GiModernCity className="icon-color"/></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder="Country of Residence"/>
                        
                    </Form.Group>
                    <strong><Form.Label className="loginLabels">Gender:</Form.Label></strong>
                    <Form.Group>
                        <Form.Check inline label="Female" name="gender" className="loginLabels" type="radio" />
                        <Form.Check inline label="Male" name="gender" className="loginLabels" type="radio"/>
                        <Form.Check inline label="None" name="gender" className="loginLabels" type="radio" />
                    </Form.Group>
                </Form.Group>
                <Form.Group>
                    <Link to="/" className="btn btn-login" >
                        Login
                    </Link>
                </Form.Group>
                <div className="margin">
                </div>
            </Col>
            <Col className="divRegister">
                <UnloadImage />
            </Col>
        </Row>
    </Container>
    )
};

export default Register;
