import React, { useState } from "react";
import { Container, Form, Col, Row, Button, Toast } from "react-bootstrap";
import "./loginPage.css";
import questions from "../mockQuestion.json";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { RiLockPasswordFill, RiQuestionAnswerFill } from "react-icons/ri";
import { BsPeopleCircle } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import axios from "axios";
import { Link } from "react-router-dom";

export const ForgotPassword = () => {
  const [validated, setValidated] = useState(false);

  const [question, setQuestion] = useState(questions[0].label);
  const [answer, setAnswer] = useState("");
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const updatePassword = async () => {
    try {
      const user = {
        username: username,
        newPassword: newPassword,
        securityQuestion: question,
        securityAnswer: answer
      };

      await axios.put("http://localhost:5000/account/Forgot-Password", user, {
        headers: { "Content-Type": "application/json" }
      }

      ).then(res => {
        console.log(res);
        if (res.data === "") {
          setMessage("Username, question or answer is incorrect");
          setAlert(true);
        } else {
          setSuccess(true);
          //window.location.replace("/");
        }
      });

    } catch (err) {
      console.log(err);
    }
  };
  let handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();

    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);

    if (username !== "" && newPassword !== "" && newPasswordConfirm !== "" && question !== "" && answer !== "") {
      if (newPassword === newPasswordConfirm) {
        updatePassword();
      } else {
        setMessage("Password and confirm password don't match");
        setAlert(true);
      }
    } else {
      setMessage("All fields are required");
      setAlert(true);
    }
  };
  return (
    <Container className="centerForm">
      <Form className="backgroundForm" noValidate validated={validated}>
        <Row className="marginTitle">
          <Col className="marginArrow"><Link to="/" ><BiArrowBack className="link-back" /></Link></Col>
          <Col sm="6"><h1 className="centerTitle">Forgot Password</h1></Col>
          <Col>
            <Toast className="alertForgotPassword" onClose={() => setAlert(false)} show={alert} delay={3000} autohide>
              <Toast.Body>{message}</Toast.Body>
            </Toast>
            <Toast className="alertSuccess" onClose={() => setSuccess(false)} show={success} delay={3000} autohide>
              <Toast.Body>Password changed successfully!</Toast.Body>
            </Toast>
          </Col>
        </Row>
        <Row className="margin">
          <Col className="divRegister">
            <strong><Form.Label className="form-labels">Username:</Form.Label></strong>
            <Form.Group className="input-group form-group">
              <div>
                <span className="input-group-text"><i><BsPeopleCircle className="icon-color" /></i></span>
              </div>
              <input type="text" className="form-control" name="username" placeholder="Username" onChange={event => setUsername(event.target.value)} required />
              <Form.Control.Feedback type="invalid">Username required</Form.Control.Feedback>
            </Form.Group>
            <strong><Form.Label className="form-labels">Security Question:</Form.Label></strong>
            <Form.Group className="input-group form-group">
              <div>
                <span className="input-group-text"><i><BsFillQuestionCircleFill className="icon-color" /></i></span>
              </div>
              <select className="form-control" onChange={event => setQuestion(event.target.value)} required>
                {
                  questions.map((option, i) => (
                    <option key={i} name="securityQuestion" value={option.label}>{option.label}</option>
                  ))}
              </select>
              <Form.Control.Feedback type="invalid">Security question required</Form.Control.Feedback>
            </Form.Group>
            <strong><Form.Label className="form-labels">Security Answer:</Form.Label></strong>
            <Form.Group className="input-group form-group">
              <div>
                <span className="input-group-text"><i><RiQuestionAnswerFill className="icon-color" /></i></span>
              </div>
              <input type="text" className="form-control" name="securityAnswer" placeholder="Security Answer" onChange={event => setAnswer(event.target.value)} required />
              <Form.Control.Feedback type="invalid">Security answer required</Form.Control.Feedback>

            </Form.Group >
            <strong><Form.Label className="form-labels">Password:</Form.Label></strong>
            <Form.Group className="input-group form-group">
              <div>
                <span className="input-group-text"><i><RiLockPasswordFill className="icon-color" /></i></span>
              </div>
              <input type="password" className="form-control" name="password" placeholder="Password" onChange={event => setNewPassword(event.target.value)} required />
              <Form.Control.Feedback type="invalid">Password required</Form.Control.Feedback>
            </Form.Group>
            <strong><Form.Label className="form-labels">Confirm Password:</Form.Label></strong>
            <Form.Group className="input-group form-group">
              <div>
                <span className="input-group-text"><i><RiLockPasswordFill className="icon-color" /></i></span>
              </div>
              <input type="password" className="form-control" name="confirmPassword" placeholder="Confirm Password" onChange={event => setNewPasswordConfirm(event.target.value)} required />
              <Form.Control.Feedback type="invalid">Confirm password required</Form.Control.Feedback>

            </Form.Group>
            <Form.Group className="margin btn-center">
              <Button type="button" className="btn btn-login btn-lg margin"
                onClick={handleSubmit}>
                <strong>Reset password</strong>
              </Button>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  )
};

export default ForgotPassword;