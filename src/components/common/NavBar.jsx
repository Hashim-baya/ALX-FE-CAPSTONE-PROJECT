import React, {useState} from 'react'
import { Link, NavLink, useNavigate } from 'react-router'
import Logo from './Logo'
import { Menu, X } from 'lucide-react'; 
import NavBarCarousel from './NavBarCarousel';
import { auth } from './Firebase';
import { toast } from 'react-toastify';

function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen); 
  }

  const handleLogout = async() => {
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
    <div className='w-full flex '> 

        <div className='flex relative justify-between bg-[#a06a4b60] min-w-full p-4 flex-col   container sm:flex-row md:flex-row z-[1000]'   >
           
           

           <Logo  className='mr-auto flex items-start ' />

           

            <div className=' justify-between items-center mt-4 gap-4 sm:mt-0 hidden sm:flex ml-auto'>
                
                <NavLink to='/home' className='text-[#e76f51] font-extrabold text-center'>HOME</NavLink>
                <NavLink to='/trending'className='text-[#e76f51] font-extrabold text-center'>TRENDING</NavLink>
                <NavLink to='/tvSeries'className='text-[#e76f51] font-extrabold text-center'>TV SERIES</NavLink>
                <NavLink to='/movies'className='text-[#e76f51] font-extrabold text-center'>MOVIES</NavLink>
                <NavLink to='/tvShows'className='text-[#e76f51] font-extrabold text-center'>TV SHOWS</NavLink>
                <NavLink to='#' onClick={handleLogout} className='text-purple-800 font-extrabold rounded-sm border-4 p-2 bg-blue-200 border-blue-50 hover:bg-slate-100 cursor-pointer ml-4 text-center'>LOGOUT</NavLink>
               
            </div>

            <button 
                onClick={handleToggle} 
                className='ml-auto sm:hidden absolute top-6 right-4' 
              >
                {isOpen ? <X size='30' /> : <Menu size='30' />}

           </button>
              
                {isOpen && 
                <div >
                  <div className='flex flex-col gap-4 flex-wrap items-center justify-center mt-4  sm:hidden md:hidden'>

                    <NavLink to='/home' className='text-[#e76f51] font-extrabold text-center'>HOME</NavLink>
                    <NavLink to='/trending'className='text-[#e76f51] font-extrabold text-center'>TRENDING</NavLink>
                    <NavLink to='/tvSeries'className='text-[#e76f51] font-extrabold text-center'>TV SERIES</NavLink>
                    <NavLink to='/movies'className='text-[#e76f51] font-extrabold text-center'>MOVIES</NavLink>
                    <NavLink to='/tvShows'className='text-[#e76f51] font-extrabold text-center'>TV SHOWS</NavLink>
                    <NavLink to='/login' className='text-purple-800 font-extrabold rounded-sm border-4 p-2 bg-blue-200 border-blue-50 hover:bg-slate-100 cursor-pointer ml-4 text-center'>LOGOUT</NavLink>
                    
                  </div>
                </div>
              }

        </div>
    </div>
  )
}

export default NavBar