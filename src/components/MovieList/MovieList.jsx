import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ films }) => {
  return (
    <ul>
      {films.map(movie => (
        <li key={movie.id} className="border-[4px] w-[300px] border-red-300">
          <Link to={`/movies/${movie.id}`}>
            <p>{movie.title}</p>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={200}
            />
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
