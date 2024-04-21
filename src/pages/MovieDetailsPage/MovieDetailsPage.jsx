import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { fetchDetails } from '../../fetch'
import { useParams, NavLink, useLocation } from 'react-router-dom'
// import css from './MovieDetails.modules.css'

const MovieDetailsPage = () => {

    const { movieId } = useParams();
    console.log(movieId);
    const [movieDetails, setMovieDeatails] = useState(null);
    console.log(movieDetails);
    const location = useLocation();
    const backLinkRef = useRef(location.state ?? "/movies");

    useEffect(() => {
        const fetchIt = async () => {
            try {
                const response = await fetchDetails(movieId);
                setMovieDeatails(response)
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
        fetchIt();
    }, [movieId])

  return (
      <div>
          <NavLink to={backLinkRef.current}>Go back</NavLink>
          {movieDetails && <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />}
          {/* className={css.movieDeatailImg} */}
          {movieDetails && <h1>{movieDetails.title}</h1>}
          <h2>Overwiew</h2>
          {movieDetails && <p>{movieDetails.overview}</p>}
          <h2>Genres</h2>
          {movieDetails && <p>{movieDetails.genres.map(genre => genre.name).join(', ')}</p>}
    </div>
  )
}

export default MovieDetailsPage