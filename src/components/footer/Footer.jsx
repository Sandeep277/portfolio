import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div>Sandeep.dev</div>
        <div className="footerBar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/works">Works</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className='rights'><p>All rights reserved by <span>Sandeep Kushwaha</span></p></div>
      </div>
    </>
  )
}

export default Footer
