import { Loader } from 'components/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getFilmReviews } from '../../api/api';

import { List, ListItem, Author, Content } from './Reviews.styled';

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
        <List>
          {reviews.map(({ author, content }) => (
            <ListItem key={author}>
              <Author>Author: {author}</Author>
              <Content>{content}</Content>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default Reviews;
