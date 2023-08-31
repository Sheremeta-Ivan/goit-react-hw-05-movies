import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import noimage from '../images/placeholder.png';
const MovieList = ({ films }) => {
  return (
    <ul className="container ml-auto mr-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-8  pl-6 pr-6">
      {films.map(movie => (
        <li
          key={movie.id}
          className="max-w-xs ml-auto mr-auto bg-card border border-gray-200 rounded-lg ease-in duration-300 shadow hover:scale-105 "
        >
          <Link to={`/movies/${movie.id}`}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : `${noimage}`
              }
              alt={movie.title}
              className="rounded-t-lg"
            />
            <p className="mb-2 mt-3 text-2xl font-bold tracking-tight text-white text-center">
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
