import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/TmdbAPI';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const movieReviews = async () => {
      try {
        const response = await fetchMovieReviews(movieId);
        setReviews(response);
      } catch (error) {
        console.log(error);
      }
    };
    movieReviews();
  }, [movieId]);
  return (
    <div>
      {reviews.length !== 0 && (
        <div>
          <h2 className="my-4 text-4xl font-bold tracking-tight text-center text-white">
            Movie Reviews
          </h2>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <p className="mb-1 mt-3 text-2xl font-semibold tracking-tight text-left text-white">
                  {review.author}
                </p>
                <p className="mb-3 mt-3 text-l font-normal tracking-tight text-slate-500 ">
                  {review.content}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {reviews.length === 0 && (
        <div>We don't have any reviews for this movie.</div>
      )}
    </div>
  );
};

export default Reviews;
