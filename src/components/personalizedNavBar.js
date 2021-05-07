import React from "react";
import logo from "../assets/images/logo.svg"
import loupe from "../assets/images/loupe.svg"
import placeholderUserPhoto from '../assets/images/placeholder.png'
import { AuthButton } from '../AuthenthicationFiles/authFiles';

export const PersonalizedNavBar = () => {
    return (
            <div> 
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/mainPage">
                        <img src={logo} alt='logo' width="30" height="24" className=" align-text-top">
                        </img>
                            Dynamite Movies
                        </a>
                        <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success" type="submit">
                           <img  src={loupe} alt='loupe' width="30" height="24"></img>
                        </button>
                        </form>
                        <a className="navbar-brand" href="/mainPage">
                            <img src={placeholderUserPhoto} alt='placeholderUserPhoto' width="30" height="24" ></img>
                            <label style={{marginLeft : "10px"}}> Username </label>
                        </a>
                        <AuthButton />
                    </div>
                </nav>
            </div>
    )
};
export default PersonalizedNavBar;