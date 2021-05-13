import React from "react";
import ShowMovies from "../components/showTrendsLastSeen/showMovies";
import { withRouter } from "react-router-dom";
import PersonalizedNavBar from "../components/PersonalizedNavBar";
import SearchForm from "../components/search/SearchForm";

const MainPage = () => {
  return (
    <div>
      <PersonalizedNavBar />
      <SearchForm />
      <ShowMovies />
    </div>
  )
};
export default withRouter(MainPage);
