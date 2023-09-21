import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineCancel } from 'react-icons/md'
const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu)
    }
  return (
    <div className="navbar">
        <div className="logo">
            <h3><Link to={'/'}>Sandeep.dev</Link></h3>
        </div>
        <div className="hambuger" onClick={toggleMenu}>{menu ? <MdOutlineCancel/> : <GiHamburgerMenu/> }</div>
        <div className={`links ${menu ? 'show' : 'hide'}`}>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/about">About</Link>
            <Link className='link' to="/works">Works</Link>
            <Link className='link' to="/contact">Contact</Link>
        </div>
        <div className="contactBtn">
            <Link to={'/contact'}><button className="btn">Let's talk</button></Link>
        </div>
    </div>
  )
}

export default Navbar
