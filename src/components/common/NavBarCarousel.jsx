import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useQuery } from '@tanstack/react-query';
import { ButtonGroup } from './CarouselDots';
import { NavLink } from 'react-router';

const apiKey = '95fbce6fd7f7a28cfc8577fc88fcac3f'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  


function NavBarCarousel() {

    const {isLoading, data, error} = useQuery({
        queryKey: ['all trending20'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`)
        .then(res => res.json())
    })

    const {isLoading:isLoading4, data:data4, error:error4} = useQuery({
        queryKey: ['all trending21'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&page=2`)
        .then(res => res.json())
    })

    const {isLoading:isLoading5, data:data5, error:error5} = useQuery({
        queryKey: ['all trending22'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&page=3`)
        .then(res => res.json())
    })

    const {isLoading:isLoading6, data:data6, error:error6} = useQuery({
        queryKey: ['all trending23'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&page=4`)
        .then(res => res.json())
    })

    const {isLoading:isLoading7, data:data7, error:error7} = useQuery({
        queryKey: ['all trending24'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&page=5`)
        .then(res => res.json())
    })



  return (
    <div className='relative w-[100%] h-[400px] sm:h-[600px] md:h-[600px] lg:h-[700px] bg-slate-500'>

        <Carousel 
            responsive={responsive}
            showDots={false}
            autoPlay={true}
            autoPlaySpeed={3000}
            infinite={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
        >
            {data?.results?.map((movie) => (
                <div key={movie.id}>

                    <NavLink to={`/movie/${movie.id}`}>
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                            alt={movie.title} 
                            className='relative w-[100%] h-[400px] sm:h-[600px] md:h-[600px] lg:h-[700px]'
                        />
                    </NavLink>
                   
                </div>
            ))}

            {data4?.results?.map((movie) => (
                <div key={movie.id}>

                    <NavLink to={`/movie/${movie.id}`}>
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                            alt={movie.title} 
                            className='relative w-[100%] h-[400px] sm:h-[600px] md:h-[600px] lg:h-[700px]'
                        />
                    </NavLink>
                    
                </div>
            ))}

            {data5?.results?.map((movie) => (
                <div key={movie.id}>

                    <NavLink to={`/movie/${movie.id}`}>
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                            alt={movie.title} 
                            className='relative w-[100%] h-[400px] sm:h-[600px] md:h-[600px] lg:h-[700px]'
                        />
                    </NavLink>
                   
                </div>
            ))}

            {data6?.results?.map((movie) => (
                <div key={movie.id}>

                    <NavLink to={`/movie/${movie.id}`}>
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                            alt={movie.title} 
                            className='relative w-[100%] h-[400px] ssm:h-[600px] md:h-[600px] lg:h-[700px]'
                        />
                    </NavLink>
                   
                </div>
            ))}

            {data7?.results?.map((movie) => (
                <div key={movie.id}>

                    <NavLink to={`/movie/${movie.id}`}>
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                            alt={movie.title} 
                            className='relative w-[100%] h-[400px] sm:h-[600px] md:h-[600px] lg:h-[700px]'
                        />
                    </NavLink>
                   
                </div>
            ))}
        </Carousel>;

    </div>
  )
}

export default NavBarCarousel