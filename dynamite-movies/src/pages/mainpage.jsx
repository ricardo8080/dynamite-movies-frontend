/*index.jsx*/
import React from "react";
import auth from '../AuthenthicationFiles/auth';

export const MainPage = (props) => {
    console.log("a")
    return (
        <div> 
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#">
                    <img src="/logo.svg" alt="" width="30" height="24" className="d-inline-block align-text-top">
                    </img>
                    Dynamite Movies
                    </a>
                </div>
            </nav>


            <button type="button" className="btn btn-outline-info" onClick={() => {
                props.history.push("/Search-Results");
            }}
            >Search Results
            </button>   
            
            <button type="button" className="btn btn-outline-info" onClick={() => {
                props.history.push("/Detailed-Form");
            }}
            >Detailed Form
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

export default MainPage;
