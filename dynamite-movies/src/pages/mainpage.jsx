/*index.jsx*/
import React from "react"
import auth from '../AuthenthicationFiles/auth'

export const MainPage = (props) => {
    return (
        <div> 
            <h1>MainPage</h1>
            <button onClick={() => {
                props.history.push("/Search-Results");
            }}
            >Search Results
            </button>   
            
            <button onClick={() => {
                props.history.push("/Detailed-Form");
            }}
            >Detailed Form
            </button>   
            <button
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
