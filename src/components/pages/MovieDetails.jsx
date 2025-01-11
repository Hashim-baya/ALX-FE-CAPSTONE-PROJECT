// src/pages/MovieDetails.js
import React from 'react';
import { useParams, Link } from 'react-router';
import useMovieDetails from '../hooks/useMovieDetails';

const MovieDetails = () => {
  const { id } = useParams();
  const { data: movie, isLoading, error } = useMovieDetails(id);

  if (isLoading) return <p>Loading movie details...</p>;
  if (error) return <p>An error occurred: {error.message}</p>;

  return (

    <div className='overflow-auto bg-[#461818] '>

      <Link 
            to="/" 
            className='m-[20px] inline-block text-[#F5F5F5] font-sans font-semibold hover:text-blue-400' 
        >

            &larr; Back to Home

      </Link>

      <div 
            className= 'flex gap-[20px]'
        >

        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className= 'w-[300px] h-[450px] rounded-md m-4'
        />

        <div>

          <h1 className='text-[#F5F5F5] font-bold text-[32px] font-sans tracking-[-0.41px] leading-[30px] mt-4 ml-16 mb-4'>{movie.title}</h1>
          <p className='text-[#F5F5F5] text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-start font-semibold'><strong className= 'text-[24px] text-blue-500 mr-3 font-extrabold'>Release Date:</strong> {movie.release_date}</p>
          <p  className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-start'><strong className= 'text-[24px] text-blue-500 mr-3 font-extrabold'>Rating:</strong> {movie.vote_average} / 10</p>
          <p className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-start'><strong className= 'text-[24px] text-blue-500 mr-3 font-extrabold'>Overview:</strong> {movie.overview}</p>
          <p className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-start'><strong className= 'text-[24px] text-blue-500 mr-3 font-extrabold'>Genres:</strong> {movie.genres.map((genre) => genre.name).join(', ')}</p>
        
        </div>

      </div>
      
    </div>
  );
};

export default MovieDetails;
