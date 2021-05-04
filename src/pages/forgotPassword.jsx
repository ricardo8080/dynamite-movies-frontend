/*index.jsx*/
import React from "react";
import { Link } from "react-router-dom";
export const ForgotPassword = () => {
    return (
        <div>
            <h1>Forgot Password</h1>
            <button type="button" className="btn btn-outline-info"> 
            <Link to="/" style={{textDecoration: 'none'}}>
              Login
            </Link>
            </button>
        </div>
    )
};

export default ForgotPassword;
