import React, {Component} from 'react'
import { Container, Col, Row, Form } from "react-bootstrap";
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
        imagePreviewUrl: profile,
        username: '',
        password: '',
        confirmPassword: '',
        birthday: '',
        city: '',
        gender: '',
      };
      
      this._handleImageChange = this._handleImageChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
      const formData = new FormData(e.target);
        e.preventDefault();

        for (let [key, value] of formData.entries()) {
          if (value !== '') {
            console.log(key, value);
          } else {
            console.log(key, "esta vacio");
          }
        }
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
        <Form  onSubmit={this.handleSubmit}>
            <Row className="backgroundForm">
              <Col className="divRegister">
                  <h1>Sign In</h1>
                  <Form.Group className="margin">
                      <strong><Form.Label className="loginLabels">Username:</Form.Label></strong>
                      <Form.Group className="input-group form-group">
                          <div>
                              <span className="input-group-text"><i><BsPeopleCircle className="icon-color"/></i></span>
                          </div>
                          <input type="text" className="form-control" name="username" placeholder="Username" required/>
                          <Form.Control.Feedback type="invalid">Mal</Form.Control.Feedback>
                      </Form.Group>
                  
                      <strong><Form.Label className="loginLabels">Password:</Form.Label></strong>
                      <Form.Group className="input-group form-group">
                          <div>
                              <span className="input-group-text"><i><RiLockPasswordFill className="icon-color"/></i></span>
                          </div>
                          <input type="password" className="form-control" name="password" placeholder="Password"/>
                          
                      </Form.Group>
                      <strong><Form.Label className="loginLabels">Confirm Password:</Form.Label></strong>
                      <Form.Group className="input-group form-group">
                          <div>
                              <span className="input-group-text"><i><RiLockPasswordFill className="icon-color"/></i></span>
                          </div>
                          <input type="password" className="form-control" name="confirmPassword" placeholder="Confirm Password"/>
                          
                      </Form.Group>
                      <strong><Form.Label className="loginLabels">Birthday:</Form.Label></strong> 
                      <Form.Group
                          controlId="formDate"
                          className="input-group form-group"
                      > 
                          <Form.Control type="date" name="birthday" className="register--form-control" />
                      </Form.Group>
                      <strong><Form.Label className="loginLabels">City:</Form.Label></strong>
                      <Form.Group className="input-group form-group">
                          <div>
                              <span className="input-group-text"><i><MdLocationCity className="icon-color"/></i></span>
                          </div>
                          <input type="text" className="form-control" name="city" placeholder="City"/>
                          
                      </Form.Group>
                      <strong><Form.Label className="loginLabels">Country of Residence:</Form.Label></strong>
                      <Form.Group className="input-group form-group">
                          <div>
                              <span className="input-group-text"><i><GiModernCity className="icon-color"/></i></span>
                          </div>
                          <input type="text" className="form-control" name="registerResidence" placeholder="Country of Residence"/>
                          
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
                    <div >
                      <input type="file" className="form-control marginImage" name="accountImage" onChange={this._handleImageChange} />
                    </div>
              {$imagePreview}
                  <Form.Group className="margin btn-center">
                      <button className="btn btn-login btn-lg">Register</button> 
                  </Form.Group>
              </Col>
          </Row>
        </Form>
    </Container>
      )
    }
  
  }
export default RegisterData;