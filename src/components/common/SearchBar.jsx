import React from 'react'
import searchInput from '../images/bx-search.svg'



function SearchBar() {
  return (
    <div>
        <div className='m-4 flex items-center justify-center '>

            <input 
                type="search" 
                id='searchBar' 
                name='searchBar' 
                placeholder='Search for a movie'
                className='w-1/2 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-200'
            />
            
            <img 
                src={searchInput} 
                alt="Search Icon" 
                className='w-10 h-10 cursor-pointer ml-2 fill-slate-400'
            />
        </div>

        
    </div>
  )
}

export default SearchBar