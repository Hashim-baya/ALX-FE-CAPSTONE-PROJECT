import React from 'react'
import { NavLink } from 'react-router'
import Logo from './Logo'


function Footer() {
  return (
    <div className='absolute  flex items-center p-4 bg-red-200 w-full flex-col justify-center '>
       
        <div className='flex items-center justify-center sm:space-x-96  flex-col sm:flex-row'>
           
           <Logo />

            <div className='flex justify-between items-center flex-col ms-0 w-3/4 mt-4 sm:mt-0 sm:w-1/4'>
                <NavLink to='/' className='text-red-400 text-sm font-extrabold text-center'>HOME</NavLink>
                <NavLink to='/trending' className='text-red-400 text-sm font-extrabold text-center'>TRENDING</NavLink>
                <NavLink to='/tvSeries' className='text-red-400 text-sm font-extrabold text-center'>TV SERIES</NavLink>
                <NavLink to='/movies' className='text-red-400 text-sm font-extrabold text-center'>MOVIES</NavLink>
                <NavLink to='/tvShows' className='text-red-400 text-sm font-extrabold text-center'>TV SHOWS</NavLink>
                <NavLink to='#' className='text-purple-800 font-extrabold text-sm rounded-sm border-4 p-2 bg-blue-200 border-blue-50 hover:bg-slate-100 cursor-pointer ml-4 text-center'>LOGOUT</NavLink>
            </div>

        </div>

        <p className='font-bold text-gray-400 text-center mt-2 text-sm'>2024 &copy; HASHIM BAYA NASSORO.ALL RIGHTS RESERVED.</p>
    </div>
  )
}

export default Footer