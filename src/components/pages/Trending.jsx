import React from 'react'
import SearchBarIcon from '../common/SearchBarIcon'
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

    const {isLoading:isLoading8, data:data8, error:error8} = useQuery({
        queryKey: ['all trending5'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&page=6`)
        .then(res => res.json())
    })

    const {isLoading:isLoading9, data:data9, error:error9} = useQuery({
        queryKey: ['all trending6'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&page=7`)
        .then(res => res.json())
    })

    const {isLoading:isLoading10, data:data10, error:error10} = useQuery({
        queryKey: ['all trending7'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&page=8`)
        .then(res => res.json())
    })

    const {isLoading:isLoading11, data:data11, error:error11} = useQuery({
        queryKey: ['all trending8'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&page=9`)
        .then(res => res.json())
    })

    const {isLoading:isLoading12, data:data12, error:error12} = useQuery({
        queryKey: ['all trending9'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&page=10`)
        .then(res => res.json())
    })

    //TRENDING MOVIES

    const {data:data1, isLoading:isLoading1, error:error1} = useQuery({
        queryKey: ['trending movies'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`)
        .then(res => res.json())
    })

    const {data:data13, isLoading:isLoading13, error:error13} = useQuery({
        queryKey: ['trending movies1'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&page=2`)
        .then(res => res.json())
    })

    const {data:data14, isLoading:isLoading14, error:error14} = useQuery({
        queryKey: ['trending movies2'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&page=3`)
        .then(res => res.json())
    })

    const {data:data15, isLoading:isLoading15, error:error15} = useQuery({
        queryKey: ['trending movies3'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&page=4`)
        .then(res => res.json())
    })

    const {data:data16, isLoading:isLoading16, error:error16} = useQuery({
        queryKey: ['trending movies4'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&page=5`)
        .then(res => res.json())    
    })

    const {data:data17, isLoading:isLoading17, error:error17} = useQuery({
        queryKey: ['trending movies5'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&page=6`)
        .then(res => res.json())
    })

    const {data:data18, isLoading:isLoading18, error:error18} = useQuery({
        queryKey: ['trending movies6'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&page=7`)
        .then(res => res.json())
    })

    const {data:data19, isLoading:isLoading19, error:error19} = useQuery({
        queryKey: ['trending movies7'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&page=8`)
        .then(res => res.json())
    })

    const {data:data20, isLoading:isLoading20, error:error20} = useQuery({
        queryKey: ['trending movies8'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&page=9`)
        .then(res => res.json())
    })

    const {data:data21, isLoading:isLoading21, error:error21} = useQuery({
        queryKey: ['trending movies9'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&page=10`)
        .then(res => res.json())
    })

    const {data:data22, isLoading:isLoading22, error:error22} = useQuery({
        queryKey: ['trending movies10'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&page=11`)
        .then(res => res.json())
    })

    const {data:data23, isLoading:isLoading23, error:error23} = useQuery({
        queryKey: ['trending movies11'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&page=12`)
        .then(res => res.json())
    })

    const {data:data24, isLoading:isLoading24, error:error24} = useQuery({
        queryKey: ['trending movies12'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&page=13`)
        .then(res => res.json())
    })

    //TRENDING TV SHOWS

    const {data:data2, isLoading:isLoading2, error:error2} = useQuery({
        queryKey: ['trending tv shows'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`)
        .then(res => res.json())
    })

    const {data:data25, isLoading:isLoading25, error:error25} = useQuery({
        queryKey: ['trending tv shows1'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}&page=2`)
        .then(res => res.json())
    })

    const {data:data26, isLoading:isLoading26, error:error26} = useQuery({
        queryKey: ['trending tv shows2'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}&page=3`)
        .then(res => res.json())
    })

    const {data:data27, isLoading:isLoading27, error:error27} = useQuery({
        queryKey: ['trending tv shows3'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}&page=4`)
        .then(res => res.json())
    })

    const {data:data28, isLoading:isLoading28, error:error28} = useQuery({
        queryKey: ['trending tv shows4'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}&page=5`)
        .then(res => res.json())
    })

    const {data:data29, isLoading:isLoading29, error:error29} = useQuery({
        queryKey: ['trending tv shows5'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}&page=6`)
        .then(res => res.json())
    })

    const {data:data30, isLoading:isLoading30, error:error30} = useQuery({
        queryKey: ['trending tv shows6'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}&page=7`)
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
    <div className='overflow-auto bg-[#264653]'>

        <SearchBarIcon />

        {/* Weekly Trending */}

        <div className='md:mx-14 lg:mx-44'>

        <h1 className='text-[#F5F5F5] font-bold inline-block sm:text-[24px] font-sans sm:tracking-[-0.41px] leading-[30px]  sm:mt-4 mx-2 sm:ml-16 sm:mb-4 mb-0 text-lg tracking-wide'>Weekly Trending &#x1F525; </h1>

        <div className='flex gap-4 sm:gap-8 mx-2 items-center sm:mx-16 overflow-y-hidden px-4 pb-4 pt-0 mt-2 overflow-x-scroll w-full sm:w-auto '> 

            {data?.results?.map((movie) => (

                <div 
                    key={movie.id}
                    className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
                >

                    <NavLink to={`/movie/${movie.id}`}>

                        <img  
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                            alt={movie.name}  
                            className='sm:w-[200px]  w-[100px] rounded-md'
                        />

                    </NavLink>

                    <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.name || movie.title}</h2>
                
                </div>
            ))}

            {data4?.results?.map((movie) => (
                <div 
                    key={movie.id}
                    className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
            >

                <NavLink to={`/movie/${movie.id}`}>

                    <img  
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                        alt={movie.name}  
                        className='sm:w-[200px]  w-[100px] rounded-md'
                    />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.name || movie.title}</h2>
            
            </div>
            ))}

            {data5?.results?.map((movie) => (

                <div 
                    key={movie.id}
                    className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
            >

                <NavLink to={`/movie/${movie.id}`}>

                    <img  
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                        alt={movie.name}  
                        className='sm:w-[200px]  w-[100px] rounded-md'
                    />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.name || movie.title}</h2>
            
            </div>
            ))}

            {data6?.results?.map((movie) => (

                <div 
                    key={movie.id}
                    className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
                >

                <NavLink to={`/movie/${movie.id}`}>

                    <img  
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                        alt={movie.name}  
                        className='sm:w-[200px]  w-[100px] rounded-md'
                    />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.name || movie.title}</h2>

                </div>
            ))}

            {data7?.results?.map((movie) => (

            <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
            >

            <NavLink to={`/movie/${movie.id}`}>

                <img  
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                    alt={movie.name}  
                    className='sm:w-[200px]  w-[100px] rounded-md'
                />

            </NavLink>

            <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.name || movie.title}</h2>

            </div>
            ))}

            {data8?.results?.map((movie) => (

            <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
            >

            <NavLink to={`/movie/${movie.id}`}>

                <img  
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                    alt={movie.name}  
                    className='sm:w-[200px]  w-[100px] rounded-md'
                />

            </NavLink>

            <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.name || movie.title}</h2>

            </div>
            ))}

            {data9?.results?.map((movie) => (

            <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
            >

            <NavLink to={`/movie/${movie.id}`}>

                <img  
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                    alt={movie.name}  
                    className='sm:w-[200px]  w-[100px] rounded-md'
                />

            </NavLink>

            <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.name || movie.title}</h2>

            </div>
            ))}

            {data10?.results?.map((movie) => (

            <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
            >

            <NavLink to={`/movie/${movie.id}`}>

                <img  
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                    alt={movie.name}  
                    className='sm:w-[200px]  w-[100px] rounded-md'
                />

            </NavLink>

            <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.name || movie.title}</h2>

            </div>
            ))}

            {data11?.results?.map((movie) => (

            <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
            >

            <NavLink to={`/movie/${movie.id}`}>

                <img  
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                    alt={movie.name}  
                    className='sm:w-[200px]  w-[100px] rounded-md'
                />

            </NavLink>

            <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.name || movie.title}</h2>

            </div>
            ))}

            {data12?.results?.map((movie) => (

            <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
            >

            <NavLink to={`/movie/${movie.id}`}>

                <img  
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                    alt={movie.name}  
                    className='sm:w-[200px]  w-[100px] rounded-md'
                />

            </NavLink>

            <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.name || movie.title}</h2>

            </div>
            ))}

            

        </div>

        <h1 className='text-[#F5F5F5] font-bold inline-block sm:text-[24px] font-sans sm:tracking-[-0.41px] leading-[30px]  sm:mt-4 mx-2 sm:ml-16 sm:mb-4 mb-0 text-lg tracking-wide'>Trending Movies</h1>

        <div className='flex gap-4 sm:gap-8 mx-2 items-center sm:mx-16 overflow-y-hidden px-4 pb-4 pt-0 mt-2 overflow-x-scroll w-full sm:w-auto '>

            {data1?.results?.map((movie) => (

                <div 
                    key={movie.id}
                    className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
                >

                    <NavLink to={`/movie/${movie.id}`}>

                        <img 
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                            alt={movie.title} 
                            className='sm:w-[200px]  w-[100px] rounded-md'
                        />

                    </NavLink>

                    <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                    <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

                </div>
            ))}

            {data13?.results?.map((movie) => (

            <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
            >

                <NavLink to={`/movie/${movie.id}`}>

                    <img 
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                        alt={movie.title} 
                        className='sm:w-[200px]  w-[100px] rounded-md'
                    />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

            </div>
            ))}

            {data14?.results?.map((movie) => (

            <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
            >

                <NavLink to={`/movie/${movie.id}`}>

                    <img 
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                        alt={movie.title} 
                        className='sm:w-[200px]  w-[100px] rounded-md'
                    />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

            </div>
            ))}

            {data15?.results?.map((movie) => (

            <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
            >

                <NavLink to={`/movie/${movie.id}`}>

                    <img 
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                        alt={movie.title} 
                        className='sm:w-[200px]  w-[100px] rounded-md'
                    />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

            </div>
            ))}

            {data16?.results?.map((movie) => (

            <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
            >

                <NavLink to={`/movie/${movie.id}`}>

                    <img 
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                        alt={movie.title} 
                        className='sm:w-[200px]  w-[100px] rounded-md'
                    />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

            </div>
            ))}

            {data17?.results?.map((movie) => (

            <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
            >

                <NavLink to={`/movie/${movie.id}`}>

                    <img 
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                        alt={movie.title} 
                        className='sm:w-[200px]  w-[100px] rounded-md'
                    />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

            </div>
            ))}

            {data18?.results?.map((movie) => (

            <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
            >

                <NavLink to={`/movie/${movie.id}`}>

                    <img 
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                        alt={movie.title} 
                        className='sm:w-[200px]  w-[100px] rounded-md'
                    />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

            </div>
            ))}

            {data19?.results?.map((movie) => (

            <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
            >

                <NavLink to={`/movie/${movie.id}`}>

                    <img 
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                        alt={movie.title} 
                        className='sm:w-[200px]  w-[100px] rounded-md'
                    />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

            </div>
            ))}

            {data20?.results?.map((movie) => (

            <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
            >

                <NavLink to={`/movie/${movie.id}`}>

                    <img 
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                        alt={movie.title} 
                        className='sm:w-[200px]  w-[100px] rounded-md'
                    />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

            </div>
            ))}

            {data21?.results?.map((movie) => (

            <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
            >

                <NavLink to={`/movie/${movie.id}`}>

                    <img 
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                        alt={movie.title} 
                        className='sm:w-[200px]  w-[100px] rounded-md'
                    />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

            </div>
            ))}

            {data22?.results?.map((movie) => (

            <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
            >

                <NavLink to={`/movie/${movie.id}`}>

                    <img 
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                        alt={movie.title} 
                        className='sm:w-[200px]  w-[100px] rounded-md'
                    />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

            </div>
            ))}

            {data23?.results?.map((movie) => (

            <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
            >

                <NavLink to={`/movie/${movie.id}`}>

                    <img 
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                        alt={movie.title} 
                        className='sm:w-[200px]  w-[100px] rounded-md'
                    />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

            </div>
            ))}

            {data24?.results?.map((movie) => (

            <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
            >

                <NavLink to={`/movie/${movie.id}`}>

                    <img 
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                        alt={movie.title} 
                        className='sm:w-[200px]  w-[100px] rounded-md'
                    />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

            </div>
            ))}

        </div>

        <h1 className='text-[#F5F5F5] font-bold inline-block sm:text-[24px] font-sans sm:tracking-[-0.41px] leading-[30px]  sm:mt-4 mx-2 sm:ml-16 sm:mb-4 mb-0 text-lg tracking-wide'>Trending TV Shows</h1>

        <div className='flex gap-4 sm:gap-8 mx-2 items-center sm:mx-16 overflow-y-hidden px-4 pb-4 pt-0 mt-2 overflow-x-scroll w-full sm:w-auto '>

            {data2?.results?.map((movie) => (

                <div 
                    key={movie.id}
                    className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'  
                >

                    <NavLink to={`/movie/${movie.id}`}>

                    <img 
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                        alt={movie.title} 
                        className='sm:w-[200px]  w-[100px] rounded-md'
                    />

                    </NavLink>

                    <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.name}</h2>
                    
                </div>
            ))}

            {data25?.results?.map((movie) => (

            <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'  
            >

                <NavLink to={`/movie/${movie.id}`}>

                <img 
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md'
                />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.name}</h2>
                
            </div>
            ))}

            {data26?.results?.map((movie) => (

            <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'  
            >

                <NavLink to={`/movie/${movie.id}`}>

                <img 
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md'
                />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.name}</h2>
                
            </div>
            ))}

            {data27?.results?.map((movie) => (

            <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'  
            >

                <NavLink to={`/movie/${movie.id}`}>

                <img 
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md'
                />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.name}</h2>
                
            </div>
            ))}

            {data28?.results?.map((movie) => (

            <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'  
            >

                <NavLink to={`/movie/${movie.id}`}>

                <img 
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md'
                />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.name}</h2>
                
            </div>
            ))}

            {data29?.results?.map((movie) => (

            <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'  
            >

                <NavLink to={`/movie/${movie.id}`}>

                <img 
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md'
                />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.name}</h2>
                
            </div>
            ))}

            {data30?.results?.map((movie) => (

            <div 
                key={movie.id}
                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'  
            >

                <NavLink to={`/movie/${movie.id}`}>

                <img 
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                    alt={movie.title} 
                    className='sm:w-[200px]  w-[100px] rounded-md'
                />

                </NavLink>

                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.name}</h2>
                
            </div>
            ))}

        </div>

        <h1 className='text-[#F5F5F5] font-bold inline-block sm:text-[24px] font-sans sm:tracking-[-0.41px] leading-[30px]  sm:mt-4 mx-2 sm:ml-16 sm:mb-4 mb-0 text-lg tracking-wide'>Trending People</h1>

        <div className='flex gap-4 sm:gap-8 mx-2 items-center sm:mx-16 overflow-y-hidden px-4 pb-4 pt-0 mt-2 overflow-x-scroll w-full sm:w-auto '>

            {data3?.results?.map((movie) => (
                
                <div 
                    key={movie.id}
                    className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
                >

                    <NavLink to={`/movie/${movie.id}`}>

                    <img 
                        src={`https://image.tmdb.org/t/p/w500/${movie.profile_path}`} 
                        alt={movie.name} 
                        className='sm:w-[200px]  w-[100px] rounded-md'
                    />

                    </NavLink>

                    <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.name}</h2>
                    <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.known_for_department}</h3>
            
                </div>
            ))}
        </div>

        </div>
        
       
    </div>
  )
}

export default Trending