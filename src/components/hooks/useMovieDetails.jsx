// src/hooks/useMovieDetails.js
import { useQuery } from '@tanstack/react-query';
import { fetchMovieDetails } from '../common/FetchMoviedetails';

const useMovieDetails = (movieId) => {
  return useQuery({
    queryKey: ['movieDetails', movieId],
    queryFn: () => fetchMovieDetails(movieId),
    enabled: !!movieId, // Only fetch when movieId exists
  });
};

export default useMovieDetails;
