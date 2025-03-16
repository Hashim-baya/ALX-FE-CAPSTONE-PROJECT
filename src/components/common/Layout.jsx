import React from 'react'
import { Outlet } from 'react-router'
import NavBar from './NavBar'
import Footer from './Footer'
import SearchBar from './SearchBarIcon'
import NavBarCarousel from './NavBarCarousel'

function Layout() {
  return (
    <div>
        <NavBarCarousel />
        <NavBar />
        <Outlet />
        <Footer />
        
    </div>
  )
}

export default Layout