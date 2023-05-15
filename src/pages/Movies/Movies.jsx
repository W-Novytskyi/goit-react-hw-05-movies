import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { Container, ListWrapper } from './Movies.styled';

const API_KEY = '9f9d8f1e33dd4ff41c4595e7766fec8d';

const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get('query') ?? '');
  const query = searchParams.get('query') ?? '';

  const handleSubmit = event => {
    event.preventDefault();

    if (inputValue === '') {
      return alert(
        'Sorry, but we dont find empty string, you shoud write something'
      );
    }

    setSearchParams({ query: inputValue });
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.results.length === 0) {
          return alert(`Sorry, we dont found ${query}`);
        }
        console.log(data);
        setMovies(data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, [query]);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ListWrapper>
        {movies.map(({ id, title }) => (
          <Link key={id} to={`${id}`} state={{ from: location }}>
            {title}
          </Link>
        ))}
      </ListWrapper>
    </Container>
  );
};

export default Movies;
