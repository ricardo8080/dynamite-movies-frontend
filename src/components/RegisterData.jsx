import React, {Component} from 'react'
import { Container, Col, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsPeopleCircle } from "react-icons/bs";
import { RiLockPasswordFill, RiQuestionAnswerFill } from "react-icons/ri";
import { MdLocationCity } from "react-icons/md";
import { GiModernCity } from "react-icons/gi";
import { SiGmail } from "react-icons/si"
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
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
          email: '',
          birthday: moment().format('YYYY-MM-DD'),
          accountImage: '',
          securityQuestion: questions[0].label,
          securityAnswer:"",
          validated: false
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
          accountPicture: "picture",
          securityQuestion: this.state.securityQuestion,
          securityAnswer:this.state.securityAnswer,
          email: this.state.email
        }

        if (user.age >= 13 && user.age <= 150 ) {

          await axios.post( `http://localhost:5000/account/Register`, user, { 
            headers: { "Content-Type": "application/json"}}

          ) .then(res => {
            console.log(res);
          })
        } else {
          console.log("no tienen la edad para registrarse");
        }

      } catch (err) {
        console.log(err);
      }
    };

    handleSubmit(e) {
    const form = e.currentTarget;
    e.preventDefault();

    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
      this.setState({ validated: true });

    if (this.validationInputs()) 
        {
          if (this.state.password === this.state.confirmPassword)  {
           
              this.postAccount();
              console.log("done");
            // window.location.replace("/");
          }  else {
            console.log("no coincide")
          }
        } else {
          console.log("esta vacio");
        }
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
      if (date === '') {
        return 0;
      } else{
        return moment().diff(moment(date, 'YYYYMMDD'), 'years');
      }
    }
    validationInputs() {
      return  this.state.username !== '' &&
              this.state.password !== '' &&
              this.state.confirmPassword !== '' && 
              this.state.birthday !== '' &&
              this.state.city !== '' &&
              this.state.countryResidence !== '' &&
              this.state.gender !== '' &&
              this.securityQuestion !== '' &&
              this.state.securityAnswer !== '' &&
              this.state.email != ''
    }
    render() {
      return (
        <Container className="centerForm">
        <Form className="backgroundForm" noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
            <Row className="marginTop">
                <Col className="marginArrow" sm="2"><Link to="/" ><BiArrowBack className="link-back" /></Link></Col>
                <Col sm="8"><h1 className="centerTitle">Sign Up</h1></Col> 
            </Row>
            <Row className="margin">
              <Col className="divRegister">
                <Form.Group className="margin">
                    <strong><Form.Label className="loginLabels">Username:</Form.Label></strong>
                    <Form.Group className="input-group form-group">
                        <div>
                            <span className="input-group-text"><i><BsPeopleCircle className="icon-color"/></i></span>
                        </div>
                        <input type="text" className="form-control" name="username" placeholder="Username" onChange={this.changeHandler} required/>
                        <Form.Control.Feedback type="invalid">Username is obligated</Form.Control.Feedback>
                    </Form.Group>
                    <strong><Form.Label className="loginLabels">Password:</Form.Label></strong>
                    <Form.Group className="input-group form-group">
                        <div>
                            <span className="input-group-text"><i><RiLockPasswordFill className="icon-color"/></i></span>
                        </div>
                        <input type="password" className="form-control" name="password" placeholder="Password" onChange={this.changeHandler} required/>
                        <Form.Control.Feedback type="invalid">Password is obligated</Form.Control.Feedback>
                    </Form.Group>
                    <strong><Form.Label className="loginLabels">Confirm Password:</Form.Label></strong>
                    <Form.Group className="input-group form-group">
                        <div>
                            <span className="input-group-text"><i><RiLockPasswordFill className="icon-color"/></i></span>
                        </div>
                        <input type="password" className="form-control" name="confirmPassword" placeholder="Confirm Password" onChange={this.changeHandler} required/>
                        <Form.Control.Feedback  type="invalid">Confirm Password is obligated</Form.Control.Feedback>                          
                    </Form.Group>
                    <strong><Form.Label className="loginLabels">Birthday:</Form.Label></strong> 
                    <Form.Group
                        controlId="formDate"
                        className="input-group form-group"
                    > 
                        <Form.Control type="date" name="birthday" className="register--form-control"  onChange={this.changeHandler}/>
                    </Form.Group>
                    <strong><Form.Label className="loginLabels">City:</Form.Label></strong>
                    <Form.Group className="input-group form-group">
                        <div>
                            <span className="input-group-text"><i><MdLocationCity className="icon-color"/></i></span>
                        </div>
                        <input type="text" className="form-control" name="city" placeholder="City" onChange={this.changeHandler} required/>
                        <Form.Control.Feedback type="invalid">City is obligated</Form.Control.Feedback>
                    </Form.Group>
                    <strong><Form.Label className="loginLabels">Country of Residence:</Form.Label></strong>
                    <Form.Group className="input-group form-group">
                        <div>
                            <span className="input-group-text"><i><GiModernCity className="icon-color"/></i></span>
                        </div>
                        <input type="text" className="form-control" name="countryResidence" placeholder="Country of Residence" onChange={this.changeHandler} required/>
                        <Form.Control.Feedback type="invalid">Country Residence is obligated</Form.Control.Feedback>                          
                    </Form.Group>
                    <strong><Form.Label className="loginLabels">Gender:</Form.Label></strong>
                    <Form.Group>
                      <Form.Group onChange={this.changeCheckHandler} required>
                          <Form.Check inline label="Female" id="F" name="gender" className="loginLabels" type="radio" required />
                          <Form.Check inline label="Male" id="M" name="gender" className="loginLabels" type="radio" required/>
                          <Form.Check inline label="None" id="N/A"  name="gender" className="loginLabels" type="radio" required />
                          <Form.Control.Feedback type="invalid">Select is obligated</Form.Control.Feedback>
                      </Form.Group>
                    </Form.Group>

                </Form.Group>
            </Col>
            <Col className="divRegister">
                <strong><Form.Label className="loginLabels marginTop">Security Question:</Form.Label></strong>
                <Form.Group className="input-group form-group">
                    <div>
                      <span className="input-group-text"><i><BsFillQuestionCircleFill className="icon-color"/></i></span>
                    </div>
                    <select className="form-control"  onChange={this.handleChangeQuestions} required> 
                      {
                        questions.map((option,i) => (
                        <option key={i} name="securityQuestion" value={option.label}>{option.label}</option>
                    ))}
                    </select>
                    <Form.Control.Feedback type="invalid">Security Question is obligated</Form.Control.Feedback>
                </Form.Group> 
                <strong><Form.Label className="loginLabels">Security Answer:</Form.Label></strong>
                <Form.Group className="input-group form-group">
                    <div>
                        <span className="input-group-text"><i><RiQuestionAnswerFill className="icon-color"/></i></span>
                    </div>
                    <input type="text" className="form-control" name="securityAnswer" placeholder="Security Answer" onChange={this.changeHandler} required/>
                    <Form.Control.Feedback type="invalid">Security Answer is obligated</Form.Control.Feedback>
                </Form.Group>
                <strong><Form.Label className="loginLabels">Gmail:</Form.Label></strong>
                    <Form.Group className="input-group form-group">
                        <div>
                            <span className="input-group-text"><i><SiGmail className="icon-color"/></i></span>
                        </div>
                        <input type="text" className="form-control" name="email" placeholder="Gmail" onChange={this.changeHandler} required/>
                        <Form.Control.Feedback type="invalid">Password is obligated</Form.Control.Feedback>
                    </Form.Group>
              
            </Col>
            <Form.Group className="margin btn-center">
                    <button className="btn btn-login btn-lg margin"><strong>Register Account</strong></button> 
            </Form.Group>
          </Row>
        </Form>
    </Container>
      )
    }
  
  }
export default RegisterData;