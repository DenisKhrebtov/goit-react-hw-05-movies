import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { fetchTrendFilms } from '../../api/api';

import { Title, MainBox, List, LinkFilms } from './Home.styled';

const Home = () => {
  const [films, setFilms] = useState([]);

  const location = useLocation();
  const currentPath = location.pathname === '/' ? 'movies/' : '';

  useEffect(() => {
    fetchTrendFilms().then(data => setFilms(data));
  }, []);

  return (
    <MainBox>
      <Title>Trending today</Title>
      <List>
        {films.map(film => (
          <li key={film.id}>
            <LinkFilms
              to={`${currentPath}${film.id}`}
              state={{ from: location }}
            >
              <p>{film.title}</p>
            </LinkFilms>
          </li>
        ))}
      </List>
    </MainBox>
  );
};

export default Home;
