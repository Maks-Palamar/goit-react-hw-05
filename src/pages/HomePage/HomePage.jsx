// import MainPage from '../../components/MainPage/MainPage'
import { fetchPopular } from '../../fetch'
import { useState, useEffect } from 'react'
import MovieList from '../../components/MovieList/MovieList'

const HomePage = () => {

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
      <MovieList  popularMovies={popularMovies}/>
    </div>
  )
}

export default HomePage