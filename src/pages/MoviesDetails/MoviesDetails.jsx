import React, { useEffect, useRef, useState, Suspense } from 'react';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from 'services/TmdbAPI';
import { fetchVideoMovie } from 'services/TmdbAPI';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import noimage from 'components/images/placeholder.png';
import { AiFillStar } from 'react-icons/ai';
import YoutubeTrailer from 'components/YoutubeTrailer/YoutubeTrailer';

const MoviesDetails = () => {
  //hooks
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  const [video, setVideo] = useState('');

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
    const movieVideo = async () => {
      try {
        const results = await fetchVideoMovie(movieId);
        const trailer = results.find(
          ({ site, type }) => site === 'YouTube' && type === 'Trailer'
        );
        setVideo(trailer ? trailer.key : '');
      } catch (error) {
        console.log(error);
      }
    };
    movieVideo();
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
  const movieRating = movieDetails.vote_average;
  const releaseDate = movieDetails.release_date;

  return (
    <div className="container ml-auto mr-auto pl-6 pr-6">
      <Link
        to={backLinkHref.current}
        className="block text-white bg-card hover:bg-header-color  font-bold rounded-lg text-l px-5 py-2.5 my-6 w-[140px]"
      >
        ⬅️ Go back
      </Link>
      <div backdrop={movieDetails.backdrop_path}>
        <div className="flex gap-8 flex-col-reverse md:flex-row mb-10">
          <div className="grow ">
            <h1 className="mb-3 mt-3 text-4xl font-bold tracking-tight text-right text-white">
              {movieDetails.title}
            </h1>
            <h3 className="mb-3 mt-3 text-2xl font-semibold tracking-tight text-right text-slate-500">
              Released: <span className="text-gray-300">{releaseDate}</span>
            </h3>
            <h3 className="mb-3 mt-3 text-2xl font-semibold tracking-tight text-right text-slate-500">
              User score:
            </h3>
            <div className="flex flex-row justify-end items-center text-right text-gray-300">
              <AiFillStar className="text-3xl mr-2" />
              <p className="text-2xl font-bold">{movieRating.toFixed(1)}</p>
            </div>
            <h2 className="mb-1 mt-3 text-2xl font-semibold tracking-tight text-left text-white">
              Overview:
            </h2>
            <p className="mb-3 mt-3 text-l font-normal tracking-tight text-slate-500 max-w-[500px]">
              {movieDetails.overview}
            </p>
            <h2 className="mb-1 mt-3 text-2xl font-semibold tracking-tight text-left text-white">
              Genres:
            </h2>
            <p className="flex gap-5 mb-3 mt-3 text-l font-normal tracking-tight text-slate-500 max-w-[500px]">
              {movieDetails.genres.map(genre => (
                <span key={genre.id}> #{genre.name}</span>
              ))}
            </p>
            <h2 className="mb-1 mt-3 text-2xl font-semibold tracking-tight text-center text-white">
              Production companies
            </h2>
            <ul className="flex gap-3 flex-nowrap">
              {productionCompaniesList}
            </ul>
            <h2 className="my-5 text-2xl font-semibold tracking-tight text-center text-slate-500">
              Trailer
            </h2>
            <div className="flex justify-center my-5">
              <YoutubeTrailer videoId={video} />
            </div>
          </div>

          <div className="text-center md:my-[100px]">
            <img
              src={
                movieDetails.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                  : `${noimage}`
              }
              alt={movieDetails.title}
              className="rounded-2xl"
            />
            <a
              href={movieDetails.homepage}
              rel="noreferrer"
              target="_blank"
              className=" block text-white bg-card hover:bg-header-color focus:ring-4 font-semibold rounded-lg text-l px-5 py-2.5 my-5 focus:outline-none"
            >
              Link to film
            </a>
          </div>
        </div>
        <hr className="w-48 h-1 mx-auto my-2 bg-active-link border-0 rounded md:my-4 " />
        <div className="text-center">
          <h3 className="mb-3 mt-3 text-4xl font-bold tracking-tight text-center text-white">
            Additional information
          </h3>
          <Link to="cast" className="mr-[20px]">
            <Button text="Cast" />
          </Link>
          <Link to="reviews">
            <Button text="Reviews" />
          </Link>
        </div>
        <hr className="w-48 h-1 mx-auto my-2 bg-active-link border-0 rounded md:my-4 " />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MoviesDetails;
