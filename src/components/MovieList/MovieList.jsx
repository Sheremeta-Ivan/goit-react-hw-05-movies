import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import noimage from '../images/placeholder.png';
const MovieList = ({ films }) => {
  const location = useLocation();
  return (
    <ul className="container mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-4  my-8 px-6">
      {films.map(movie => (
        <li
          key={movie.id}
          className="max-w-[290px] 2xl:max-w-[340px] mx-auto bg-card border border-card rounded-lg ease-in duration-300 shadow hover:scale-105 "
        >
          <Link
            to={`/movies/${movie.id}`}
            className="flex flex-col"
            state={{ from: location }}
          >
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : `${noimage}`
              }
              alt={movie.title}
              className="rounded-t-lg grow"
            />
            <p className="my-3 text-2xl font-semibold tracking-tight text-white text-center truncate px-4 h-[10%]">
              {movie.title}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default MovieList;
