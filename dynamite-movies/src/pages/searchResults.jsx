/*index.jsx*/
import React from "react"
import auth from '../AuthenthicationFiles/auth'

export const SearchResults = (props) => {
    return (
        <div> 
            <h1>Search Results</h1>
            
            <button
                onClick={() => {
                    props.history.push("/Main-Page");
                }}        
            >Back to Main Page
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

export default SearchResults;
