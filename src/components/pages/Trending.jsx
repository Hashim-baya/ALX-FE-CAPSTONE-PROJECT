import React from 'react'
import SearchBar from '../common/SearchBar'
import { useQuery } from '@tanstack/react-query'


const apiKey = '95fbce6fd7f7a28cfc8577fc88fcac3f'

function Trending() {

    //All trending

    const {isLoading, data, error} = useQuery({
        queryKey: ['all trending'],
        queryFn: () => fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`)
        .then(res => res.json())
    })

  return (
    <div className='overflow-auto bg-[#461818]'>

        <SearchBar />

        {/* Weekly Trending */}

        <h1 className='text-[#F5F5F5] font-bold text-[24px] font-sans tracking-[-0.41px] leading-[30px] mt-4 ml-16 mb-4'>Weekly Trending</h1>
        <div>
            {data.results.map((movie) => (
                <div key={movie.id}>
                    <img  
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                        alt={movie.title}  
                    />
                    <h2>{movie.title}</h2>
                </div>
            ))}
        </div>
       
    </div>
  )
}

export default Trending