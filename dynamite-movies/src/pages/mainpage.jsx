/*index.jsx*/
import React from "react";
import auth from '../AuthenthicationFiles/auth';

export const MainPage = (props) => {
    return (
        <div> 
            <h1>MainPage</h1>
            <button type="button" class="btn btn-outline-info" onClick={() => {
                props.history.push("/Search-Results");
            }}
            >Search Results
            </button>   
            
            <button type="button" class="btn btn-outline-info" onClick={() => {
                props.history.push("/Detailed-Form");
            }}
            >Detailed Form
            </button>   
            <button
                type="button" class="btn btn-outline-info"
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

export default MainPage;
