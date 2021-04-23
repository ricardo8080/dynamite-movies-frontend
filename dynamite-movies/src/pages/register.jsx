/*index.jsx*/
import React from "react";

export const Register = (props) => {
    /*
        If Enter to Login, inmediately go out of account
    */
    localStorage.setItem('isAuth', false)
    return ( 
        <div>
            <h1>Register</h1>
            <button
                type="button" className="btn btn-outline-info"
                onClick={() => {
                    props.history.push("/");
                }}        
            > Back To Login
            </button>
        </div>
    )
};

export default Register;
