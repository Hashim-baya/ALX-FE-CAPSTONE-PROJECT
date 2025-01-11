import { useQuery } from '@tanstack/react-query'
import React from 'react'
import SearchBar from '../common/SearchBar'
import { NavLink } from 'react-router'


const apiKey = '95fbce6fd7f7a28cfc8577fc88fcac3f'


function TvSeries() {

    // Fetching Popular TV Series

    const {isLoading, error,data} = useQuery({
        queryKey: ['popular'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`)
        .then(res => res.json())
    })

    // Fetching Top Rated TV Series

    const {isLoading:isLoading2, error:error2, data:data2} = useQuery({
        queryKey: ['top_rated'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`)
        .then(res => res.json())
    })

    //Airing Today TV Series

    const {isLoading:isLoading3, error:error3, data:data3} = useQuery({
        queryKey: ['airing today'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}`)
        .then(res => res.json())
    })

    //On The Air TV Series

    const {isLoading:isLoading4, error:error4, data:data4} = useQuery({
        queryKey: ['on the air'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}`)
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
        
            {/* Popular TV Series */}

        <h1 className='text-[#F5F5F5] font-bold text-[24px] font-sans tracking-[-0.41px] leading-[30px] mt-4 ml-16 mb-4'>Popular Tv Series</h1>

        <div className='flex gap-8  items-center ml-16 mr-16 px-4 pb-4 overflow-x-scroll '>

            {data.results.map((movie) => (

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

                    <h2 className='text-[#F5F5F5] font-normal text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-start'>{movie.name}</h2> 
                    <h3 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-0 m-2'>{movie.first_air_date}</h3>          
                
                </div>
            ))}
            
        </div>

            {/* Top Rated TV Series */}

        <h1 className='text-[#F5F5F5] font-bold text-[24px] font-sans tracking-[-0.41px] leading-[30px] mt-4 ml-16 mb-4'>Top Rated TV Series</h1>

        <div className='flex gap-8  items-center ml-16 mr-16 px-4 pb-4 overflow-x-scroll '>

            {data2.results.map((movie) => (

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

                    <h2 className='text-[#F5F5F5] font-normal text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-start'>{movie.name}</h2>
                    <h3 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-0 m-2'>{movie.first_air_date}</h3>

                </div>
            ))}

        </div>

            {/* Airing Today TV Series */}

        <h1 className='text-[#F5F5F5] font-bold text-[24px] font-sans tracking-[-0.41px] leading-[30px] mt-4 ml-16 mb-4'>Airing Today</h1>

        <div className='flex gap-8  items-center ml-16 mr-16 px-4 pb-4 overflow-x-scroll '>

            {data3.results.map((movie) => (

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

                    <h2 className='text-[#F5F5F5] font-normal text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-start'>{movie.name}</h2>
                    <h3 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-0 m-2'>{movie.first_air_date}</h3>
               
                </div>
            ))}

        </div>

            {/* On The Air TV Series */}

        <h1 className='text-[#F5F5F5] font-bold text-[24px] font-sans tracking-[-0.41px] leading-[30px] mt-4 ml-16 mb-4'>On The Air</h1>

        <div className='flex gap-8  items-center ml-16 mr-16 px-4 pb-4 overflow-x-scroll '>

            {data4.results.map((movie) => (

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
                    
                    <h2 className='text-[#F5F5F5] font-normal text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-start'>{movie.name}</h2>
                    <h3 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-0 m-2'>{movie.first_air_date}</h3>

                </div>
            ))}
        </div>
    </div>
  )
}

export default TvSeries