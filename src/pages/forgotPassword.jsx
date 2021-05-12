/*index.jsx*/
import React, {useState} from "react";
import { Container, Form, Col, Row, Button} from "react-bootstrap";
import "./loginPage.css"
import questions from "../mockQuestion.json"
import { BsFillQuestionCircleFill } from "react-icons/bs";
import {RiQuestionAnswerFill } from "react-icons/ri";

export const ForgotPassword = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");   
    const [username, setusername] = useState("");
    const [newPassword, setNewPassword] = useState("");
    
    let handleSubmit = (e) => {
        e.preventDefault();
       //window.location.replace("/");
      
    }
    return (
        <Container className="centerForm">
        <Form >
            <Row className="backgroundForm">
              <Col className="divRegister">
                <h1>Forgot Password</h1>
                <strong><Form.Label className="loginLabels marginImage">Security Question:</Form.Label></strong>
                <Form.Group className="input-group form-group">
                      <div>
                        <span className="input-group-text"><i><BsFillQuestionCircleFill className="icon-color"/></i></span>
                      </div>
                      <select className="form-control"   onChange={event => setQuestion(event.target.value)}> 
                        {
                          questions.map((option,i) => (
                          <option key={i} name="securityQuestion" value={option.label}>{option.label}</option>
                      ))}
                      </select>
                  </Form.Group> 
                  <strong><Form.Label className="loginLabels">Security Answer:</Form.Label></strong>
                  <Form.Group className="input-group form-group">
                      <div>
                          <span className="input-group-text"><i><RiQuestionAnswerFill className="icon-color"/></i></span>
                      </div>
                      <input type="text" className="form-control" name="securityAnswer" placeholder="Security Answer"onChange={event => setAnswer(event.target.value)}/>
                      
                  </Form.Group >
                    <Form.Group className="margin btn-center">
                        <Button type="button" className="btn btn-login btn-lg margin"
                                onClick={handleSubmit}>
                                Recover password
                        </Button>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
        </Container>
    )
};

export default ForgotPassword;
