import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import MovieList from 'components/MovieList/MovieList';
import { fetchTrendingMovies } from 'services/TmdbAPI';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const movies = await fetchTrendingMovies(page);
        setTrendingMovies([...trendingMovies, ...movies.results]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFilm();
  }, [page]);

  const loadMoreMovies = () => {
    setPage(page + 1);
  };

  return (
    <div className="container mx-auto">
      <h2 className="mb-10 mt-10 text-4xl font-bold tracking-tight text-center text-white">
        Trending Movies
      </h2>
      <SkeletonTheme baseColor="#dddddd" highlightColor="#a5a5a5">
        {trendingMovies.length === 0 ? (
          <Skeleton
            count={15}
            style={{
              height: 30,
              width: 300,
              marginTop: 15,
              marginRight: 'auto',
              marginLeft: 'auto',
            }}
          />
        ) : (
          <div className="mx-auto text-center">
            <MovieList films={trendingMovies} />
            <button
              onClick={loadMoreMovies}
              className=" bg-blue-500 hover:bg-card text-white font-bold py-2 px-4 rounded my-5 text-center transition-all ease-in"
            >
              Load More
            </button>
          </div>
        )}
      </SkeletonTheme>
    </div>
  );
};

export default Home;
