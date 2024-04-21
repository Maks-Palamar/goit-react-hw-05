import { React, useState, useEffect } from 'react'
import { useParams, NavLink, useLocation} from 'react-router-dom'
import { fetchReviews } from '../../fetch'

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
      <ul>
        {review && review.results.map(review => 
          <li key={review.id}>
            <h3><span>User: </span>{review.author_details.username}</h3>
            <p>{review.content}</p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default MovieReviews