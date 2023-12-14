import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './index.css'

const NavBar = () => {
  return (
    <main>
    <header>
        <nav>
          <div>
            <NavLink to="/"><h1 style={{color: "gold"}}>Assemble</h1></NavLink>
          </div>
          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/heroes">Heroes</NavLink>
          </div>
        </nav>
    </header>
    <Outlet />
</main>
  )
}

export default NavBar
