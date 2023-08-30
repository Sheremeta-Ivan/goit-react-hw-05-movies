import React, { useEffect, useState } from 'react';
import { fetchMovieCast } from 'services/TmdbAPI';
import noimage from '../images/placeholder.png';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  useEffect(() => {
    const movieCast = async () => {
      try {
        const response = await fetchMovieCast(movieId);
        setCast(response);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    movieCast();
  }, [movieId]);
  return (
    <div>
      {cast.length !== 0 && (
        <div>
          <h2>Movie Cast</h2>
          <ul>
            {cast.map(actor => (
              <li key={actor.id}>
                <img
                  width="200px"
                  height="300px"
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                      : `${noimage}`
                  }
                  alt={actor.original_name}
                />
                <p>{actor.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {cast.length === 0 && <p>We don't have any cast for this movie.</p>}
    </div>
  );
};

export default Cast;
