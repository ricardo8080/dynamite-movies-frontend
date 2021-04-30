/*index.jsx*/
import React from "react";
import auth from "../AuthenthicationFiles/auth";
import { BsPeopleCircle } from "react-icons/bs";
import { BiKey } from "react-icons/bi";

export const Login = (props) => {
    /*
        If Enter to Login, inmediately go out of account
    */
    localStorage.setItem('isAuth', false)
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
                        <button type="button" className="btn text-white bg-secondary" onClick={() => {
                            auth.login(()=>{
                                props.history.push("/Main-Page");
                            })
                        }}
                        >Login</button>
                    </div>
                    <div className="margin">
                        <strong>
                            <div className="loginLabels d-flex justify-content-center" onClick={() => {
                                props.history.push("/Register"
                                );
                            }} 
                            >Don't have an account?<a href="#" className="link-color">Sign Up</a>
                            </div>
                            <div className="d-flex justify-content-center" onClick={() => {
                                auth.login(()=>{
                                    props.history.push("/Forgot-Password");
                                })
                            }}>
                                <a href="#" className="link-color">Forgot your password?</a>
                            </div>
                        </strong>
                    </div>
                </div>
               
            </form>
        </div>
    );
};

export default Login;