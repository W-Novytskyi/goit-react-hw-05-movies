import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = '9f9d8f1e33dd4ff41c4595e7766fec8d';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setReviews(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  return (
    <>
      {reviews && reviews.results && reviews.results.length === 0 && (
        <p>We don't have any reviews for this movie.</p>
      )}
      <ul>
        {reviews.results &&
          reviews.results.map(result => (
            <li key={result.id}>
              <h2>{result.author}</h2>
              <p>{result.content}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Reviews;
