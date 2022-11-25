import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { AppBar } from 'components/AppBar/AppBar';

import { Loader } from 'components/Loader';

const Home = lazy(() => import('../../pages/Home/Home'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const MoviesDetails = lazy(() =>
  import('../../pages/MoviesDetails/MoviesDetails')
);
const Reviews = lazy(() => import('../../components/Reviews/Reviews'));
const Cast = lazy(() => import('../../components/Cast/Cast'));

export const App = () => {
  return (
    <>
      <AppBar />
      <div>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MoviesDetails />}>
              <Route path="/movies/:movieId/cast" element={<Cast />} />
              <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};
