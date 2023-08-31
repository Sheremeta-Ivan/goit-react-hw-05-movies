import { handleSearch } from 'services/TmdbAPI';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Form from 'components/Form/Form';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') || '';
  const [loading, setLoading] = useState(false);

  const updateQueryString = query => {
    const nextParams = query !== '' && { query };
    setSearchParams(nextParams);
  };
  useEffect(() => {
    const search = async () => {
      try {
        setLoading(true);
        const movies = await handleSearch(movieName);
        setSearchResults(movies);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    search();
  }, [movieName]);
  return (
    <div className="h-full">
      <SkeletonTheme baseColor="#dddddd" highlightColor="#a5a5a5">
        <Form value={movieName} onChange={updateQueryString} />
        {loading ? (
          <Skeleton
            count={15}
            style={{
              height: 30,
              width: 300,
              marginTop: 15,
            }}
          />
        ) : searchResults.length === 0 && movieName ? (
          <h2 className="mb-10 mt-10 text-3xl text-center font-thin tracking-tight text-white">
            🔎 Nothing found
          </h2>
        ) : (
          <MovieList films={searchResults} />
        )}
      </SkeletonTheme>
    </div>
  );
};

export default Movies;
