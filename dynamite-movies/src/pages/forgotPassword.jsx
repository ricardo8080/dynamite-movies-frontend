/*index.jsx*/
import React from "react";

export const ForgotPassword = (props) => {
    return (
        <div>
            <h1>Forgot Password</h1>
            <button
                type="button" class="btn btn-outline-info"
                onClick={() => {
                    props.history.push("/");
                }}        
            > Back To Login
            </button>
        </div>
    )
};

export default ForgotPassword;
