import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '1527ea54837c90bfc98da5bb8785a014';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

export const fetchTrendingMovies = async (page, { signal }) => {
  const params = {
    page,
  };
  const response = await axios.get(`trending/movie/day`, { params, signal });
  return response.data;
};

export const fetchVideoMovie = async movieId => {
  const response = await axios.get(`/movie/${movieId}/videos?`);
  return response.data.results;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}`);
  return response.data;
};

export const handleSearch = async (movieName, { signal }) => {
  const response = await axios.get(`/search/movie?query=${movieName}`, {
    signal,
  });
  return response.data.results;
};

export const fetchMovieCast = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits?`);
  return response.data.cast;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews?`);
  return response.data.results;
};
