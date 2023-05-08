import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const API_KEY = '9f9d8f1e33dd4ff41c4595e7766fec8d';

const Home = () => {
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
    <div>
      <h1>Trending today</h1>

      <ul>
        {itemList.map(({ id, title }) => (
          <Link key={id} to={`/movies/${id}`}>
            {title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Home;
