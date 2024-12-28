import React from 'react'
import { Link, NavLink } from 'react-router'
import Logo from './Logo'

function NavBar() {
  return (
    <div className='w-full '> 

        <div className='flex justify-between bg-red-200 min-w-full p-4 flex-col items-center container sm:flex-row md:flex-row'   >
           
           <Logo height='10' width='200' />

            <div className='flex justify-between items-center mt-4 gap-4 sm:mt-0 '>
                
                <NavLink to='/' className='text-red-400 font-extrabold text-center'>HOME</NavLink>
                <NavLink to='/trending'className='text-red-400 font-extrabold text-center'>TRENDING</NavLink>
                <NavLink to='/tvSeries'className='text-red-400 font-extrabold text-center'>TV SERIES</NavLink>
                <NavLink to='/movies'className='text-red-400 font-extrabold text-center'>MOVIES</NavLink>
                <NavLink to='/tvShows'className='text-red-400 font-extrabold text-center'>TV SHOWS</NavLink>
                <NavLink to='#' className='text-purple-800 font-extrabold rounded-sm border-4 p-2 bg-blue-200 border-blue-50 hover:bg-slate-100 cursor-pointer ml-4 text-center'>LOGOUT</NavLink>
               
                
            </div>

        </div>
    </div>
  )
}

export default NavBar