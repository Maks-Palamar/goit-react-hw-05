import css from './MovieCard.module.css'

const MovieCard = ({movie}) => {
  return (
      <div>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={css.movieImg} />
    </div>
  )
}

export default MovieCard