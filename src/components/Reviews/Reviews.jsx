import { Loader } from 'components/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getFilmReviews } from '../../api/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getFilmReviews(movieId).then(data => {
      if (!data.length) {
        setError(true);
        setIsLoading(false);
        return;
      }
      setReviews(data);

      setError(false);
      setIsLoading(false);
    });
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>We dont have any reviews for this movie</p>}
      {error === false && (
        <ul>
          {reviews.map(({ author, content }) => (
            <li key={author}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
