import React from "react";
import { Link } from "react-router-dom";
import PersonalizedNavBar from '../components/personalizedNavBar'
import FilterPage from '../components/filterPage/filterPage'
import ShowMovies from "../components/showTrendsLastSeen/showMovies";
export const MainPage = () => {
    const TemporalButtons = () => {
        return (
            <div>
                
                <button type="button" className="btn btn-outline-info" >
                    <Link to="/DetailedFormPage" style={{textDecoration: 'none'}}>
                        Detaild Form Page
                    </Link>
                </button>   
            </div>
        );
    }
    return (
            <div> 
                <PersonalizedNavBar/>
                <FilterPage />
                <ShowMovies />
                <TemporalButtons />
            </div>
    )
};

export default MainPage;
/*

                <button type="button" className="btn btn-outline-info" >
                    <Link to="/SearchResultsPage"  style={{textDecoration: 'none'}}>
                        Search Results 
                    </Link>
                </button>   
 */