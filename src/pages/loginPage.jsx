/*index.jsx*/
import React from "react";
import { BsPeopleCircle } from "react-icons/bs";
import { BiKey } from "react-icons/bi";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useAuth } from '../AuthenthicationFiles/authFiles'

export const LoginPage = () => {
    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();
  
    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
      auth.signin(() => {
        //history.replace(from);
        //Login specifically to the mainPage instead of the page called.
        history.replace("/mainPage");
      });
    };
    return (
        <div className="centerForm">
            <form className="formLogin">
                <div className="divLogin">
                    <h1>Sign In</h1>
                    <div className="margin">
                        <strong><label className="loginLabels">Username:</label></strong>
                        <div className="input-group form-group">
                            <div>
                                <span className="input-group-text"><i><BsPeopleCircle className="icon-color"/></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Username"/>
                            
                        </div>
                    </div>
                    <div className="margin">
                    <strong><label className="loginLabels">Password:</label></strong>
                        <div className="input-group form-group">
                            <div>
                                <span className="input-group-text"><i><BiKey className="icon-color"/></i></span>
                            </div>
                            <input type="password" className="form-control" placeholder="Password"/>
                            
                        </div>
                    </div>
                    <div className="d-flex justify-content-center links">
                        <button type="button" className="btn text-white bg-secondary"
                            onClick={login}>
                            Login
                        </button>
                    </div>
                    <div className="margin">
                        <strong>
                            <div className="loginLabels d-flex justify-content-center" >Don't have an account?
                                <Link to="/signup" className="link-color" style={{color: "black",textDecoration: 'none'}}>
                                Sign up
                                </Link>
                            </div>
                            <div className="d-flex justify-content-center" >
                                <Link to="/forgotpassword" className="link-color" style={{color: "black",textDecoration: 'none'}}>
                                Forgot Password
                                </Link>
                            </div>
                        </strong>
                    </div>
                </div>
               
            </form>
        </div>
    );
};

export default LoginPage;