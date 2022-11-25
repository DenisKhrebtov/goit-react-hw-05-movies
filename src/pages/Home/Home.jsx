import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendFilms } from '../../api/api';

const Home = () => {
  const [films, setFilms] = useState([]);

  const location = useLocation();
  const currentPath = location.pathname === '/' ? 'movies/' : '';

  useEffect(() => {
    fetchTrendFilms().then(data => setFilms(data));
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`${currentPath}${film.id}`} state={{ from: location }}>
              <p>{film.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
