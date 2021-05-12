/*index.jsx*/
import React, {useState} from "react";
import { Container, Form, Col, Row, Button} from "react-bootstrap";
import "./loginPage.css"
import questions from "../mockQuestion.json"
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { RiLockPasswordFill, RiQuestionAnswerFill } from "react-icons/ri";
import { BsPeopleCircle } from "react-icons/bs";
import axios from "axios";

export const ForgotPassword = () => {
    const [question, setQuestion] = useState(questions[0].label);
    const [answer, setAnswer] = useState("");   
    const [username, setUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordConfirm, setNewPasswordConfirm ] = useState("");

    
    const updatePassword = async () => {
        try {
            const user = {
               username: username,
               newPassword: newPassword,
               securityQuestion: question,
               securityAnswer:answer
             }
     
             await axios.put( `http://localhost:5000/account/Forgot-Password`,user, { 
               headers: { "Content-Type": "application/json", "username":"ss"}}
     
             ) .then(res => {
               console.log(res);
             })
     
           } catch (err) {
             console.log(err);
           }
      };
    

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(question, answer, username, newPassword, newPasswordConfirm);
        updatePassword();
       //window.location.replace("/");
      
    }
    return (
        <Container className="centerForm">
        <Form >
            <Row className="backgroundForm">
              <Col className="divRegister">
                <h1>Forgot Password</h1>
                    <strong><Form.Label className="loginLabels">Username:</Form.Label></strong>
                    <Form.Group className="input-group form-group">
                        <div>
                            <span className="input-group-text"><i><BsPeopleCircle className="icon-color"/></i></span>
                        </div>
                        <input type="text" className="form-control" name="username" placeholder="Username" onChange={event => setUsername(event.target.value)}/>
                        <Form.Control.Feedback type="invalid">Mal</Form.Control.Feedback>
                    </Form.Group>
                    <strong><Form.Label className="loginLabels">Security Question:</Form.Label></strong>
                    <Form.Group className="input-group form-group">
                    <div>
                    <span className="input-group-text"><i><BsFillQuestionCircleFill className="icon-color"/></i></span>
                    </div>
                    <select className="form-control" onChange={event => setQuestion(event.target.value)}> 
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
                    <strong><Form.Label className="loginLabels">Password:</Form.Label></strong>
                      <Form.Group className="input-group form-group">
                          <div>
                              <span className="input-group-text"><i><RiLockPasswordFill className="icon-color"/></i></span>
                          </div>
                          <input type="password" className="form-control" name="password" placeholder="Password" onChange={event => setNewPassword(event.target.value)}/>
                          
                      </Form.Group>
                      <strong><Form.Label className="loginLabels">Confirm Password:</Form.Label></strong>
                      <Form.Group className="input-group form-group">
                          <div>
                              <span className="input-group-text"><i><RiLockPasswordFill className="icon-color"/></i></span>
                          </div>
                          <input type="password" className="form-control" name="confirmPassword" placeholder="Confirm Password" onChange={event => setNewPasswordConfirm(event.target.value)}/>
                          
                      </Form.Group>
                    <Form.Group className="margin btn-center">
                        <Button type="button" className="btn btn-login btn-lg margin"
                                onClick={handleSubmit}>
                                Reset password
                        </Button>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
        </Container>
    )
};

export default ForgotPassword;
