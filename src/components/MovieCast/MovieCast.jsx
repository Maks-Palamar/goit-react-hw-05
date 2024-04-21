import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { fetchCast } from '../../fetch'
import { useParams, NavLink, useLocation} from 'react-router-dom'
import css from './MovieCast.module.css'

const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);

    useEffect(() => {
        const fetchThisCast = async () => {
            try {
                const response = await fetchCast(movieId);
                setCast(response);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
        fetchThisCast();
    }, [movieId])
    
  return (
      <div>
        <ul className={css.castList}>
          {cast && cast.cast.map(cast => 
              <li key={cast.id} className={css.castItem}>
                  <img src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt={cast.name} className={css.castImg}></img>
                  <p>{cast.name} ({cast.character})</p>
              </li>)}
        </ul>
      </div>
      
  )
}

export default MovieCast