import React from "react";
import { Link } from "react-router-dom";
import PersonalizedNavBar from '../components/personalizedNavBar'
import FilterPage from '../components/filterPage/filterPage'
export const MainPage = () => {
    return (
            <div> 
                <PersonalizedNavBar/>
                <FilterPage />
                

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
