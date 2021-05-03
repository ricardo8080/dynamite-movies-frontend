/*index.jsx*/
import React from "react";
import auth from '../AuthenthicationFiles/auth';
import {PrivateRoute} from '../AuthenthicationFiles/authFiles';

export const DetailedForm = (props) => {
    return (
        <PrivateRoute>
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
        </PrivateRoute>
    )
};

export default DetailedForm;
