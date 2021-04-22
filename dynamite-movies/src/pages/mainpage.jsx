/*index.jsx*/
import React from "react";
import auth from '../AuthenthicationFiles/auth';

export const MainPage = (props) => {
    console.log("a")
    return (
        <div> 
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" >
                    <img src="testResources/logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
                    </img>
                    Dynamite Movies
                    </a>
                </div>
            </nav>


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
