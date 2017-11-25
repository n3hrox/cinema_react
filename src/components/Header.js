import React from 'react'
import {NavLink, Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
       <ul className="header">
        <li><NavLink exact to='/'>Home</NavLink></li>
        <li><NavLink to='/schedule'>Schedule</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
       </ul>
  </header>
)

export default Header
