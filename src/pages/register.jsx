/*index.jsx*/
import React from "react";
import {Link} from "react-router-dom";

export const Register = () => {
    return ( 
        <div>
            <h1>Sign up</h1>
            <button
                type="button" className="btn btn-outline-info"> 
                <Link to="/" style={{textDecoration: 'none'}}>
                    Login
                </Link>
            </button>
        </div>
    )
};

export default Register;
