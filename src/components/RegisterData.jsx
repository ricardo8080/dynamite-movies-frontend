import React, {Component} from 'react'
import { Container, Col, Row, Form } from "react-bootstrap";
import { BsPeopleCircle } from "react-icons/bs";
import { RiLockPasswordFill, RiQuestionAnswerFill } from "react-icons/ri";
import { MdLocationCity } from "react-icons/md";
import { GiModernCity } from "react-icons/gi";
import { SiGmail } from "react-icons/si"
import { BsFillQuestionCircleFill } from "react-icons/bs";
import axios from "axios";
import profile from "../assets/images/profile.png"
import moment from "moment";
import questions from "../mockQuestion.json"
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
          city: '',
          countryResidence: '',
          gender: '',
          gmail: '',
          birthday: '',
          accountImage: '',
          securityQuestion: questions[0].label,
          securityAnswer:"",
      };
      this.handleImageChange = this.handleImageChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.changeHandler = this.changeHandler.bind(this);
      this.changeCheckHandler = this.changeCheckHandler.bind(this);
      this.handleChangeQuestions = this.handleChangeQuestions.bind(this); 
    }



    async postAccount(){

      try {

       const user = {
          username: this.state.username,
          password: this.state.password,
          birthday: this.changeFormatDatetoISO(this.state.birthday),
          age: this.getAge(this.state.birthday),
          city: this.city,
          countryResidence: this.state.countryResidence,
          gender: this.state.gender,
          accountPicture: "",
          securityQuestion: this.state.securityQuestion,
          securityAnswer:this.state.securityAnswer
        }

        await axios.post( `http://localhost:5000/account/Register`, user, { 
          headers: { "Content-Type": "application/json"}}

        ) .then(res => {
          console.log(res);
        })

      } catch (err) {
        console.log(err);
      }
    };

    handleSubmit(e) {
        e.preventDefault();
        this.postAccount();
       // window.location.replace("/");
      
    }
    changeHandler(e) {
      let key = e.target.name;
      let val = e.target.value;
      this.setState({[key]: val});
    }
    changeCheckHandler(e) {
      let key = e.target.name;
      let id = e.target.id;
      this.setState({[key]: id});
    }
    handleChangeQuestions(e) {
      this.setState({ securityQuestion: e.target.value });
    }

    handleImageChange(e) {
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
      this.changeHandler(e);
    }

    changeFormatDatetoISO(date1) {
      var date = new Date(date1);
      return date.toISOString();
    }
    getAge(date) {
      return moment().diff(moment(date, 'YYYYMMDD'), 'years');
    }
    render() {
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
                          <input type="text" className="form-control" name="username" placeholder="Username" onChange={this.changeHandler}/>
                          <Form.Control.Feedback type="invalid">Mal</Form.Control.Feedback>
                      </Form.Group>
                  
                      <strong><Form.Label className="loginLabels">Password:</Form.Label></strong>
                      <Form.Group className="input-group form-group">
                          <div>
                              <span className="input-group-text"><i><RiLockPasswordFill className="icon-color"/></i></span>
                          </div>
                          <input type="password" className="form-control" name="password" placeholder="Password" onChange={this.changeHandler}/>
                          
                      </Form.Group>
                      <strong><Form.Label className="loginLabels">Confirm Password:</Form.Label></strong>
                      <Form.Group className="input-group form-group">
                          <div>
                              <span className="input-group-text"><i><RiLockPasswordFill className="icon-color"/></i></span>
                          </div>
                          <input type="password" className="form-control" name="confirmPassword" placeholder="Confirm Password" onChange={this.changeHandler}/>
                          
                      </Form.Group>
                      <strong><Form.Label className="loginLabels">Birthday:</Form.Label></strong> 
                      <Form.Group
                          controlId="formDate"
                          className="input-group form-group"
                      > 
                          <Form.Control type="date" name="birthday" className="register--form-control"  onChange={this.changeHandler} />
                      </Form.Group>
                      <strong><Form.Label className="loginLabels">City:</Form.Label></strong>
                      <Form.Group className="input-group form-group">
                          <div>
                              <span className="input-group-text"><i><MdLocationCity className="icon-color"/></i></span>
                          </div>
                          <input type="text" className="form-control" name="city" placeholder="City" onChange={this.changeHandler}/>
                          
                      </Form.Group>
                      <strong><Form.Label className="loginLabels">Country of Residence:</Form.Label></strong>
                      <Form.Group className="input-group form-group">
                          <div>
                              <span className="input-group-text"><i><GiModernCity className="icon-color"/></i></span>
                          </div>
                          <input type="text" className="form-control" name="countryResidence" placeholder="Country of Residence" onChange={this.changeHandler}/>
                          
                      </Form.Group>
                      <strong><Form.Label className="loginLabels">Gender:</Form.Label></strong>
                      <Form.Group onChange={this.changeCheckHandler}>
                          <Form.Check inline label="Female" id="F" name="gender" className="loginLabels" type="radio" />
                          <Form.Check inline label="Male" id="M" name="gender" className="loginLabels" type="radio"/>
                          <Form.Check inline label="None" id="N/A"  name="gender" className="loginLabels" type="radio" />
                      </Form.Group>
                  </Form.Group>
              </Col>
              <Col className="divRegister">
                  <strong><Form.Label className="loginLabels marginImage">Security Question:</Form.Label></strong>
                  <Form.Group className="input-group form-group">
                      <div>
                        <span className="input-group-text"><i><BsFillQuestionCircleFill className="icon-color"/></i></span>
                      </div>
                      <select className="form-control"  onChange={this.handleChangeQuestions}> 
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
                      <input type="text" className="form-control" name="securityAnswer" placeholder="Security Answer" onChange={this.changeHandler}/>
                      
                  </Form.Group>
                  <strong><Form.Label className="loginLabels">Gmail:</Form.Label></strong>
                      <Form.Group className="input-group form-group">
                          <div>
                              <span className="input-group-text"><i><SiGmail className="icon-color"/></i></span>
                          </div>
                          <input type="text" className="form-control" name="gmail" placeholder="Gmail" onChange={this.changeHandler}/>
                          
                  </Form.Group>
                
              </Col>
              <Form.Group className="margin btn-center">
                      <button className="btn btn-login btn-lg margin">Register Account</button> 
              </Form.Group>
          </Row>
        </Form>
    </Container>
      )
    }
  
  }
export default RegisterData;