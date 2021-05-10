import React, {Component} from 'react'
import { Container, Col, Row, Form } from "react-bootstrap";
import {Link} from "react-router-dom";
import { BsPeopleCircle } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdLocationCity } from "react-icons/md";
import { GiModernCity } from "react-icons/gi";
//import "./loginPage.css";
import profile from "../assets/images/profile.png"
import "../pages/loginPage.css"
class RegisterData extends Component {
    constructor(props) {
      super(props);
      this.state = {
        imageProfile: '',
        imagePreviewUrl: profile
      };
      this._handleImageChange = this._handleImageChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }
  
    _handleSubmit(e) {
      e.preventDefault();
      // TODO: do something with -> this.state.file
    }
  
    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let imageProfile = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          imageProfile: imageProfile,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(imageProfile)
    }
  
    render() {
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} />);
      }
  
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
                </Col>
                <Col className="divRegister">
                      <Row onSubmit={this._handleSubmit}>
                  <input type="file" className="form-control marginImage" onChange={this._handleImageChange} />
                </Row>
                {$imagePreview}
                    <Form.Group className="margin">
                        <Link to="/" className="btn btn-login d-flex justify-content-center" >
                            Register
                        </Link>
                    </Form.Group>
                </Col>
        </Row>
    </Container>
      )
    }
  
  }
export default RegisterData;