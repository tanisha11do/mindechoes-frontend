import React from 'react'
import './Navbar.css'
import logo from '../assets/Logo.png'
import Dropdown from './Dropdown'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo}  alt='' className='logo'/>
        <ul>
            <li>About us</li>
            <li><Dropdown></Dropdown></li>
            <li>Log in</li>
            <li className='signup'>Sign up</li>
        </ul>
    </div>
  )
}

export default Navbar