import { Loader } from 'components/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getFilmCast } from '../../api/api';

import { URL } from '../../constanсe/imageUrl';

import noPhoto from '../../img/noimage.webp';

import { List, ListItem, Avatar } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getFilmCast(movieId).then(data => {
      if (!data.length) {
        setError(true);
        setIsLoading(false);
        return;
      }
      setActors(data);
      setError(false);
      setIsLoading(false);
    });
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>Sorry no information about cast</p>}
      {error === false && (
        <List>
          {actors.map(({ name, profile_path, character }) => (
            <ListItem key={name}>
              <Avatar
                src={profile_path ? URL + profile_path : noPhoto}
                alt={name}
              />
              <p>{name}</p>
              <p>Characters: {character}</p>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default Cast;
