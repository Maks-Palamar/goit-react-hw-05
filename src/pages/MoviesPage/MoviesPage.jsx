import { React, useState, useEffect } from 'react'
import css from './MoviesPage.module.css'
import { fetchQuery } from '../../fetch'
import MovieCard from '../../components/MovieCard/MovieCard'
// import css from '../../components/MovieGallery/MovieGallery.module.css'
import { Routes, Route, NavLink, useSearchParams } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

import SearchGallery from '../../components/SearchGallery/SearchGallery'
import SearchPreview from '../../components/SearchPreview/SearchPreview'

const MoviesPage = () => {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState(null);
    const [containerHeight, setContainerHeight] = useState('auto');

    const [searchParams, setSearchParams] = useSearchParams();
    const [submitResults, setSubmitResults] = useState(null);
    const searchQuery = searchParams.get('query') || '';

    // location = useLocation();
    // console.log(location);

    useEffect(() => {
        const fetchThisQuery = async () => {
            try {
                const response = await fetchQuery(query);
                setMovies(response.results);
                console.log(response.results);
                if (response.results.length > 0) {
                    const containerHeight = Math.min(response.results.length * 50, 150);
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

    useEffect(() => {
        if (searchQuery.trim() !== '') { 
            const fetchThisQuery = async () => {
                try {
                    const response = await fetchQuery(searchQuery);
                    setSubmitResults(response.results);
                    console.log(response.results);
                } catch (error) {
                    console.log(error);
                }
            }

            fetchThisQuery();
        } else {
                setSubmitResults(null)
            }
    }, [searchQuery])

    const handleChange = (e) => {
        setQuery(e.currentTarget.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // const search = e.target.value;
        console.log(query);
        setSearchParams({ query: query });
        setQuery('');
        e.currentTarget.reset();
        console.log('submit');
    }

  return (
      <div>
          <form className={css.form} onSubmit={handleSubmit}>
            <input onChange={handleChange} className={css.formInpt}
            type="text"
            autoComplete="off"
            autoFocus
                  placeholder="Search for movies"
                  name="query"
              />
              
              <SearchPreview query={query} movies={movies} containerHeight={containerHeight}/>
            
              

            <button className={css.formBtn} type="submit">Search</button>
          </form>

          {searchQuery && submitResults && <SearchGallery searchQuery={searchQuery} submitResults={submitResults} />}

          {/* {query && <div className={css.previewMovies} style={{ height: containerHeight }}>
              <ul className={css.previewMovieGallery}>
              {movies && movies.map(movie => 
                  <li key={movie.id} className={css.previewMovieItem}>
                      <NavLink state={location} to={`/movies/${movie.id}`} className={css.previewLink}>
                          <p>{movie.title}</p>
                    </NavLink>
                  </li>)}
            </ul>
          </div>} */}

          {/* {searchQuery && <ul className={css.searchMovieGallery}>
          {submitResults && submitResults.map(result => 
              <li key={result.id} className={css.movieItem}>
                <NavLink state={location} to={`/movies/${result.id}`} onClick={() => { openDeatails(result) }}>
                  <MovieCard movie={result}  />
                </NavLink>
              </li>)}
        </ul>} */}
    </div>
  )
}

export default MoviesPage