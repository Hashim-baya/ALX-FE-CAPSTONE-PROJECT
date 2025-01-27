import React from 'react'
import SearchBar from '../common/SearchBar'
import { useQuery } from '@tanstack/react-query'
import { NavLink } from 'react-router'


const apiKey = '95fbce6fd7f7a28cfc8577fc88fcac3f'

function Trending() {

    //All trending

    const {isLoading, data, error} = useQuery({
        queryKey: ['all trending'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`)
        .then(res => res.json())
    })

    const {isLoading:isLoading4, data:data4, error:error4} = useQuery({
        queryKey: ['all trending1'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&page=2`)
        .then(res => res.json())
    })

    const {isLoading:isLoading5, data:data5, error:error5} = useQuery({
        queryKey: ['all trending2'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&page=3`)
        .then(res => res.json())
    })

    const {isLoading:isLoading6, data:data6, error:error6} = useQuery({
        queryKey: ['all trending3'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&page=4`)
        .then(res => res.json())
    })

    const {isLoading:isLoading7, data:data7, error:error7} = useQuery({
        queryKey: ['all trending4'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&page=5`)
        .then(res => res.json())
    })

    //TRENDING MOVIES

    const {data:data1, isLoading:isLoading1, error:error1} = useQuery({
        queryKey: ['trending movies'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`)
        .then(res => res.json())
    })

    //TRENDING TV SHOWS

    const {data:data2, isLoading:isLoading2, error:error2} = useQuery({
        queryKey: ['trending tv shows'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`)
        .then(res => res.json())
    })

    //Trending People 

    const {data:data3, isLoading:isLoading3, error:error3} = useQuery({
        queryKey: ['trending people'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/person/day?api_key=${apiKey}`)
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

        {/* Weekly Trending */}

        <h1 className='text-[#F5F5F5] font-bold text-[24px] font-sans tracking-[-0.41px] leading-[30px] mt-4 ml-16 mb-4'>Weekly Trending &#x1F525; </h1>

        <div className='flex gap-8  items-center ml-16 mr-16 px-4 pb-4 overflow-x-scroll'> 

            {data?.results?.map((movie) => (

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

                    <h2 className='text-[#F5F5F5] font-normal text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-start'>{movie.name || movie.title}</h2>
                
                </div>
            ))}

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

                 <h2 className='text-[#F5F5F5] font-normal text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-start'>{movie.name || movie.title}</h2>
             
             </div>
            ))}

            {data5?.results?.map((movie) => (

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

                 <h2 className='text-[#F5F5F5] font-normal text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-start'>{movie.name || movie.title}</h2>
             
             </div>
            ))}

            {data6?.results?.map((movie) => (

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

                <h2 className='text-[#F5F5F5] font-normal text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-start'>{movie.name || movie.title}</h2>

                </div>
            ))}

            {data7?.results?.map((movie) => (

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

            <h2 className='text-[#F5F5F5] font-normal text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-start'>{movie.name || movie.title}</h2>

            </div>
            ))}

        </div>

        <h1 className='text-[#F5F5F5] font-bold text-[24px] font-sans tracking-[-0.41px] leading-[30px] mt-4 ml-16 mb-4'>Trending Movies</h1>

        <div className='flex gap-8  items-center ml-16 mr-16 px-4 pb-4 overflow-x-scroll'>

            {data1?.results?.map((movie) => (

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

        <h1 className='text-[#F5F5F5] font-bold text-[24px] font-sans tracking-[-0.41px] leading-[30px] mt-4 ml-16 mb-4'>Trending TV Shows</h1>

        <div className='flex gap-8  items-center ml-16 mr-16 px-4 pb-4 overflow-x-scroll'>

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

                    <h2 className='text-[#F5F5F5] font-normal text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-start'>{movie.name}</h2>
                    
                </div>
            ))}
        </div>

        <h1 className='text-[#F5F5F5] font-bold text-[24px] font-sans tracking-[-0.41px] leading-[30px] mt-4 ml-16 mb-4'>Trending People</h1>

        <div className='flex gap-8  items-center ml-16 mr-16 px-4 pb-4 overflow-x-scroll'>

            {data3?.results?.map((movie) => (
                
                <div 
                    key={movie.id}
                    className='w-[200px] flex flex-col items-center  flex-shrink-0  hover:scale-110 cursor-pointer'
                >

                    <NavLink to={`/movie/${movie.id}`}>

                    <img 
                        src={`https://image.tmdb.org/t/p/w500/${movie.profile_path}`} 
                        alt={movie.name} 
                        className='w-[200px] h-[250px] rounded-md'
                    />

                    </NavLink>

                    <h2 className='text-[#F5F5F5] font-normal text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-start'>{movie.name}</h2>
                    <h3 className='text-[#F5F5F5] font-semibold text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-0 m-2'>{movie.known_for_department}</h3>
               
                </div>
            ))}
        </div>
       
    </div>
  )
}

export default Trending