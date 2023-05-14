import { Suspense } from 'react';
import { useState, useEffect, useRef } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import {
  Container,
  CardWrapper,
  CardInfo,
  Img,
  List,
} from './MovieDetails.styled';

const API_KEY = '9f9d8f1e33dd4ff41c4595e7766fec8d';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setMovie(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  const { poster_path, title, release_date, overview, genres, vote_average } =
    movie;
  const releaseYear = release_date ? release_date.split('-')[0] : '';

  return (
    <Container>
      <button type="button">
        <Link to={backLinkLocationRef.current}>Go back</Link>
      </button>
      <CardWrapper>
        {poster_path ? (
          <Img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt="poster"
          />
        ) : (
          <p>No Image Available</p>
        )}

        <CardInfo>
          <h1>
            {title} ({releaseYear})
          </h1>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <ul>
            {genres &&
              genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
          </ul>
        </CardInfo>
      </CardWrapper>
      <>
        <p>Additional information</p>
        <List>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </List>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </>
    </Container>
  );
};

export default MovieDetails;
