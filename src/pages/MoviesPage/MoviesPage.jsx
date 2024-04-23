import { useState, useEffect } from 'react'
import css from './MoviesPage.module.css'
import { fetchQuery } from '../../fetch'
import { useSearchParams } from "react-router-dom";
import SearchPreview from '../../components/SearchPreview/SearchPreview'
import { fetchQueryPreview } from '../../fetch';
import MovieList from '../../components/MovieList/MovieList';

const MoviesPage = () => {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState(null);
    const [containerHeight, setContainerHeight] = useState('auto');

    const [searchParams, setSearchParams] = useSearchParams();
    const [submitResults, setSubmitResults] = useState(null);
    const searchQuery = searchParams.get('query') || '';

    useEffect(() => {
        const fetchThisPreviewQuery = async () => {
            try {
                const response = await fetchQueryPreview(query);
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
            fetchThisPreviewQuery();
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


    const handleChangeForPreview = (e) => {
        setQuery(e.currentTarget.value);
    }
    
    const handleSubmitForSearch = (e) => {
        e.preventDefault();
        console.log(query);
        setSearchParams({ query: query });
        setQuery('');
        e.currentTarget.reset();
        console.log('submit');
    }

  return (
      <div>
          <form className={css.form} onSubmit={handleSubmitForSearch}>
            <input onChange={handleChangeForPreview} className={css.formInpt}
            type="text"
            autoComplete="off"
            autoFocus
                  placeholder="Search for movies"
                  name="query"
              />
              
              <SearchPreview query={query} movies={movies} containerHeight={containerHeight}/>

              <button className={css.formBtn} type="submit">Search</button>

          </form>

          {searchQuery && submitResults && <MovieList searchQuery={searchQuery} submitResults={submitResults} />}
    </div>
  )
}

export default MoviesPage