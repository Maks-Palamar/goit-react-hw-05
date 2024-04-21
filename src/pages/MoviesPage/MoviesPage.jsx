import { React, useState, useEffect } from 'react'
import css from './MoviesPage.module.css'
import { fetchQuery } from '../../fetch'
import MovieCard from '../../components/MovieCard/MovieCard'
// import css from '../../components/MovieGallery/MovieGallery.module.css'
import { Routes, Route, NavLink } from "react-router-dom";
import { Link,useLocation } from "react-router-dom";

const MoviesPage = (openDeatails) => {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState(null);
    const [containerHeight, setContainerHeight] = useState('auto');

    useEffect(() => {
        const fetchThisQuery = async () => {
            try {
                const response = await fetchQuery(query);
                setMovies(response.results);
                console.log(response.results);
                if (response.results.length > 0) {
                    const containerHeight = Math.min(response.results.length * 50, 150); // Максимальна висота 200px, 100px на кожен елемент
                    setContainerHeight(`${containerHeight}px`);
                }
            } catch (error) {
                console.log(error);
            }
        }
        if (query.trim() !== '') {
            fetchThisQuery();
        } else {
            setMovies(null);
        }
    }, [query])

    const handleChange = (e) => {
        setQuery(e.currentTarget.value);
      }

  return (
      <div>
          <form className={css.form}>
            <input onChange={handleChange} className={css.formInpt}
            type="text"
            autoComplete="off"
            autoFocus
                  placeholder="Search for movies"
                  name="query"
            />
            {/* <button className={css.formBtn} type="submit">Search</button> */}
          </form>
          {movies && <div className={css.previewMovies} style={{ height: containerHeight }}>
              <ul className={css.previewMovieGallery}>
              {movies && movies.map(movie => 
                  <li key={movie.id} className={css.previewMovieItem}>
                      <NavLink state={location} to={`/movies/${movie.id}`} className={css.previewLink} onClick={() => { openDeatails(movie) }}>
                          {/* <MovieCard movie={movie}  /> */}
                          <p>{movie.title}</p>
                    </NavLink>
                  </li>)}
            </ul>
          </div>}
    </div>
  )
}

export default MoviesPage