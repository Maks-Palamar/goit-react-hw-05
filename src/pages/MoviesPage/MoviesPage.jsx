import { useState, useEffect } from 'react'
import css from './MoviesPage.module.css'
import { fetchQuery, fetchGenres } from '../../fetch'
// import MovieCard from '../../components/MovieCard/MovieCard'
// import css from '../../components/MovieGallery/MovieGallery.module.css'
import { useSearchParams } from "react-router-dom";

import SearchGallery from '../../components/SearchGallery/SearchGallery'
import SearchPreview from '../../components/SearchPreview/SearchPreview'

const MoviesPage = () => {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState(null);
    const [containerHeight, setContainerHeight] = useState('auto');

    const [searchParams, setSearchParams] = useSearchParams();
    const [submitResults, setSubmitResults] = useState(null);
    const searchQuery = searchParams.get('query') || '';


    // const [genreList, setGenreList] = useState(null);
    // const [genreId, setGenreId] = useState(0);

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
    
//     useEffect(() => {
//    const fetchThisQuery = async () => {
//     try {
//         if (searchQuery.trim() !== '') {
//             const response = await fetchQuery(searchQuery);
//             if (response.results.length > 0) {
//                 console.log('All genre ids:', response.results.map(movie => movie.genre_ids));
//                 const filteredResults = response.results.filter(movie =>
//                     movie.genre_ids.flat().includes(genreId)
//                 );

//                 if (filteredResults.length > 0) {
//                     setSubmitResults(filteredResults);
//                     console.log(filteredResults);
//                 } else {
//                     console.log('No movies found with genreId:', genreId);
//                     setSubmitResults([]);
//                 }
//             } else {
//                 console.log('No results found for search query:', searchQuery);
//                 setSubmitResults([]);
//             }
//         } else {
//             setSubmitResults(null);
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };

//     fetchThisQuery();
// }, [searchQuery, genreId]);


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


    useEffect(() => {
        const fetchGenresList = async () => {
            try {
                const response = await fetchGenres();
                setGenreList(response.genres);
                console.log(response.genres);
            } catch (error) {
                console.log(error);
            }
        }
        fetchGenresList();
    }, [])

    // const hendleOptions = (e) => {
    //     console.log(e.target.value);
    //     setGenreId(e.target.value);
    // }

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
              
              {/* <select name="" id="" onChange={hendleOptions}>
                    <option value="0">0</option>
                    <optgroup label="Genres">
                        {genreList && genreList.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
                    </optgroup>
            </select> */}

          </form>

          {searchQuery && submitResults && <SearchGallery searchQuery={searchQuery} submitResults={submitResults} />}
    </div>
  )
}

export default MoviesPage