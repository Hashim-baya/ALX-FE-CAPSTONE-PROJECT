import React from 'react'
import { NavLink, useNavigate } from 'react-router'
import Logo from './Logo'
import { auth } from './Firebase';
import { toast } from 'react-toastify';


function Footer() {

  const navigate = useNavigate();

  const currentYear = new Date().getFullYear();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/login');
      toast.success('Logout successful!', {
        position: "top-center",
      })
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-center",
      })
    }
  }
  return (
    <div className='absolute  flex items-center p-4 bg-[#f4a26160] w-full flex-col justify-center '>
       
        <div className='flex items-center justify-center sm:space-x-96  flex-col sm:flex-row'>
           
           <Logo />

            <div className='flex justify-between items-center flex-col ms-0 w-3/4 mt-4 sm:mt-0 sm:w-1/4'>
                <NavLink to='/home' className='text-[#e76f51] text-[0.7rem] font-extrabold text-center'>HOME</NavLink>
                <NavLink to='/trending' className='text-[#e76f51] text-[0.7rem] font-extrabold text-center'>TRENDING</NavLink>
                <NavLink to='/tvSeries' className='text-[#e76f51] text-[0.7rem] font-extrabold text-center'>TV SERIES</NavLink>
                <NavLink to='/movies' className='text-[#e76f51] text-[0.7rem] font-extrabold text-center'>MOVIES</NavLink>
                <NavLink to='/tvShows' className='text-[#e76f51] text-[0.7rem] font-extrabold text-center'>TV SHOWS</NavLink>
                <NavLink to='#' onClick={handleLogout} className='text-purple-800 font-extrabold text-sm rounded-sm border-4 p-2 bg-blue-200 border-blue-50 hover:bg-slate-100 cursor-pointer ml-4 text-center'>LOGOUT</NavLink>
            </div>

        </div>

        <p className='font-bold text-gray-400 text-center mt-2 text-sm'>{currentYear} &copy; HASHIM BAYA NASSORO.ALL RIGHTS RESERVED.</p>
    </div>
  )
}

export default Footer