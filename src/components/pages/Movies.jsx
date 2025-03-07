import React from 'react'
import { useQuery } from '@tanstack/react-query'
import SearchBarIcon from '../common/SearchBarIcon'
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


  const {isLoading: isLoading2, error: error2, data: data2} = useQuery({
    queryKey: ['movies2'],
    queryFn: () => fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=5&sort_by=popularity.desc`)
    .then(res => res.json())
  })

  const {isLoading: isLoading3, error: error3, data: data3} = useQuery({
    queryKey: ['movies3'],
    queryFn: () => fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=6&sort_by=popularity.desc`)
    .then(res => res.json())
  })

  const {isLoading: isLoading4, error: error4, data: data4} = useQuery({
    queryKey: ['movies4'],
    queryFn: () => fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=7&sort_by=popularity.desc`)
    .then(res => res.json())
  })

  const {isLoading: isLoading5, error: error5, data: data5} = useQuery({
    queryKey: ['movies5'],
    queryFn: () => fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=8&sort_by=popularity.desc`)
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
  const actionMovies4 = data3?.results?.filter((movie) => movie.genre_ids.includes(28))
  const actionMovies5 = data4?.results?.filter((movie) => movie.genre_ids.includes(28))
  const actionMovies6 = data5?.results?.filter((movie) => movie.genre_ids.includes(28))

  //Science Fiction Movies

  const scienceFiction = data?.results?.filter((movie) => movie.genre_ids.includes(878))
  const scienceFiction2 = data1?.results?.filter((movie) => movie.genre_ids.includes(878))
  const scienceFiction3 = data2?.results?.filter((movie) => movie.genre_ids.includes(878))
  const scienceFiction4 = data3?.results?.filter((movie) => movie.genre_ids.includes(878))
  const scienceFiction5 = data4?.results?.filter((movie) => movie.genre_ids.includes(878))
  const scienceFiction6 = data5?.results?.filter((movie) => movie.genre_ids.includes(878))

  //Animation Movies

  const animationMovies = data?.results?.filter((movie) => movie.genre_ids.includes(16))
  const animationMovies2 = data1?.results?.filter((movie) => movie.genre_ids.includes(16))
  const animationMovies3 = data2?.results?.filter((movie) => movie.genre_ids.includes(16))
  const animationMovies4 = data3?.results?.filter((movie) => movie.genre_ids.includes(16))
  const animationMovies5 = data4?.results?.filter((movie) => movie.genre_ids.includes(16))
  const animationMovies6 = data5?.results?.filter((movie) => movie.genre_ids.includes(16))

  //Horror Movies

  const horrorMovies = data?.results?.filter((movie) => movie.genre_ids.includes(27))
  const horrorMovies2 = data1?.results?.filter((movie) => movie.genre_ids.includes(27))
  const horrorMovies3 = data2?.results?.filter((movie) => movie.genre_ids.includes(27))
  const horrorMovies4 = data3?.results?.filter((movie) => movie.genre_ids.includes(27))
  const horrorMovies5 = data4?.results?.filter((movie) => movie.genre_ids.includes(27))
  const horrorMovies6 = data5?.results?.filter((movie) => movie.genre_ids.includes(27))


  //Crime

  const crimeMovies = data?.results?.filter((movie) => movie.genre_ids.includes(80))
  const crimeMovies2 = data1?.results?.filter((movie) => movie.genre_ids.includes(80))
  const crimeMovies3 = data2?.results?.filter((movie) => movie.genre_ids.includes(80))
  const crimeMovies4 = data3?.results?.filter((movie) => movie.genre_ids.includes(80))
  const crimeMovies5 = data4?.results?.filter((movie) => movie.genre_ids.includes(80))
  const crimeMovies6 = data5?.results?.filter((movie) => movie.genre_ids.includes(80))


  //Comedy

  const comedyMovies = data?.results?.filter((movie) => movie.genre_ids.includes(35))
  const comedyMovies2 = data1?.results?.filter((movie) => movie.genre_ids.includes(35))
  const comedyMovies3 = data2?.results?.filter((movie) => movie.genre_ids.includes(35))
  const comedyMovies4 = data3?.results?.filter((movie) => movie.genre_ids.includes(35))
  const comedyMovies5 = data4?.results?.filter((movie) => movie.genre_ids.includes(35))
  const comedyMovies6 = data5?.results?.filter((movie) => movie.genre_ids.includes(35))


  //Drama

  const dramaMovies = data?.results?.filter((movie) => movie.genre_ids.includes(18))
  const dramaMovies2 = data1?.results?.filter((movie) => movie.genre_ids.includes(18))
  const dramaMovies3 = data2?.results?.filter((movie) => movie.genre_ids.includes(18))
  const dramaMovies4 = data3?.results?.filter((movie) => movie.genre_ids.includes(18))
  const dramaMovies5 = data4?.results?.filter((movie) => movie.genre_ids.includes(18))
  const dramaMovies6 = data5?.results?.filter((movie) => movie.genre_ids.includes(18))


  //Romance

  const romanceMovies = data?.results?.filter((movie) => movie.genre_ids.includes(10749))
  const romanceMovies2 = data1?.results?.filter((movie) => movie.genre_ids.includes(10749))
  const romanceMovies3 = data2?.results?.filter((movie) => movie.genre_ids.includes(10749))
  const romanceMovies4 = data3?.results?.filter((movie) => movie.genre_ids.includes(10749))
  const romanceMovies5 = data4?.results?.filter((movie) => movie.genre_ids.includes(10749))
  const romanceMovies6 = data5?.results?.filter((movie) => movie.genre_ids.includes(10749))
  
  
  //Thriller

  const thrillerMovies = data?.results?.filter((movie) => movie.genre_ids.includes(53))
  const thrillerMovies2 = data1?.results?.filter((movie) => movie.genre_ids.includes(53))
  const thrillerMovies3 = data2?.results?.filter((movie) => movie.genre_ids.includes(53))
  const thrillerMovies4 = data3?.results?.filter((movie) => movie.genre_ids.includes(53))
  const thrillerMovies5 = data4?.results?.filter((movie) => movie.genre_ids.includes(53))
  const thrillerMovies6 = data5?.results?.filter((movie) => movie.genre_ids.includes(53))
  

  //Fantasy Movies

  const fantasyMovies = data?.results?.filter((movie) => movie.genre_ids.includes(14))
  const fantasyMovies2 = data1?.results?.filter((movie) => movie.genre_ids.includes(14))
  const fantasyMovies3 = data2?.results?.filter((movie) => movie.genre_ids.includes(14))
  const fantasyMovies4 = data3?.results?.filter((movie) => movie.genre_ids.includes(14))
  const fantasyMovies5 = data4?.results?.filter((movie) => movie.genre_ids.includes(14))
  const fantasyMovies6 = data5?.results?.filter((movie) => movie.genre_ids.includes(14))



  //Adventure

  const adventureMovies = data?.results?.filter((movie) => movie.genre_ids.includes(12))
  const adventureMovies2 = data1?.results?.filter((movie) => movie.genre_ids.includes(12))
  const adventureMovies3 = data2?.results?.filter((movie) => movie.genre_ids.includes(12))
  const adventureMovies4 = data3?.results?.filter((movie) => movie.genre_ids.includes(12))
  const adventureMovies5 = data4?.results?.filter((movie) => movie.genre_ids.includes(12))
  const adventureMovies6 = data5?.results?.filter((movie) => movie.genre_ids.includes(12))


  //Family 

  const familyMovies = data?.results?.filter((movie) => movie.genre_ids.includes(10751))
  const familyMovies2 = data1?.results?.filter((movie) => movie.genre_ids.includes(10751))
  const familyMovies3 = data2?.results?.filter((movie) => movie.genre_ids.includes(10751))
  const familyMovies4 = data3?.results?.filter((movie) => movie.genre_ids.includes(10751))
  const familyMovies5 = data4?.results?.filter((movie) => movie.genre_ids.includes(10751))
  const familyMovies6 = data5?.results?.filter((movie) => movie.genre_ids.includes(10751))


  //Mystery

  const mysteryMovies = data?.results?.filter((movie) => movie.genre_ids.includes(9648))
  const mysteryMovies2 = data1?.results?.filter((movie) => movie.genre_ids.includes(9648))
  const mysteryMovies3 = data2?.results?.filter((movie) => movie.genre_ids.includes(9648))
  const mysteryMovies4 = data3?.results?.filter((movie) => movie.genre_ids.includes(9648))
  const mysteryMovies5 = data4?.results?.filter((movie) => movie.genre_ids.includes(9648))
  const mysteryMovies6 = data5?.results?.filter((movie) => movie.genre_ids.includes(9648))


  //Western Movies

  // const westernMovies = data?.results?.filter((movie) => movie.genre_ids.includes(37))
  // const westernMovies2 = data1?.results?.filter((movie) => movie.genre_ids.includes(37))
  // const westernMovies3 = data2?.results?.filter((movie) => movie.genre_ids.includes(37))
  // const westernMovies4 = data3?.results?.filter((movie) => movie.genre_ids.includes(37))
  // const westernMovies5 = data4?.results?.filter((movie) => movie.genre_ids.includes(37))
  // const westernMovies6 = data5?.results?.filter((movie) => movie.genre_ids.includes(37))




  return (
    <div className='overflow-auto bg-[#264653]'>

     <SearchBarIcon />

        {/* Action Movies */}

        <div className='md:mx-14 lg:mx-44'>
        <h1 className='text-[#F5F5F5] font-bold inline-block sm:text-[24px] font-sans sm:tracking-[-0.41px] leading-[30px]  sm:mt-4 mx-2 sm:ml-16 sm:mb-4 mb-0 text-lg tracking-wide '>Action</h1>

        <div className='flex gap-4 sm:gap-8 mx-2 items-center sm:mx-16 overflow-y-hidden px-4 pb-4 pt-0 mt-2 overflow-x-scroll w-full sm:w-auto ' >

        {actionMovies.map((movie) => (

          <div 
            key={movie.id}
            className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
          >

            <NavLink to={`/movie/${movie.id}`}>

              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title}
                className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
              />

            </NavLink>
            

            <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
            <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>
          
          </div>
        ))}

        {actionMovies2?.map((movie) => (

          <div 
            key={movie.id}
            className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
          >

            <NavLink to={`/movie/${movie.id}`}>

              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title}
                className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
              />

            </NavLink>

          

            <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
            <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>
          
          </div>
        ))}

        {actionMovies3?.map((movie) => (

          <div 
            key={movie.id}
            className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
          >

            <NavLink to={`/movie/${movie.id}`}>

              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title}
                className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
              />

            </NavLink>

            

            <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
            <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>
          
          </div>
        ))}

        {actionMovies4?.map((movie) => (

        <div 
          key={movie.id}
          className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
        >

          <NavLink to={`/movie/${movie.id}`}>

            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title}
              className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
            />

          </NavLink>

          

          <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
          <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

        </div>
        ))}

        {actionMovies5?.map((movie) => (

        <div 
          key={movie.id}
          className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
        >

          <NavLink to={`/movie/${movie.id}`}>

            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title}
              className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
            />

          </NavLink>

          

          <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
          <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

        </div>
        ))}

        {actionMovies6?.map((movie) => (

        <div 
          key={movie.id}
          className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
        >

          <NavLink to={`/movie/${movie.id}`}>

            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title}
              className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
            />

          </NavLink>

          

          <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
          <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

        </div>
        ))}

        </div>

          {/* Science Fiction Movies */}

        <h1 className='text-[#F5F5F5] font-bold inline-block sm:text-[24px] font-sans sm:tracking-[-0.41px] leading-[30px]  sm:mt-4 mx-2 sm:ml-16 sm:mb-4 mb-0 text-lg tracking-wide'>SCI-FI</h1>

        <div className='flex gap-4 sm:gap-8 mx-2 items-center sm:mx-16 overflow-y-hidden px-4 pb-4 pt-0 mt-2 overflow-x-scroll w-full sm:w-auto '>

          {scienceFiction?.map((movie) => (

            <div 
              key={movie.id}
              className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer' 
            >

              <NavLink to={`/movie/${movie.id}`}>

              <img  
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
              />

              </NavLink>

            
              <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
              <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>
            
            </div>
          ))}

          {scienceFiction2?.map((movie) => (

            <div 
              key={movie.id}
              className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
            >

              <NavLink to={`/movie/${movie.id}`}>

                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                />

              </NavLink>

              

              <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
              <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

            </div>
          ))}

          {scienceFiction3?.map((movie) => (

            <div 
              key={movie.id}
              className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
            >

              <NavLink to={`/movie/${movie.id}`}>

                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                />

              </NavLink>

              <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
              <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>
          
            </div>
          ))}

          {scienceFiction4?.map((movie) => (

          <div 
            key={movie.id}
            className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
          >

            <NavLink to={`/movie/${movie.id}`}>

              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
              />

            </NavLink>

            <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
            <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

          </div>
          ))}

          {scienceFiction5?.map((movie) => (

          <div 
            key={movie.id}
            className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
          >

            <NavLink to={`/movie/${movie.id}`}>

              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
              />

            </NavLink>

            <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
            <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

          </div>
          ))}

          {scienceFiction6?.map((movie) => (

          <div 
            key={movie.id}
            className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
          >

            <NavLink to={`/movie/${movie.id}`}>

              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
              />

            </NavLink>

            <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
            <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

          </div>
          ))}

        </div>

          {/* Animation Movies */}

        <h1 className='text-[#F5F5F5] font-bold inline-block sm:text-[24px] font-sans sm:tracking-[-0.41px] leading-[30px]  sm:mt-4 mx-2 sm:ml-16 sm:mb-4 mb-0 text-lg tracking-wide'>Animation</h1>

        <div className='flex gap-4 sm:gap-8 mx-2 items-center sm:mx-16 overflow-y-hidden px-4 pb-4 pt-0 mt-2 overflow-x-scroll w-full sm:w-auto '>

          {animationMovies?.map((movie) => (

            <div 
              key={movie.id}
              className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
            >

              <NavLink to={`/movie/${movie.id}`}>

                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                  alt={movie.title} 
                  className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                />

              </NavLink>

              
              <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
              <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>
            
            </div>

          ))}

          {animationMovies2?.map((movie) => (

            <div 
              key={movie.id}
              className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
            >

              <NavLink to={`/movie/${movie.id}`}>

                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                  alt={movie.title} 
                  className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                />

              </NavLink>

          
              <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
              <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>
            
            </div>
          ))}

          {animationMovies3?.map((movie) => (

            <div 
              key={movie.id}
              className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
            >

              <NavLink to={`/movie/${movie.id}`}>

                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                  alt={movie.title} 
                  className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                />

              </NavLink>

              

              <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
              <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

            </div>
          ))}

          {animationMovies4?.map((movie) => (

          <div 
            key={movie.id}
            className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
          >

            <NavLink to={`/movie/${movie.id}`}>

              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
                className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
              />

            </NavLink>

            

            <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
            <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

          </div>
          ))}

          {animationMovies5?.map((movie) => (

          <div 
            key={movie.id}
            className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
          >

            <NavLink to={`/movie/${movie.id}`}>

              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
                className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
              />

            </NavLink>

            

            <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
            <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

          </div>
          ))}

          {animationMovies6?.map((movie) => (

          <div 
            key={movie.id}
            className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
          >

            <NavLink to={`/movie/${movie.id}`}>

              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
                className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
              />

            </NavLink>

            

            <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
            <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

          </div>
          ))}

        </div>

          {/* Horror Movies */}

          <h1 className='text-[#F5F5F5] font-bold inline-block sm:text-[24px] font-sans sm:tracking-[-0.41px] leading-[30px]  sm:mt-4 mx-2 sm:ml-16 sm:mb-4 mb-0 text-lg tracking-wide'>Horror</h1>

          <div className='flex gap-4 sm:gap-8 mx-2 items-center sm:mx-16 overflow-y-hidden px-4 pb-4 pt-0 mt-2 overflow-x-scroll w-full sm:w-auto '>

            {horrorMovies?.map((movie) => (

              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {horrorMovies2?.map((movie) => (
              
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                  alt={movie.title} 
                  className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {horrorMovies3?.map((movie) => (
              
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {horrorMovies4?.map((movie) => (
                        
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {horrorMovies5?.map((movie) => (
                                    
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {horrorMovies6?.map((movie) => (
                                              
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
              ))}

          </div>

          {/* Crime Movies */}

          <h1 className='text-[#F5F5F5] font-bold inline-block sm:text-[24px] font-sans sm:tracking-[-0.41px] leading-[30px]  sm:mt-4 mx-2 sm:ml-16 sm:mb-4 mb-0 text-lg tracking-wide'>Crime</h1>

          <div className='flex gap-4 sm:gap-8 mx-2 items-center sm:mx-16 overflow-y-hidden px-4 pb-4 pt-0 mt-2 overflow-x-scroll w-full sm:w-auto '>

            {crimeMovies?.map((movie) => (

              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {crimeMovies2?.map((movie) => (
              
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                  alt={movie.title} 
                  className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {crimeMovies3?.map((movie) => (
              
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {crimeMovies4?.map((movie) => (
                        
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {crimeMovies5?.map((movie) => (
                                    
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {crimeMovies6?.map((movie) => (
                                              
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
              ))}

          </div>

        {/* Comedy Movies */}

          <h1 className='text-[#F5F5F5] font-bold inline-block sm:text-[24px] font-sans sm:tracking-[-0.41px] leading-[30px]  sm:mt-4 mx-2 sm:ml-16 sm:mb-4 mb-0 text-lg tracking-wide'>Comedy</h1>

          <div className='flex gap-4 sm:gap-8 mx-2 items-center sm:mx-16 overflow-y-hidden px-4 pb-4 pt-0 mt-2 overflow-x-scroll w-full sm:w-auto '>

            {comedyMovies?.map((movie) => (

              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {comedyMovies2?.map((movie) => (
              
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                  alt={movie.title} 
                  className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {comedyMovies3?.map((movie) => (
              
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {comedyMovies4?.map((movie) => (
                        
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {comedyMovies5?.map((movie) => (
                                    
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {comedyMovies6?.map((movie) => (
                                              
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
              ))}

          </div>

          {/* Drama Movies */}

          <h1 className='text-[#F5F5F5] font-bold inline-block sm:text-[24px] font-sans sm:tracking-[-0.41px] leading-[30px]  sm:mt-4 mx-2 sm:ml-16 sm:mb-4 mb-0 text-lg tracking-wide'>Drama</h1>

          <div className='flex gap-4 sm:gap-8 mx-2 items-center sm:mx-16 overflow-y-hidden px-4 pb-4 pt-0 mt-2 overflow-x-scroll w-full sm:w-auto '>

            {dramaMovies?.map((movie) => (

              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {dramaMovies2?.map((movie) => (
              
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                  alt={movie.title} 
                  className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {dramaMovies3?.map((movie) => (
              
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {dramaMovies4?.map((movie) => (
                        
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {dramaMovies5?.map((movie) => (
                                    
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {dramaMovies6?.map((movie) => (
                                              
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
              ))}

          </div>

          
          {/* Romance Movies */}

          <h1 className='text-[#F5F5F5] font-bold inline-block sm:text-[24px] font-sans sm:tracking-[-0.41px] leading-[30px]  sm:mt-4 mx-2 sm:ml-16 sm:mb-4 mb-0 text-lg tracking-wide'>Romance</h1>

          <div className='flex gap-4 sm:gap-8 mx-2 items-center sm:mx-16 overflow-y-hidden px-4 pb-4 pt-0 mt-2 overflow-x-scroll w-full sm:w-auto '>

            {romanceMovies?.map((movie) => (

              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {romanceMovies2?.map((movie) => (
              
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                  alt={movie.title} 
                  className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {romanceMovies3?.map((movie) => (
              
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {romanceMovies4?.map((movie) => (
                        
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {romanceMovies5?.map((movie) => (
                                    
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {romanceMovies6?.map((movie) => (
                                              
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
              ))}

          </div>

          
          {/* Thriller Movies */}

          <h1 className='text-[#F5F5F5] font-bold inline-block sm:text-[24px] font-sans sm:tracking-[-0.41px] leading-[30px]  sm:mt-4 mx-2 sm:ml-16 sm:mb-4 mb-0 text-lg tracking-wide'>Thriller</h1>

          <div className='flex gap-4 sm:gap-8 mx-2 items-center sm:mx-16 overflow-y-hidden px-4 pb-4 pt-0 mt-2 overflow-x-scroll w-full sm:w-auto '>

            {thrillerMovies?.map((movie) => (

              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {thrillerMovies2?.map((movie) => (
              
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                  alt={movie.title} 
                  className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {thrillerMovies3?.map((movie) => (
              
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {thrillerMovies4?.map((movie) => (
                        
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {thrillerMovies5?.map((movie) => (
                                    
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {thrillerMovies6?.map((movie) => (
                                              
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
              ))}

          </div>

                
          {/* Fantasy Movies */}

          <h1 className='text-[#F5F5F5] font-bold inline-block sm:text-[24px] font-sans sm:tracking-[-0.41px] leading-[30px]  sm:mt-4 mx-2 sm:ml-16 sm:mb-4 mb-0 text-lg tracking-wide'>Fantasy</h1>

          <div className='flex gap-4 sm:gap-8 mx-2 items-center sm:mx-16 overflow-y-hidden px-4 pb-4 pt-0 mt-2 overflow-x-scroll w-full sm:w-auto '>

            {fantasyMovies?.map((movie) => (

              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {fantasyMovies2?.map((movie) => (
              
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                  alt={movie.title} 
                  className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {fantasyMovies3?.map((movie) => (
              
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {fantasyMovies4?.map((movie) => (
                        
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {fantasyMovies5?.map((movie) => (
                                    
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {fantasyMovies6?.map((movie) => (
                                              
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
              ))}

          </div>

                        
          {/* Adventure Movies */}

          <h1 className='text-[#F5F5F5] font-bold inline-block sm:text-[24px] font-sans sm:tracking-[-0.41px] leading-[30px]  sm:mt-4 mx-2 sm:ml-16 sm:mb-4 mb-0 text-lg tracking-wide'>Adventure</h1>

          <div className='flex gap-4 sm:gap-8 mx-2 items-center sm:mx-16 overflow-y-hidden px-4 pb-4 pt-0 mt-2 overflow-x-scroll w-full sm:w-auto '>

            {adventureMovies?.map((movie) => (

              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {adventureMovies2?.map((movie) => (
              
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                  alt={movie.title} 
                  className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {adventureMovies3?.map((movie) => (
              
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {adventureMovies4?.map((movie) => (
                        
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {adventureMovies5?.map((movie) => (
                                    
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {adventureMovies6?.map((movie) => (
                                              
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
              ))}

          </div>

                                
          {/* Family Movies */}

          <h1 className='text-[#F5F5F5] font-bold inline-block sm:text-[24px] font-sans sm:tracking-[-0.41px] leading-[30px]  sm:mt-4 mx-2 sm:ml-16 sm:mb-4 mb-0 text-lg tracking-wide'>Family</h1>

          <div className='flex gap-4 sm:gap-8 mx-2 items-center sm:mx-16 overflow-y-hidden px-4 pb-4 pt-0 mt-2 overflow-x-scroll w-full sm:w-auto '>

            {familyMovies?.map((movie) => (

              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {familyMovies2?.map((movie) => (
              
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                  alt={movie.title} 
                  className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {familyMovies3?.map((movie) => (
              
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {familyMovies4?.map((movie) => (
                        
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {familyMovies5?.map((movie) => (
                                    
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {familyMovies6?.map((movie) => (
                                              
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
              ))}

          </div>

                                        
          {/* Mystery Movies */}

          <h1 className='text-[#F5F5F5] font-bold inline-block sm:text-[24px] font-sans sm:tracking-[-0.41px] leading-[30px]  sm:mt-4 mx-2 sm:ml-16 sm:mb-4 mb-0 text-lg tracking-wide'>Mystery</h1>

          <div className='flex gap-4 sm:gap-8 mx-2 items-center sm:mx-16 overflow-y-hidden px-4 pb-4 pt-0 mt-2 overflow-x-scroll w-full sm:w-auto '>

            {mysteryMovies?.map((movie) => (

              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {mysteryMovies2?.map((movie) => (
              
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                  alt={movie.title} 
                  className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {mysteryMovies3?.map((movie) => (
              
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {mysteryMovies4?.map((movie) => (
                        
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {mysteryMovies5?.map((movie) => (
                                    
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {mysteryMovies6?.map((movie) => (
                                              
              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
              ))}

          </div>

                                                
          {/* Western Movies */}

          {/* <h1 className='text-[#F5F5F5] font-bold inline-block sm:text-[24px] font-sans sm:tracking-[-0.41px] leading-[30px]  sm:mt-4 mx-2 sm:ml-16 sm:mb-4 mb-0 text-lg tracking-wide'>Western</h1>

          <div className='flex gap-4 sm:gap-8 mx-2 items-center sm:mx-16 overflow-y-hidden px-4 pb-4 pt-0 mt-2 overflow-x-scroll w-full sm:w-auto '>

            {westernMovies?.map((movie) => (

              <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {westernMovies2?.map((movie) => (
              
              <div 
                key={movie.id}
                className='w-[200px] flex flex-col items-center  flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                  alt={movie.title} 
                  className='w-[200px] h-[250px] rounded-md shadow-md shadow-zinc-300'
                />

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {westernMovies3?.map((movie) => (
              
              <div 
                key={movie.id}
                className='w-[200px] flex flex-col items-center  flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='w-[200px] h-[250px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {westernMovies4?.map((movie) => (
                        
              <div 
                key={movie.id}
                className='w-[200px] flex flex-col items-center  flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='w-[200px] h-[250px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {westernMovies5?.map((movie) => (
                                    
              <div 
                key={movie.id}
                className='w-[200px] flex flex-col items-center  flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='w-[200px] h-[250px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
            ))}

            {westernMovies6?.map((movie) => (
                                              
              <div 
                key={movie.id}
                className='w-[200px] flex flex-col items-center  flex-shrink-0  hover:scale-110 cursor-pointer'
              >

                <NavLink to={`/movie/${movie.id}`}>

                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className='w-[200px] h-[250px] rounded-md shadow-md shadow-zinc-300'
                  />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

              </div>
              ))}

          </div> */}
        </div>
      
      
    </div>
  )
}

export default Movies