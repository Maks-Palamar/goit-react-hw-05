import React from 'react'
import { NavLink, useLocation } from "react-router-dom";
import css from './SearchPreview.module.css'

const SearchPreview = ({ query, movies, containerHeight }) => {
  const location = useLocation();

  return (
      <div>
          {query && <div className={css.previewMovies} style={{ height: containerHeight }}>
              <ul className={css.previewMovieGallery}>
              {movies && movies.map(movie => 
                  <li key={movie.id} className={css.previewMovieItem}>
                      <NavLink state={location} to={`/movies/${movie.id}`} className={css.previewLink}>
                          <p>{movie.title}</p>
                    </NavLink>
                  </li>)}
            </ul>
          </div>}
    </div>
  )
}

export default SearchPreview