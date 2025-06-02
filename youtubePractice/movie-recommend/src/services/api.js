const API_KEY = "8932eab9f7f15745c6b88c26f09fe7a5";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  console.log(data);
  return data.results;
};
export const searchMovies = async (searchQuery) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&include_adult=true&query=${encodeURIComponent(searchQuery)}`,
  );
  const data = await response.json();
  console.log(data);
  return data.results;
};
