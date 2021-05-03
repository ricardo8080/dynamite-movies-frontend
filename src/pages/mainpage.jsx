import React from "react";
import auth from '../AuthenthicationFiles/auth';
import logo from "../images/logo.svg"
import {PrivateRoute} from '../AuthenthicationFiles/authFiles';

export const MainPage = (props) => {
    console.log("a")
    return (
        <PrivateRoute>
            <div> 
                <nav className="navbar navbar-light bg-light">
                    <div class="container-fluid">
                        <a className="navbar-brand" href="/Main-Page">
                        <img src={logo} alt='logo' width="30" height="24" className="d-inline-block align-text-top">
                        </img>
                            Dynamite Movies
                        </a>
                        <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <a class="navbar-brand" href="#">
                        <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24"></img>
                        </a>
                        
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

            </div>
        </PrivateRoute>
    )
};

export default MainPage;
