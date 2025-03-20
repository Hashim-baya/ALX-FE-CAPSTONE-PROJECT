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
    <div className='absolute  flex items-center p-4 bg-[#4d6d7a] w-full flex-col justify-center '>
       
        <div className='flex items-center justify-center sm:space-x-96  flex-col sm:flex-row'>
           
           <Logo />

            <div className='flex justify-between items-start gap-7 ms-0 mt-4 sm:mt-0'>
                <NavLink to='/home' className=' text-orange-900 text-[0.9rem] font-semibold text-center'>HOME</NavLink>
                <NavLink to='/trending' className=' text-orange-900 text-[0.9rem] font-semibold text-center'>TRENDING</NavLink>
                <NavLink to='/tvSeries' className='text-orange-900 text-[0.9rem] font-semibold text-center'>TV SERIES</NavLink>
                <NavLink to='/movies' className=' text-orange-900 text-[0.9rem] font-semibold text-center'>MOVIES</NavLink>
                <NavLink to='/tvShows' className=' text-orange-900 text-[0.9rem] font-semibold text-center'>TV SHOWS</NavLink>
                
            </div>

        </div>

        <p className='font-bold text-gray-400 text-center mt-2 text-sm'>{currentYear} &copy; HASHIM BAYA NASSORO.ALL RIGHTS RESERVED.</p>
    </div>
  )
}

export default Footer