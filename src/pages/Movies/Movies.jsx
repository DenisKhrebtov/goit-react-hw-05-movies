import { useState, useEffect } from 'react';
import { Form } from 'components/Form/Form';
import { useSearchParams, Link, useLocation } from 'react-router-dom';

import { fetchFilmsByName } from '../../api/api';
import { Loader } from 'components/Loader';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParam, setSearchParam] = useSearchParams();

  const location = useLocation();
  const currentPath = location.pathname === '/' ? 'movies/' : '';

  const search = searchParam.get('q') ?? '';

  const onSubmit = newQuery => {
    if (query === newQuery) {
      return;
      //alert same one
    }
    setQuery(newQuery);
    setSearchParam(newQuery !== '' ? { q: newQuery } : {});
  };

  const createFilmList = async query => {
    try {
      setFilms([]);
      setIsLoading(true);
      const data = await fetchFilmsByName(query);
      if (!data.length) {
        setError(true);
        return;
      }
      setFilms(data);
      setError(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (search) {
      setQuery(search);
    }
    if (!query) {
      return;
    }
    createFilmList(query);
    // eslint-disable-next-line
  }, [query]);

  return (
    <div>
      <Form onSubmit={onSubmit} />
      {isLoading && <Loader />}

      {error === true ? (
        <p>No results</p>
      ) : (
        <ul>
          {films.map(film => (
            <li key={film.id}>
              <Link to={`${currentPath}${film.id}`} state={{ from: location }}>
                <p>{film.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
