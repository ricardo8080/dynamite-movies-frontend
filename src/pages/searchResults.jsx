/*index.jsx*/
import React from "react";
import MovieList from "../components/movie/MovieList";
import { AuthButton } from '../AuthenthicationFiles/authFiles';
import { Link } from "react-router-dom";

export const SearchResults = () => {
  return (
      <div>
        <h1>Search Results</h1>

        <button
          type="button" className="btn btn-outline-info">
          <Link to="/mainPage" style={{textDecoration: 'none'}}>
              Back to Main Page
          </Link>
        </button>

        
        <AuthButton />
        <div>
          <MovieList></MovieList>
        </div>
      </div>
  );
};

export default SearchResults;
