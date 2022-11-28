import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getFilmInfo } from '../../api/api';

import { Loader } from 'components/Loader';

import { URL } from '../../constanсe/imageUrl';

import noPhoto from '../../img/noimage.webp';

import {
  Img,
  ImageWrap,
  Wrap,
  AccentText,
  InfoWrap,
  BackNavLink,
  List,
} from './MoviesDetail.styled';

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
      <BackNavLink to={backLinkHref}>Go back</BackNavLink>
      <Wrap>
        <ImageWrap>
          {
            <Img
              src={filmInfo.poster_path ? URL + filmInfo.poster_path : noPhoto}
              alt={filmInfo.title}
            />
          }
        </ImageWrap>
        <InfoWrap>
          <h2>{`${filmInfo.title} (${date})`} </h2>
          <p>User Score: {((filmInfo.vote_average / 10) * 100).toFixed()} %</p>
          <AccentText>Overview</AccentText>
          <p>{filmInfo.overview}</p>
          <AccentText>Genres</AccentText>
          <p>
            {filmInfo.genres.map(({ name, id }) => (
              <span key={id}> {name}</span>
            ))}
          </p>
        </InfoWrap>
      </Wrap>
      <h3>Additional information</h3>
      <List>
        <li key="cast">
          <BackNavLink to="cast" state={{ from: backLinkHref }}>
            Cast
          </BackNavLink>
        </li>
        <li key="reviews">
          <BackNavLink to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </BackNavLink>
        </li>
      </List>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MoviesDetails;
