import React from 'react'
import { useQuery } from '@tanstack/react-query'
import SearchBar from '../common/SearchBar'
import { NavLink } from 'react-router'


const apiKey = '95fbce6fd7f7a28cfc8577fc88fcac3f'

function Movies() {

  const {isLoading, error, data} = useQuery({
    queryKey: ['movies'],
    queryFn: () => fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`)
    .then(res => res.json())
  })


  const {isLoading: isLoading1, error: error1, data: data1} = useQuery({
    queryKey: ['movies1'],
    queryFn: () => fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc`)
    .then(res => res.json())
  })


  const {isLoading: isLoading2a, error: error2, data: data2} = useQuery({
    queryKey: ['movies2'],
    queryFn: () => fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=5&sort_by=popularity.desc`)
    .then(res => res.json())
  })


  if(isLoading){
    return <div>Loading...</div>
  }

  if(error){
    return <div>Error: {error.message}</div>
  }


  //Action Movies

  const actionMovies = data?.results?.filter((movie) => movie.genre_ids.includes(28))
  const actionMovies2 = data1?.results?.filter((movie) => movie.genre_ids.includes(28))
  const actionMovies3 = data2?.results?.filter((movie) => movie.genre_ids.includes(28))


  //Science Fiction Movies

  const scienceFiction = data?.results?.filter((movie) => movie.genre_ids.includes(878))
  const scienceFiction2 = data1?.results?.filter((movie) => movie.genre_ids.includes(878))
  const scienceFiction3 = data2?.results?.filter((movie) => movie.genre_ids.includes(878))

  //Animation Movies

  const animationMovies = data?.results?.filter((movie) => movie.genre_ids.includes(16))
  const animationMovies2 = data1?.results?.filter((movie) => movie.genre_ids.includes(16))
  const animationMovies3 = data2?.results?.filter((movie) => movie.genre_ids.includes(16))

  //Horror Movies

  const horrorMovies = data?.results?.filter((movie) => movie.genre_ids.includes(27))
  const horrorMovies2 = data1?.results?.filter((movie) => movie.genre_ids.includes(27))
  const horrorMovies3 = data2?.results?.filter((movie) => movie.genre_ids.includes(27))
  
  return (
    <div className='overflow-auto bg-[#461818]'>

      <SearchBar />

        {/* Action Movies */}

      <h1 className='text-[#F5F5F5] font-bold text-[24px] font-sans tracking-[-0.41px] leading-[30px] mt-4 ml-16 mb-4'>Action</h1>

      <div className='flex gap-8  items-center ml-16 mr-16 px-4 pb-4 overflow-x-scroll ' >

      {actionMovies.map((movie) => (

        <div 
          key={movie.id}
          className='w-[200px] flex flex-col items-center  flex-shrink-0  hover:scale-110 cursor-pointer'
        >

          <NavLink to={`/movie/${movie.id}`}>

            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title}
              className='w-[200px] h-[250px] rounded-md'
            />

          </NavLink>
          

          <h2 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2'>{movie.title}</h2>
          <h3 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-0 m-2'>{movie.release_date}</h3>
        
        </div>
      ))}

      {actionMovies2?.map((movie) => (

        <div 
          key={movie.id}
          className='w-[200px] flex flex-col items-center  flex-shrink-0  hover:scale-110 cursor-pointer'  
        >

          <NavLink to={`/movie/${movie.id}`}>

            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title}
              className='w-[200px] h-[250px] rounded-md'
            />

          </NavLink>

         

            <h2 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2'>{movie.title}</h2>
            <h3 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-0 m-2'>{movie.release_date}</h3>
        
        </div>
      ))}

      {actionMovies3?.map((movie) => (

        <div 
          key={movie.id}
          className='w-[200px] flex flex-col items-center  flex-shrink-0  hover:scale-110 cursor-pointer'
        >

          <NavLink to={`/movie/${movie.id}`}>

            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title}
              className='w-[200px] h-[250px] rounded-md'
            />

          </NavLink>

          

          <h2 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2'>{movie.title}</h2>
          <h3 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-0 m-2'>{movie.release_date}</h3>
        
        </div>
      ))}
      
      </div>

        {/* Science Fiction Movies */}

      <h1 className='text-[#F5F5F5] font-bold text-[24px] font-sans tracking-[-0.41px] leading-[30px] mt-4 ml-16 mb-4'>SCI-FI</h1>

      <div className='flex gap-8  items-center ml-16 mr-16 px-4 pb-4 overflow-x-scroll '>

        {scienceFiction?.map((movie) => (

          <div 
            key={movie.id}
            className='w-[200px] flex flex-col items-center  flex-shrink-0  hover:scale-110 cursor-pointer'  
          >

            <NavLink to={`/movie/${movie.id}`}>

            <img  
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className='w-[200px] h-[250px] rounded-md'
            />

            </NavLink>

           
            <h2 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2'>{movie.title}</h2>
            <h3 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-0 m-2'>{movie.release_date}</h3>
          
          </div>
        ))}

        {scienceFiction2?.map((movie) => (

          <div 
            key={movie.id}
            className='w-[200px] flex flex-col items-center  flex-shrink-0  hover:scale-110 cursor-pointer'
          >

            <NavLink to={`/movie/${movie.id}`}>

              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className='w-[200px] h-[250px] rounded-md'
              />

            </NavLink>

            

            <h2 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2'>{movie.title}</h2>
            <h3 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

          </div>
        ))}

        {scienceFiction3?.map((movie) => (

          <div 
            key={movie.id}
            className='w-[200px] flex flex-col items-center  flex-shrink-0  hover:scale-110 cursor-pointer'
          >

            <NavLink to={`/movie/${movie.id}`}>

              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className='w-[200px] h-[250px] rounded-md'
              />

            </NavLink>

            <h2 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2'>{movie.title}</h2>
            <h3 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-0 m-2'>{movie.release_date}</h3>
         
          </div>
        ))}

      </div>

        {/* Animation Movies */}

      <h1 className='text-[#F5F5F5] font-bold text-[24px] font-sans tracking-[-0.41px] leading-[30px] mt-4 ml-16 mb-4'>Animation</h1>

      <div className='flex gap-8  items-center ml-16 mr-16 px-4 pb-4 overflow-x-scroll '>

        {animationMovies?.map((movie) => (

          <div 
            key={movie.id}
            className='w-[200px] flex flex-col items-center  flex-shrink-0  hover:scale-110 cursor-pointer'
          >

            <NavLink to={`/movie/${movie.id}`}>

              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
                className='w-[200px] h-[250px] rounded-md'
              />

            </NavLink>

            
            <h2 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2'>{movie.title}</h2>
            <h3 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-0 m-2'>{movie.release_date}</h3>
          
          </div>

        ))}

        {animationMovies2?.map((movie) => (

          <div 
            key={movie.id}
            className='w-[200px] flex flex-col items-center  flex-shrink-0  hover:scale-110 cursor-pointer'
          >

            <NavLink to={`/movie/${movie.id}`}>

              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
                className='w-[200px] h-[250px] rounded-md'
              />

            </NavLink>

        
            <h2 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2'>{movie.title}</h2>
            <h3 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-0 m-2'>{movie.release_date}</h3>
          
          </div>
        ))}

        {animationMovies3?.map((movie) => (

          <div 
            key={movie.id}
            className='w-[200px] flex flex-col items-center  flex-shrink-0  hover:scale-110 cursor-pointer'
          >

            <NavLink to={`/movie/${movie.id}`}>

              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
                className='w-[200px] h-[250px] rounded-md'
              />

            </NavLink>

            

            <h2 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2'>{movie.title}</h2>
            <h3 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

          </div>
        ))}

      </div>

        {/* Horror Movies */}

        <h1 className='text-[#F5F5F5] font-bold text-[24px] font-sans tracking-[-0.41px] leading-[30px] mt-4 ml-16 mb-4'>Horror</h1>

        <div className='flex gap-8  items-center ml-16 mr-16 px-4 pb-4 overflow-x-scroll '>

          {horrorMovies?.map((movie) => (

            <div 
              key={movie.id}
              className='w-[200px] flex flex-col items-center  flex-shrink-0  hover:scale-110 cursor-pointer'
            >

              <NavLink to={`/movie/${movie.id}`}>

                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                  alt={movie.title} 
                  className='w-[200px] h-[250px] rounded-md'
                />

              </NavLink>

              <h2 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2'>{movie.title}</h2>
              <h3 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

            </div>
          ))}

          {horrorMovies2?.map((movie) => (
            
            <div 
              key={movie.id}
              className='w-[200px] flex flex-col items-center  flex-shrink-0  hover:scale-110 cursor-pointer'
            >

              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
                className='w-[200px] h-[250px] rounded-md'
              />

              <h2 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2'>{movie.title}</h2>
              <h3 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

            </div>
          ))}

          {horrorMovies3?.map((movie) => (
            
            <div 
              key={movie.id}
              className='w-[200px] flex flex-col items-center  flex-shrink-0  hover:scale-110 cursor-pointer'
            >

              <NavLink to={`/movie/${movie.id}`}>

                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                  alt={movie.title} 
                  className='w-[200px] h-[250px] rounded-md'
                />

              </NavLink>

              <h2 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2'>{movie.title}</h2>
              <h3 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

            </div>
          ))}

        </div>
      
    </div>
  )
}

export default Movies