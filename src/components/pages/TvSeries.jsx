import { useQuery } from '@tanstack/react-query'
import React from 'react'
import SearchBarIcon from '../common/SearchBarIcon'
import { NavLink } from 'react-router'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


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
    <div className='overflow-auto bg-[#264653]'>

        <SearchBarIcon />
        
            {/* Popular TV Series */}

        <div className='mx-4 md:mx-16 lg:mx-24' >

            {data?.results?.length > 0 && (
                 <>
                    <h1 className='text-[#F5F5F5] font-bold inline-block sm:text-[24px] font-sans sm:tracking-[-0.41px] leading-[30px]  sm:mt-4  sm:mb-4 mb-0 text-lg tracking-wide'>Popular Tv Series</h1><Carousel
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
                        itemClass="carousel-item-padding-2-px"
                    >

                        {data?.results?.map((movie) => (

                            <div
                                key={movie.id}
                                className='sm:w-[200px]  w-[100px] flex flex-col items-center pb-8 flex-shrink-0  hover:scale-110 cursor-pointer'
                            >

                                <NavLink to={`/movie/${movie.id}`}>

                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                        alt={movie.name}
                                        className='sm:w-[200px]  w-[100px] rounded-md shadow-md shadow-zinc-300' />

                                </NavLink>

                                <h2 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] leading-[24px] mt-2 ml-2 text-center h-10 '>{movie.name}</h2>
                                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.first_air_date}</h3>

                            </div>
                        ))}

                    </Carousel>
                  </>
            )}

            {/* Top Rated TV Series */}

            {data2?.results?.length > 0 && (
                <>
                     <h1 className='text-[#F5F5F5] font-bold inline-block sm:text-[24px] font-sans sm:tracking-[-0.41px] leading-[30px]  sm:mt-4 sm:mb-4 mb-0 text-lg tracking-wide'>Top Rated TV Series</h1>

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
                            <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.first_air_date}</h3>

                        </div>
                    ))}

                    </Carousel>
                </>
            )}

            {/* Airing Today TV Series */}

            {data3?.results?.length > 0 && (
                <>
                    <h1 className='text-[#F5F5F5] font-bold inline-block sm:text-[24px] font-sans sm:tracking-[-0.41px] leading-[30px]  sm:mt-4 sm:mb-4 mb-0 text-lg tracking-wide'>Airing Today</h1>

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
                                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.first_air_date}</h3>
                        
                            </div>
                        ))}

                        </Carousel>
                </>
            )}

            {/* On The Air TV Series */}

            {data4?.results?.length > 0 && (
                <>
                    <h1 className='text-[#F5F5F5] font-bold inline-block sm:text-[24px] font-sans sm:tracking-[-0.41px] leading-[30px]  sm:mt-4  sm:mb-4 mb-0 text-lg tracking-wide'>On The Air</h1>

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
                                <h3 className='text-[#F5F5F5] text-sm font-normal sm:text-[16px] font-sans tracking-[-0.41px] hidden sm:block leading-[24px] mt-0 m-2'>{movie.first_air_date}</h3>

                            </div>
                        ))}

                        </Carousel>
                </>
            )}

        </div>
        
    </div>
  )
}

export default TvSeries