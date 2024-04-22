import { useState, useEffect } from 'react'
import { Routes, Route, NavLink, useSearchParams } from "react-router-dom";
import { fetchRandomMovie } from '../../fetch';
import MovieCard from '../../components/MovieCard/MovieCard'
import css from './NotFoundPage.module.css'

const NotFoundPage = () => {
    const [randomMovie, setRandomMovie] = useState(null);

    useEffect(() => {
        const getRandomMovie = async () => {
            try {
                const response = await fetchRandomMovie();
                if (response.adult !== true) {
                    setRandomMovie(response);
                    console.log(response);
                } else {
                    console.log("You are too young to watch this movie, please try again later");
                }
                
            } catch (error) {
                console.log(error);
            }
        }
        getRandomMovie();
    }, [])

  return (
      <div>
          <h1>Seems like you are lost in the void, please click <NavLink to="/">HOME</NavLink> button</h1>
            {!randomMovie && <p>There should be random movie, but something went wrong <br />try to reload page, maybe you get another one</p>}
          {randomMovie && <div className={css.randomMovie}>
              <p>OR <br />Here is your random movie <br />(if my function returned real id and not just random number)</p>
              <NavLink to={`/movies/${randomMovie.id}`}>
                  <MovieCard movie={randomMovie} />
              </NavLink>
          </div>}
    </div>
  )
}

export default NotFoundPage