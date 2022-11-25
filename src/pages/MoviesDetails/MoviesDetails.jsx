import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getFilmInfo } from '../../api/api';

import { Loader } from 'components/Loader';

import { URL } from '../../constanse/imageUrl';

import noPhoto from '../../img/noimage.webp';

const MoviesDetails = () => {
  const [filmInfo, setFilmInfo] = useState(null);
  const param = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/products';

  useEffect(() => {
    getFilmInfo(param.movieId).then(data => {
      setFilmInfo(data);
    });
  }, [param.movieId]);

  if (!filmInfo) {
    return;
  }
  const date = new Date(filmInfo.release_date).getFullYear();
  return (
    <div>
      <Link to={backLinkHref}>Go back</Link>
      {
        <img
          src={filmInfo.poster_path ? URL + filmInfo.poster_path : noPhoto}
          alt={filmInfo.title}
        />
      }
      <h2>{`${filmInfo.title} (${date})`} </h2>
      <p>User Score: {(filmInfo.vote_average / 10) * 100} %</p>
      <h3>Overview</h3>
      <p>{filmInfo.overview}</p>
      <h3>Genres</h3>
      <p>
        {filmInfo.genres.map(({ name, id }) => (
          <span key={id}> {name}</span>
        ))}
      </p>
      <h3>Additional information</h3>
      <ul>
        <li key="cast">
          <Link to="cast" state={{ from: backLinkHref }}>
            Cast
          </Link>
        </li>
        <li key="reviews">
          <Link to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MoviesDetails;
