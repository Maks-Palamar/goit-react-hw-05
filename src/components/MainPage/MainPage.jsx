import { useEffect, useState } from 'react'
import MovieGallery from '../MovieGallery/MovieGallery'
import { fetchPopular } from '../../fetch'

const MainPage = () => {

    const [popularMovies, setPopularMovies] = useState(null);

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

  return (
      <div>
          <h1>Trending</h1>
          <MovieGallery popularMovies={popularMovies} />
    </div>
  )
}

export default MainPage