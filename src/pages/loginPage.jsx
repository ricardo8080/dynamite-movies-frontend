/*index.jsx*/
import React, {useState} from "react";
import { BsPeopleCircle } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link , useHistory } from "react-router-dom";
import { useAuth } from '../AuthenthicationFiles/authFiles'
import { Container, Col, Row, Form, Button, Toast } from "react-bootstrap";
import logo from "../assets/images/logoLogin.png"
import "./loginPage.css";
import axios from "axios";


export const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [alert, setAlert] = useState(false);
    const [validated, setValidated] = useState(false);

    let history = useHistory();
    let auth = useAuth();
  
    const getAccount = async () => {
        try {
          const { data } = await axios.get("http://localhost:5000/account/Sign-In", 
          { "headers": { "username": username, "password": password } });
          
          if (data.response === "True") {
              login();
          } 
          else {
            setAlert(true)
          }
        } catch (err) {
          console.log(err);
        }
      };
    
    let login = () => {
      auth.signin(() => {
        history.replace("/mainPage");
      });
    };

    let handleSubmit = (e) =>  {
        const form = e.currentTarget;
        e.preventDefault();
        if (form.checkValidity() === false) {
          e.stopPropagation();
        }
        setValidated(true);
        if (username !== "" && password !== "") {
            getAccount();
        }
      }
    return (
        <Container >
            <Form className="centerForm" noValidate validated={validated}>
            <Row className="backgroundForm">
                <Col  sm="4" className="divLogin">
                    <img src={logo} alt="Logo" />
                    <Toast className="alertLogin" onClose={() => setAlert(false)} show={alert} delay={3000} autohide>
                    <Toast.Body>Username or Password is incorrect</Toast.Body>
                    </Toast>
                </Col>
                <Col  sm="5" className="divLogin">
                    <h1>Sign In</h1>
                    <Form.Group className="margin">
                        <strong><Form.Label className="loginLabels">Username:</Form.Label></strong>
                        <Form.Group className="input-group form-group">
                            <div>
                                <span className="input-group-text"><i><BsPeopleCircle className="icon-color"/></i></span>
                            </div>
                            <input type="text" className="form-control" name="username" placeholder="Username" onChange={event => setUsername(event.target.value)} required/>
                            <Form.Control.Feedback type="invalid">Username required</Form.Control.Feedback>
                        </Form.Group>
                
                        <strong><Form.Label className="loginLabels">Password:</Form.Label></strong>
                        <Form.Group className="input-group form-group">
                            <div>
                                <span className="input-group-text"><i><RiLockPasswordFill className="icon-color"/></i></span>
                            </div>
                            <input type="password" className="form-control" name="password" placeholder="Password" onChange={event => setPassword(event.target.value)} required/>
                            <Form.Control.Feedback type="invalid">Password required</Form.Control.Feedback>                            
                        </Form.Group>
                    </Form.Group>
                    <Form.Group className="d-flex justify-content-center links">
                        <Button type="button" className="btn btn-login btn-lg" onClick={handleSubmit}>
                            <strong>Login</strong>
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
            </Form>
        </Container>
    )};

export default LoginPage;