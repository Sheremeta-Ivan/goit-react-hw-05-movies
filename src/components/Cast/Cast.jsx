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
          <h2 className="my-4 text-4xl font-bold tracking-tight text-center text-white">
            Movie Cast
          </h2>
          <ul className="container mx-auto my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-6  gap-8  px-6">
            {cast.map(actor => (
              <li
                key={actor.id}
                className="max-w-xs mx-auto bg-card border-card  rounded-lg ease-in duration-300 shadow"
              >
                <img
                  width="200px"
                  height="300px"
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                      : `${noimage}`
                  }
                  alt={actor.original_name}
                  className="rounded-t-lg grow"
                />
                <p className=" text-m font-medium tracking-tight text-white text-center truncate  px-2">
                  {actor.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {cast.length === 0 && (
        <p className="my-4 text-2xl font-semibold tracking-tight text-white text-center">
          We don't have any cast for this movie :(
        </p>
      )}
    </div>
  );
};

export default Cast;
