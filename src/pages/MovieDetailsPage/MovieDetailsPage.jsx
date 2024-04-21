import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { fetchDetails } from '../../fetch'
import { useParams, NavLink, useLocation, Outlet } from 'react-router-dom'
import css from './MovieDetails.module.css'
import clsx from 'clsx'

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
    // <div className={css.movieDetailsPage}>
        <div className={css.detailsContainer}>
              <NavLink to={backLinkRef.current} className={css.backLink}>⬅ Go back</NavLink>
              {movieDetails && <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />}
              {/* className={css.movieDeatailImg} */}
              {movieDetails && <h1>{movieDetails.title}</h1>}
              <h2>Overwiew</h2>
              {movieDetails && <p>{movieDetails.overview}</p>}
              <h2>Genres</h2>
              {movieDetails && <p>{movieDetails.genres.map(genre => genre.name).join(', ')}</p>}
    
              {/* <p>Additional information</p> */}
              <ul className={css.additionalInfo}>
                  <li className={css.additionalItem}><NavLink to="cast" state={location} className={({isActive}) => clsx(css.addLink, {[css.addLinkActive]: isActive,})}>Cast</NavLink></li>
                  <li className={css.additionalItem}><NavLink to="reviews" state={location} className={({isActive}) => clsx(css.addLink2, {[css.addLinkActive2]: isActive,})}>Reviews</NavLink></li>
              </ul>
              <Outlet />
        </div>
    // </div>
  )
}

export default MovieDetailsPage