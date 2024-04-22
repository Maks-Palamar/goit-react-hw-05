import MovieCard from '../MovieCard/MovieCard'
// import css from './MovieGallery.module.css'
import css from './MovieList.module.css'
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MovieList = ({ popularMovies, searchQuery, submitResults}) => {
  const location = useLocation();

  return (
      <div>
          {popularMovies && <ul className={css.movieGallery}>
              {popularMovies && popularMovies.map(movie => 
                  <li key={movie.id} className={css.movieItem}>
                    <NavLink state={location} to={`/movies/${movie.id}`}>
                      <MovieCard movie={movie}  />
                    </NavLink>
                  </li>)}
          </ul>}
          
          {searchQuery && <ul className={css.movieGallery}>
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

export default MovieList