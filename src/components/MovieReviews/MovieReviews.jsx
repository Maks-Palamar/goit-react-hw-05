import { React, useState, useEffect } from 'react'
import { useParams, NavLink, useLocation} from 'react-router-dom'
import { fetchReviews } from '../../fetch'
import css from './MovieReviews.module.css'

const MovieReviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState(null);

  useEffect(() => {
    const fetchThisReview = async () => {
      try {
        const response = await fetchReviews(movieId);
        setReview(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchThisReview();
  }, [movieId])

  return (
    <div>
      <ul className={css.reviewList}>
        {review && review.results.map(review => 
          <li key={review.id} className={css.reviewItem}>
            <div className={css.authorBlock}>
              <h3 className={css.reviewAuthor}><span>User:  </span>{review.author_details.username}</h3>
              {review.author_details.rating && <p className={css.reviewRating}>{review.author_details.rating}</p>}
            </div>
            <p className={css.reviewContent}>{review.content}</p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default MovieReviews