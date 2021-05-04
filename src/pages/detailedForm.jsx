/*index.jsx*/
import React from "react";
import { AuthButton} from '../AuthenthicationFiles/authFiles';
import { Link } from "react-router-dom";

export const DetailedForm = () => {
    return (
        <div> 
            <h1>Detailed Form </h1>
            
            <button
                type="button" className="btn btn-outline-info">
                <Link to="/mainPage" style={{textDecoration: 'none'}}>
                    Main Page
                </Link>
            </button>
            <AuthButton />
        </div>
    )
};

export default DetailedForm;
