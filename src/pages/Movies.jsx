import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';

const API_KEY = '9f9d8f1e33dd4ff41c4595e7766fec8d';

const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get('query') ?? '');
  const [isSearching, setIsSearching] = useState(false);
  const query = searchParams.get('query') ?? '';

  const handleSubmit = event => {
    event.preventDefault();

    if (inputValue === '') {
      return;
    }

    setSearchParams({ query: inputValue });
    // setInputValue('');
    setIsSearching(true);
  };

  useEffect(() => {
    if (!isSearching) return;

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setMovies(data.results);
        setIsSearching(false);
        setInputValue('');
      })
      .catch(error => {
        console.error(error);
        setIsSearching(false);
      });
  }, [isSearching, query]);

  useEffect(() => {
    setInputValue(query);
  }, [query]);

  if (isSearching) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(({ id, title }) => (
          <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
