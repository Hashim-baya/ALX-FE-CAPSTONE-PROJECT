import React from 'react'
import SearchBar from '../common/SearchBar'
import { useQuery } from '@tanstack/react-query'
import { NavLink } from 'react-router'

//const apiKey1 = process.env.REACT_APP_API_KEY
const apiKey = '95fbce6fd7f7a28cfc8577fc88fcac3f'


function HomePage() {

    //Search for movies

    const {isLoading, error, data} = useQuery({
        queryKey:['movies'], 
        queryFn:() => fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => data)
},)

    //Get trending movies

    const {isLoading:isLoading2, error:error2, data:data2} = useQuery({
        queryKey:['trending'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`)
        .then(res => res.json())
    })

    //TV Series

    const {data:data3, isLoading:isLoading3, error:error3} = useQuery({
        queryKey:['tv series'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`)
        .then(res => res.json())
    })

    //TV Shows

    const {data:data4, isLoading:isLoading4, error:error4} = useQuery({
        queryKey:['tv shows'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}`)
        .then(res => res.json())
    })
    
    if(isLoading){
        return <div>Loading...</div>
    }

    if(error){
        return <div>Error: {error.message}</div>
    }

  return (
    <div className='overflow-auto bg-[#461818]'>

        <SearchBar />

            {/* Trending Movies */}

        <h1 className='text-[#F5F5F5] font-bold text-[24px] font-sans tracking-[-0.41px] leading-[30px] mt-4 ml-16 mb-4'>Trending</h1>

        <div className='flex gap-8  items-center ml-16 mr-16 px-4 pb-4 overflow-x-scroll '  >

            {data2?.results?.map((movie) => (

                    <div 
                        key={movie.id}
                        className='w-[200px] flex flex-col items-center  flex-shrink-0  hover:scale-110 cursor-pointer'
                    >

                    <NavLink to={`/movie/${movie.id}`}>

                        <img 
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                                alt={movie.title} 
                                className='w-[200px] h-[250px] rounded-md'
                        />

                    </NavLink>

                       

                        <h2 className='text-[#F5F5F5] font-normal text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-start'>{movie.title}</h2>
                        <h3 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

                    </div>

                ))}
        </div>
       
                {/* Movies */}

        <h1 className='text-[#F5F5F5] font-bold text-[24px] font-sans tracking-[-0.41px] leading-[30px] mt-4 ml-16 mb-4 '>Movies</h1>

        <div className='flex gap-8  items-center ml-16 mr-16 px-4 pb-4  overflow-x-scroll'>

            {data?.results?.map((movie) => (

            <div 
                key={movie.id}
               className='w-[200px] flex flex-col items-center  flex-shrink-0  hover:scale-110 cursor-pointer'
            >

                <NavLink to={`/movie/${movie.id}`}>

                    <img 
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                        alt={movie.title} 
                        className='w-[200px] h-[250px] rounded-md'
                    />

                </NavLink>

               
                <h2 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2'>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

            </div>
            ))}

        </div>

             {/* TV Series */}

        <h1 className='text-[#F5F5F5] font-bold text-[24px] font-sans tracking-[-0.41px] leading-[30px] mt-4 ml-16 mb-4 '>TV SERIES</h1>

        <div className='flex gap-8  items-center ml-16 mr-16 px-4 pb-4  overflow-x-scroll'>

            {data3?.results?.map((movie) => (

                <div
                     key={movie.id}
                     className='w-[200px] flex flex-col items-center  flex-shrink-0  hover:scale-110 cursor-pointer'     
                >
          
                    <NavLink to={`/movie/${movie.id}`}>

                        <img 
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                            alt={movie.name} 
                            className='w-[200px] h-[250px] rounded-md'
                        />

                    </NavLink>
                    
                    <h2 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2'>{movie.name}</h2>
                    <h3 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

                </div>
            ))}

        </div>

        <h1 className='text-[#F5F5F5] font-bold text-[24px] font-sans tracking-[-0.41px] leading-[30px] mt-4 ml-16 mb-4 '>TV SHOWS</h1>
        
        <div className='flex gap-8  items-center ml-16 mr-16 px-4 pb-4  overflow-x-scroll'>

            {data4?.results?.map((movie) => (
                    
                <div
                    key={movie.id}
                    className='w-[200px] flex flex-col items-center  flex-shrink-0  hover:scale-110 cursor-pointer'     
                >
           
                    <NavLink to={`/movie/${movie.id}`}>
                    
                        <img 
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                            alt={movie.name} 
                            className='w-[200px] h-[250px] rounded-md'
                        />

                    </NavLink>
                    
                    <h2 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2'>{movie.name}</h2>
                    <h3 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-0 m-2'>{movie.release_date}</h3>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default HomePage