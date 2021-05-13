import React from "react";
import ShowMovies from "../components/showTrendsLastSeen/showMovies";
import { Link, withRouter } from "react-router-dom";
import PersonalizedNavBar from "../components/PersonalizedNavBar";
import SearchForm from "../components/search/SearchForm";

export const MainPage = () => {
  const TemporalButtons = () => {
    return (
      <div>

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
      <SearchForm />
      <ShowMovies />
      <TemporalButtons />
    </div>
  )
};
export default withRouter(MainPage);
