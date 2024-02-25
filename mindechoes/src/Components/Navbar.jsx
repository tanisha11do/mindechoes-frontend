import React from 'react'
import './Navbar.css'
import logo from '../assets/Logo.png'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to="/"><img src={logo}  alt='' className='logo'/></Link>
        <ul>
            <li>About us</li>
            <li><Dropdown></Dropdown></li>
            <li className='signup'><Link to="/Login"/>Get Started<Link/></li>
        </ul>
    </div>
  )
}

export default Navbar