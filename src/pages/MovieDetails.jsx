import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';

const API_KEY = '9f9d8f1e33dd4ff41c4595e7766fec8d';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

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

  if (!movie) {
    return <div>Loading movie details...</div>;
  }

  const { poster_path, title, release_date, overview, genres, vote_average } =
    movie;
  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="poster"
        />
        <h1>
          {title} ({release_date.split('-')[0]})
        </h1>
        <p>User Score: {Math.round(vote_average * 10)}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <ul>
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
