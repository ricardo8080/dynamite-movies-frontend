/*index.jsx*/
import React from "react";
import auth from '../AuthenthicationFiles/auth';

export const DetailedForm = (props) => {
    return (
        <div> 
            <h1>Detailed Form </h1>
            
            <button
                type="button" className="btn btn-outline-info"
                onClick={() => {
                    props.history.push("/Main-Page");
                }}        
            >Back to Main Page
            </button>
            
            <button
                type="button" className="btn btn-outline-info"
                onClick={() => {
                    auth.logout(()=>{
                        props.history.push("/");
                    });
                }}        
            >Logout
            </button>
        </div>
    )
};

export default DetailedForm;
