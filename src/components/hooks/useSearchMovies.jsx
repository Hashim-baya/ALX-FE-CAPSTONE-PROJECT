import { useQuery } from '@tanstack/react-query';
import { searchMovies } from '../common/FetchMoviedetails';

const useSearchMovies = (query) => {
  return useQuery({
    queryKey: ['searchMovies', query],
    queryFn: () => searchMovies(query),
    enabled: !!query, 
  });
};

export default useSearchMovies;