import React from 'react'

import { useQuery } from '@tanstack/react-query'
import { NavLink } from 'react-router'
import SearchBarIcon from '../common/SearchBarIcon'
import NavBarCarousel from '../common/NavBarCarousel'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


//const apiKey1 = process.env.REACT_APP_API_KEY
const apiKey = '95fbce6fd7f7a28cfc8577fc88fcac3f'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1530 },
      items: 6,
      slidesToSlide: 5
    },
    largeDesktop: {
      breakpoint: { max: 1530, min: 1194 },
      items: 5,
      slidesToSlide: 4,
    },
    desktop: {
      breakpoint: { max: 1194, min: 990 },
      items: 4,
      slidesToSlide: 3
    },
    largeTablet: {
      breakpoint: { max:990, min: 670 },
      items: 3,
      slidesToSlide: 2
    },
    tablet: {
      breakpoint: { max: 670, min: 464 },
      items: 4,
      slidesToSlide: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 2
    }
  };


function HomePage() {

    //Search for movies

    const {isLoading, error, data} = useQuery({
        queryKey:['movies'], 
        queryFn:() => fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => data)
    })

    const {data:data1, isLoading:isLoading1, error:error1} = useQuery({
        queryKey:['search'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=2`)
        .then(res => res.json())
    })

    const {data:data5, isLoading:isLoading5, error:error5} = useQuery({
        queryKey: ['search1'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=3`)
        .then(res => res.json())
    })

    const {data:data6, isLoading:isLoading6, error:error6} = useQuery({
        queryKey: ['search2'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=4`)
        .then(res => res.json())
    })

    const {data:data7, isLoading:isLoading7, error:error7} = useQuery({
        queryKey: ['search3'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=5`)
        .then(res => res.json())
    })

    //Get trending movies

    const {isLoading:isLoading2, error:error2, data:data2} = useQuery({
        queryKey:['trending'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`)
        .then(res => res.json())
    })

    const {data:data8, isLoading:isLoading8, error:error8} = useQuery({
        queryKey:['trending1'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&page=2`)
        .then(res => res.json())
    })

    const {data:data9, isLoading:isLoading9, error:error9} = useQuery({
        queryKey:['trending2'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&page=3`)
        .then(res => res.json())
    })

    const {data:data10, isLoading:isLoading10, error:error10} = useQuery({
        queryKey:['trending3'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&page=4`)
        .then(res => res.json())
    })

    const {data:data11, isLoading:isLoading11, error:error11} = useQuery({
        queryKey:['trending4'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&page=5`)
        .then(res => res.json())
    })

    //TV Series

    const {data:data3, isLoading:isLoading3, error:error3} = useQuery({
        queryKey:['tv series'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`)
        .then(res => res.json())
    })

    const {data:data12, isLoading:isLoading12, error:error12} = useQuery({
        queryKey:['tv series1'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&page=2`)
        .then(res => res.json())
    })

    const {data:data13, isLoading:isLoading13, error:error13} = useQuery({
        queryKey:['tv series2'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&page=3`)
        .then(res => res.json())
    })

    const {data:data14, isLoading:isLoading14, error:error14} = useQuery({
        queryKey:['tv series3'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&page=4`)
        .then(res => res.json())
    })

    const {data:data15, isLoading:isLoading15, error:error15} = useQuery({
        queryKey:['tv series4'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&page=5`)
        .then(res => res.json())
    })

    //TV Shows

    const {data:data4, isLoading:isLoading4, error:error4} = useQuery({
        queryKey:['tv shows'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}`)
        .then(res => res.json())
    })

    const {isLoading:isLoading16, error:error16, data:data16} = useQuery({
        queryKey:['search4'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&page=2`)
        .then(res => res.json())
    })

    const {isLoading:isLoading17, error:error17, data:data17} = useQuery({
        queryKey:['search5'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&page=3`)
        .then(res => res.json())
    })

    const {isLoading:isLoading18, error:error18, data:data18} = useQuery({
        queryKey:['search6'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&page=4`)
        .then(res => res.json())
    })
    
    if(isLoading){
        return <div className='text-[#F5F5F5] font-sans font-semibold animate-ping'>Loading...</div>
    }

    if(error){
        return <div>Error: {error.message}</div>
    }

  return (
    <div className='overflow-auto bg-[#264653]'>

      <SearchBarIcon />


            {/* Trending Movies */}

            <div className='mx-4 md:mx-16 lg:mx-24'>

            {data2?.results?.length > 0 && (
                <>
                    <h1 className='text-[#F5F5F5] font-bold inline-block sm:text-[24px] font-sans sm:tracking-[-0.41px] leading-[30px]  sm:mt-4 sm:mb-4 mb-0 text-lg tracking-wide'>Trending</h1>

                    <Carousel
                    responsive={responsive}
                    showDots={false}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    infinite={true}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    dotListClass="custom-dot-list-style"
                    containerClass="carousel-container"
                    >

                    {data2?.results?.map((movie) => (

                            <div 
                                key={movie.id}
                                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer '
                            >

                            <NavLink to={`/movie/${movie.id}`}>

                                <img 
                                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                                        alt={movie.title} 
                                        className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                                />

                            </NavLink>

                            

                                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

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
                                    alt={movie.title} 
                                    className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                            />

                        </NavLink>

                        

                            <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                            <h3  className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

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
                                alt={movie.title} 
                                className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                        />

                    </NavLink>

                    

                        <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                        <h3  className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

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
                                alt={movie.title} 
                                className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                        />

                    </NavLink>

                    

                        <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                        <h3   className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

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
                                alt={movie.title} 
                                className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                        />

                    </NavLink>

                    

                        <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                        <h3  className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

                    </div>

                    ))}

                    </Carousel>
                </>
            )}
                
                        {/* Movies */}

                        {data?.results?.length > 0 && (
                            <>
                                <h1 className='text-[#F5F5F5] font-bold inline-block sm:text-[24px] font-sans sm:tracking-[-0.41px] leading-[30px]  sm:mt-4 sm:mb-4 mb-0 text-lg tracking-wide'>Movies</h1>

                                <Carousel
                                responsive={responsive}
                                showDots={false}
                                autoPlay={true}
                                autoPlaySpeed={3000}
                                infinite={true}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                dotListClass="custom-dot-list-style"
                                containerClass="carousel-container"
                                        >
                                {data?.results?.map((movie) => (

                                <div 
                                key={movie.id}
                                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
                                >

                                <NavLink to={`/movie/${movie.id}`}>

                                    <img 
                                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                                        alt={movie.title} 
                                        className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                                    />

                                </NavLink>


                                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                                <h3  className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

                                </div>
                                ))}

                                {data1?.results?.map((movie) => (

                                <div 
                                key={movie.id}
                                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
                                >

                                <NavLink to={`/movie/${movie.id}`}>

                                    <img 
                                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                                        alt={movie.title} 
                                        className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                                    />

                                </NavLink>


                                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                                <h3  className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

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
                                        alt={movie.title} 
                                        className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                                    />

                                </NavLink>


                                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                                <h3  className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

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
                                        alt={movie.title} 
                                        className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                                    />

                                </NavLink>


                                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                                <h3  className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

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
                                        alt={movie.title} 
                                        className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                                    />

                                </NavLink>


                                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.title}</h2>
                                <h3  className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

                                </div>
                                ))}

                                </Carousel>
                            </>
                        )}

                    {/* TV Series */}

                    {data3?.results?.length > 0 && (
                        <>
                            <h1 className='text-[#F5F5F5] font-bold inline-block sm:text-[24px] font-sans sm:tracking-[-0.41px] leading-[30px]  sm:mt-4 sm:mb-4 mb-0 text-lg tracking-wide'>TV Series</h1>

                            <Carousel
                            responsive={responsive}
                            showDots={false}
                            autoPlay={true}
                            autoPlaySpeed={3000}
                            infinite={true}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            dotListClass="custom-dot-list-style"
                            containerClass="carousel-container"
                            >

                            {data3?.results?.map((movie) => (

                                <div
                                    key={movie.id}
                                    className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'   
                                >

                                    <NavLink to={`/movie/${movie.id}`}>

                                        <img 
                                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                                            alt={movie.name} 
                                            className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                                        />

                                    </NavLink>
                                    
                                    <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.name}</h2>
                                    <h3  className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

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
                                        className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                                    />

                                </NavLink>
                                
                                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.name}</h2>
                                <h3  className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

                            </div>
                            ))}

                            {data13?.results?.map((movie) => (

                            <div
                                key={movie.id}
                                className='sm:w-[200px]  w-[100px] flex flex-col items-center  flex-shrink-0  hover:scale-110 cursor-pointer'    
                            >

                                <NavLink to={`/movie/${movie.id}`}>

                                    <img 
                                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                                        alt={movie.name} 
                                        className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                                    />

                                </NavLink>
                                
                                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.name}</h2>
                                <h3  className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

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
                                        alt={movie.name} 
                                        className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                                    />

                                </NavLink>
                                
                                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.name}</h2>
                                <h3  className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

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
                                        alt={movie.name} 
                                        className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                                    />

                                </NavLink>
                                
                                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.name}</h2>
                                <h3  className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>

                            </div>
                            ))}

                            </Carousel>
                        </>
                    )}

                    {/* TV Shows */}

                    {data4?.results?.length > 0 && (
                        <>
                            <h1 className='text-[#F5F5F5] font-bold inline-block sm:text-[24px] font-sans sm:tracking-[-0.41px] leading-[30px]  sm:mt-4 sm:mb-4 mb-0 text-lg tracking-wide'>TV Shows</h1>

                            <Carousel
                                responsive={responsive}
                                showDots={false}
                                autoPlay={true}
                                autoPlaySpeed={3000}
                                infinite={true}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                dotListClass="custom-dot-list-style"
                                containerClass="carousel-container"
                            >

                                {data4?.results?.map((movie) => (
                                        
                                    <div
                                        key={movie.id}
                                        className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'    
                                    >

                                        <NavLink to={`/movie/${movie.id}`}>
                                        
                                            <img 
                                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                                                alt={movie.name} 
                                                className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                                            />

                                        </NavLink>
                                        
                                        <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.name}</h2>
                                        <h3  className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>
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
                                                alt={movie.name} 
                                                className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                                            />

                                        </NavLink>
                                        
                                        <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.name}</h2>
                                        <h3  className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>
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
                                                alt={movie.name} 
                                                className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                                            />

                                        </NavLink>
                                        
                                        <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.name}</h2>
                                        <h3  className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.release_date}</h3>
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
                                                alt={movie.name} 
                                                className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300'
                                            />

                                        </NavLink>
                                        
                                        <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.name}</h2>
                                        <h3  className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.first_air_date}</h3>
                                    </div>
                                ))}

                            </Carousel>
                        </>
                    )}
                
            </div>
    </div>
  )
}

export default HomePage