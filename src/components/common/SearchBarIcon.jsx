import React, { useState } from 'react';
import { Link } from 'react-router'; 
import searchInput from '../images/bx-search.svg';
import useSearchMovies from '../hooks/useSearchMovies';

function SearchBarIcon() {
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const { data, isLoading, isError } = useSearchMovies(searchTerm);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(query.trim());
  };

  return (
    <div>
      
      {/* Search Bar */}

      <div className="m-4 flex items-center justify-center  ">

        <input
          type="search"
          id="searchBar"
          name="searchBar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie"
          className="w-1/2 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-200  "
        />

        <button
          onClick={handleSearch}
          className="bg-[#461818] p-2 rounded-lg ml-2 flex items-center justify-center"
        >

          <img
            src={searchInput}
            alt="search"
            className="w-10 h-10"
          />

        </button>
      </div>

      {/* Results */}
      {isLoading && <p className="text-center text-gray-500">Loading...</p>}
      {isError && <p className="text-center text-red-500">An error occurred while searching for movies.</p>}


      
      {data?.results?.length > 0 && (

        
        <ul className='flex gap-4 sm:gap-8 mx-2 items-center sm:mx-16 overflow-y-hidden px-4 pb-4 pt-0 mt-2 overflow-x-scroll w-full sm:w-auto '>

          {data.results.map((movie) => (

            <li 
              key={movie.id} 
              className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
            >

              <Link to={`/movie/${movie.id}`}>

                <img 
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                        alt={movie.title} 
                        className='sm:w-[200px]  w-[100px] rounded-md'
                />

              </Link>



              <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
              <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>


            </li>
          ))}

        </ul>
      )}

      {data?.results?.length === 0 && searchTerm && !isLoading && (
        <p className="text-center text-gray-500">No movies found for "{searchTerm}".</p>
      )}
    </div>
  );
}

export default SearchBarIcon;
