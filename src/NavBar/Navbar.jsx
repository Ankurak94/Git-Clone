import React from 'react'
import gitlogo from './github_logo.png'

function Navbar() {
  return (
    <div className="navbar-container">
        <span className="left-navbar">        
            <img className='img' src={gitlogo} alt="Github Logo" />
            <input type="text" className='search-1'/>
            <span>Pull Requests</span>
            <span>Issues</span>
            <span>Market Place</span>
            <span>Explore</span>
        </span>
        <span className="right-navbar">
            <span>Notification</span>
            <span>List</span>
            <span>Account</span>
        </span>

    </div>
  )
}

export default Navbar