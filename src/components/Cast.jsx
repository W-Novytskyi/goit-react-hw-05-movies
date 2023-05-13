import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = '9f9d8f1e33dd4ff41c4595e7766fec8d';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data.cast);
        setCast(data.cast);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  if (!cast) {
    return <div>Loading the cast for a movie...</div>;
  }

  return (
    <div>
      <ul>
        {cast.map(({ id, profile_path, name, character }) => (
          <li key={id} to={`/movies/${id}`}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt=""
              />
            ) : (
              <p>No Image Available</p>
            )}
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
