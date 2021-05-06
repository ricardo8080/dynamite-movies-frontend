/*index.jsx*/
import React from "react";
import auth from "../AuthenthicationFiles/auth";
import MovieList from "../components/movie/MovieList";
import SearchForm from "../components/searchForm";
export const SearchResults = (props) => {
  return (
    <div>
      <div>
        <h1>Search Results</h1>
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={() => {
            props.history.push("/Main-Page");
          }}
        >
          Back to Main Page
        </button>
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={() => {
            auth.logout(() => {
              props.history.push("/");
            });
          }}
        >
          Logout
        </button>
      </div>
      <div>
        <SearchForm />
        <MovieList />
      </div>
    </div>
  );
};

export default SearchResults;
