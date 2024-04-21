import { React, useEffect, useState } from 'react'
import MovieGallery from '../MovieGallery/MovieGallery'
import { fetchPopular } from '../../fetch'
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage'
import { Routes, Route, NavLink } from "react-router-dom";

const MainPage = () => {

    const [popularMovies, setPopularMovies] = useState(null);
    const [clickedMovieId, setClickedMovieId] = useState(null);
    // console.log(popularMovies);

    useEffect(() => { 
        const fetchThem = async () => {
            try {
                const response = await fetchPopular();
                // console.log(response);
                setPopularMovies(response);
            } catch (error) {
                console.log(error);
            }
        }
        fetchThem();
    }, [])
    
const openDeatails = (movie) => {
    setClickedMovieId(movie.id);
    console.log(movie.id);
}

  return (
      <div>
          <h1>Trending</h1>
          <MovieGallery popularMovies={popularMovies} openDeatails={openDeatails} />
          {/* {clickedMovieId && <MovieDetailsPage movieId={clickedMovieId} />}

          <Routes>
              <Route path=''/>
          </Routes> */}
    </div>
  )
}

export default MainPage