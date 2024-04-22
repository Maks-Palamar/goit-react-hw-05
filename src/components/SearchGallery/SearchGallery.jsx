import css from './SearchGallery.module.css'
import { NavLink, useLocation } from "react-router-dom";
import MovieCard from '../MovieCard/MovieCard'

const SearchGallery = ({ searchQuery, submitResults }) => {

  const location = useLocation();

  return (
      <div>
          {searchQuery && <ul className={css.searchMovieGallery}>
          {submitResults && submitResults.map(result => 
              <li key={result.id} className={css.movieItem}>
                <NavLink state={location} to={`/movies/${result.id}`}>
                  <MovieCard movie={result}  />
                </NavLink>
              </li>)}
        </ul>}
    </div>
  )
}

export default SearchGallery