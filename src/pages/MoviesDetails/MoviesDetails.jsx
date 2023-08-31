import React, { useEffect, useRef, useState, Suspense } from 'react';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from 'services/TmdbAPI';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import noimage from 'components/images/placeholder.png';

const MoviesDetails = () => {
  //hooks
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from || '/');

  //get data from api about film details
  useEffect(() => {
    const movieDetails = async () => {
      try {
        const movie = await fetchMovieDetails(movieId);
        setMovieDetails(movie);
      } catch (error) {
        console.error(error);
      }
    };

    movieDetails();
  }, [movieId]);

  //share loader when movieDetail null
  if (!movieDetails) {
    return <Loader />;
  }

  //get info about production companies current film
  const productionCompanies = movieDetails.production_companies;

  const productionCompaniesList = productionCompanies.map(
    ({ id, logo_path, name }) =>
      logo_path && (
        <li key={id}>
          {logo_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${logo_path}`}
              alt={name}
              style={{
                maxHeight: 50,
                maxWidth: 200,
                marginRight: 30,
                marginTop: 10,
              }}
            />
          )}
        </li>
      )
  );
  const roundedPopularity = Math.round(movieDetails.vote_average * 10);

  return (
    <div className="container ml-auto mr-auto pl-6 pr-6">
      <Link to={backLinkHref.current}>
        <Button text="⬅️ Go back" />
      </Link>
      <div backdrop={movieDetails.backdrop_path}>
        {/* right side */}
        <div>
          <h1>{movieDetails.title}</h1>
          <h3>User score: {roundedPopularity}%</h3>
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>
          <h2>Genres</h2>
          <p>
            {movieDetails.genres.map(genre => (
              <span key={genre.id}> {genre.name}</span>
            ))}
          </p>
          <h2>Production companies</h2>
          <div>{productionCompaniesList}</div>
        </div>
        {/* img container */}
        <div>
          <img
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                : `${noimage}`
            }
            alt={movieDetails.title}
          />
        </div>
        <hr />
        <h3>Additional information</h3>
        <Link to="cast">
          <Button text="Cast" />
        </Link>
        <Link to="reviews">
          <Button text="Reviews" />
        </Link>
        <hr />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MoviesDetails;
