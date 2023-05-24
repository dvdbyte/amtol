import React from 'react'
import './navbar.css'
import logo from '../../assets/amtol_logo.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
        <ul className="nav-links">
          <li><a href="#">Services</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar