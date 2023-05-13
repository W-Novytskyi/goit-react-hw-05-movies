import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, ListWrapper } from './Home.styled';

const API_KEY = '9f9d8f1e33dd4ff41c4595e7766fec8d';

const Home = () => {
  const location = useLocation();
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data.results);
        setItemList(data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Container>
      <h1>Trending today</h1>

      <ListWrapper>
        {itemList.map(({ id, title }) => (
          <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        ))}
      </ListWrapper>
    </Container>
  );
};

export default Home;
