import React from "react";
import ShowMovies from "../components/showTrendsLastSeen/showMovies";
import { Link, withRouter } from "react-router-dom";
import PersonalizedNavBar from "../components/PersonalizedNavBar";
import FilterPage from "../components/filterPage/filterPage";
export const MainPage = () => {
  const TemporalButtons = () => {
    return (
      <div>
        <button type="button" className="btn btn-outline-info">
          <Link to="/SearchResultsPage" style={{ textDecoration: "none" }}>
            Search Results
          </Link>
        </button>

        <button type="button" className="btn btn-outline-info" >
          <Link to="/DetailedFormPage" style={{ textDecoration: 'none' }}>
            Detaild Form Page
          </Link>
        </button>
      </div>
    );
  }
  return (
    <div>
      <PersonalizedNavBar />
      <FilterPage />
      <ShowMovies />
      <TemporalButtons />
    </div>
  )
};
export default withRouter(MainPage);
