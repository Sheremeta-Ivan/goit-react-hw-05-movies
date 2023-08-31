import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import MovieList from 'components/MovieList/MovieList';
import { fetchTrendingMovies } from 'services/TmdbAPI';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFilm();
  }, []);

  return (
    <div>
      <h2 className="mb-10 mt-10 text-4xl font-bold tracking-tight text-center text-white">
        Trending Movies
      </h2>
      <SkeletonTheme baseColor="#dddddd" highlightColor="#a5a5a5">
        {trendingMovies.length === 0 ? (
          <Skeleton
            count={15}
            style={{ height: 30, width: 300, marginTop: 15 }}
          />
        ) : (
          <MovieList films={trendingMovies} />
        )}
      </SkeletonTheme>
    </div>
  );
};

export default Home;
