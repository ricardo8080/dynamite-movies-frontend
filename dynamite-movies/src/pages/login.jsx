/*index.jsx*/
import React from "react";
import auth from "../AuthenthicationFiles/auth";

export const Login = (props) => {
    /*
        If Enter to Login, inmediately go out of account
    */
    localStorage.setItem('isAuth', false)
    return (
        <div>
            <h1>LoginPage</h1>
            <button type="button" class="btn btn-outline-info" onClick={() => {
                props.history.push("/Register");
            }}
            >Register</button>    
            <button type="button" class="btn btn-outline-info" onClick={() => {
                props.history.push("/Forgot-Password");
            }}
            >Forgot Password?</button>

            <button type="button" class="btn btn-outline-info" onClick={() => {
                auth.login(()=>{
                    props.history.push("/Main-Page");
                })
            }}
            >Login</button>
        </div>
    );
};

export default Login;