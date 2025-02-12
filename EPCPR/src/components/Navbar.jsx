import React from 'react'

import Logo from '../assets/logo.png'

const Navbar = () => {
  return (

  <div className="navbar bg-base-100 ">
    <a href="/"> 
    
    <img  src={Logo} alt="logo" className="w-40 h-20 p-2 ml-24" />
    
    </a>
  <div>
    <ul className="menu menu-horizontal px-1">
      <li>
        <details className="mt-2">
          <summary>PR Services</summary>
          <ul className="bg-base-100 rounded-t-none p-2 ">
            <li><a>Branding</a></li>
            <li><a>Marketing</a></li>
            <li><a>Advertisement</a></li>
          </ul>
        </details>
      </li>
      <li className="mt-2 pr-5"><a>About</a></li>
      <button className="btn btn-primary">Book a service</button>
    </ul>
  </div>
</div>
  )
}

export default Navbar