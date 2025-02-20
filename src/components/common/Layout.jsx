import React from 'react'
import { Outlet } from 'react-router'
import NavBar from './NavBar'
import Footer from './Footer'
import SearchBar from './SearchBarIcon'

function Layout() {
  return (
    <div>
        <NavBar />
        
        <Outlet />
        <Footer />
        
    </div>
  )
}

export default Layout