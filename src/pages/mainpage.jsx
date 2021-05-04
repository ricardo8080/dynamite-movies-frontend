import React from "react";
import logo from "../images/logo.svg"
import { AuthButton } from '../AuthenthicationFiles/authFiles';
import { Link } from "react-router-dom";
export const MainPage = () => {
    return (
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
                        <a class="navbar-brand" href="/#">
                        <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24"></img>
                        </a>
                        
                        <AuthButton />
                    </div>
                </nav>

                <button type="button" className="btn btn-outline-info" >
                    <Link to="/SearchResultsPage"  style={{textDecoration: 'none'}}>
                        Search Results 
                    </Link>
                </button>   
                
                <button type="button" className="btn btn-outline-info" >
                    <Link to="/DetailedFormPage" style={{textDecoration: 'none'}}>
                        Detaild Form Page
                    </Link>
                </button>   

            </div>
    )
};

export default MainPage;
