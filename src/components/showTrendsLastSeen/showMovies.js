import React from "react";
import 'react-datepicker/dist/react-datepicker.css';
import MovieList from "../movie/MovieList";
import { withRouter } from "react-router-dom";

export const ShowMovies = (props) => {
    
    return (
        <div>
          <MovieList nameMovie=""/>
        </div>
      );
};
  
  export default withRouter(ShowMovies);