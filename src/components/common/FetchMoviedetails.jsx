
const apiKey = '95fbce6fd7f7a28cfc8577fc88fcac3f' // Replace with your TMDb API key
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovieDetails = async (movieId) => {
  const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${apiKey}`);
  if (!response.ok) {
    throw new Error('Failed to fetch movie details');
  }
  return response.json();
};


export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch search results');
    }
    return response.json();
  };
