import React from 'react'
import { Link, NavLink } from 'react-router'
import Logo from './Logo'

function NavBar() {
  return (
    <div className='w-full '> 

        <div className='flex justify-between bg-red-200 min-w-full p-4 flex-col items-center container sm:flex-row md:flex-row'   >
           
           <Logo height='10' width='200' />

            <div className='flex justify-between items-center  w-3/4 mt-4 sm:mt-0 sm:w-1/4'>
                <NavLink to='/homePage' className='text-red-400 font-extrabold text-center'>HOME</NavLink>
                <NavLink to='#' className='text-purple-800 font-extrabold rounded-sm border-4 p-2 bg-blue-200 border-blue-50 hover:bg-slate-100 cursor-pointer ml-4 text-center'>LOGOUT</NavLink>
            </div>

        </div>
    </div>
  )
}

export default NavBar