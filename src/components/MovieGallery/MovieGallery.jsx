import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import css from './MovieGallery.module.css'
import { Routes, Route, NavLink } from "react-router-dom";
import { Link,useLocation } from "react-router-dom";

const MovieGallery = ({ popularMovies}) => {
  const location = useLocation();

  return (
      <ul className={css.movieGallery}>
          {popularMovies && popularMovies.map(movie => 
              <li key={movie.id} className={css.movieItem}>
                <NavLink state={location} to={`/movies/${movie.id}`}>
                  <MovieCard movie={movie}  />
                </NavLink>
              </li>)}
    </ul>
  )
}

export default MovieGallery