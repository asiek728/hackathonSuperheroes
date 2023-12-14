import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const NavBar = () => {
  return (
    <main>
    <header>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/heroes">Heroes</NavLink>
        </nav>
    </header>
    <Outlet />
</main>
  )
}

export default NavBar
