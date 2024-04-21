import React from 'react'
import css from './MovieCard.module.css'
// import { Routes, Route, NavLink } from "react-router-dom";

const MovieCard = ({movie, onClick}) => {
  return (
      <div onClick={() => onClick(movie.id)}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={css.movieImg} />
          {/* <p>{movie.title}</p> */}
          {/* <NavLink state={location} to={`/movies/${movie.id}`}>{movie.title}</NavLink> */}
    </div>
  )
}

export default MovieCard