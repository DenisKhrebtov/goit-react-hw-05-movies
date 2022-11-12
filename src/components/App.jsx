import { Routes, Route, Link } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { NotFound } from '../pages/NotFound';

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

// Ключ API (v3 auth)
// 572822f6c91e4ecf30bc82c47474f59a
// Пример API-запроса
// https://api.themoviedb.org/3/movie/550?api_key=572822f6c91e4ecf30bc82c47474f59a
