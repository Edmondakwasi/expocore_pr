import React from 'react'

import Logo from '../assets/logo.png'

const Navbar = () => {
  return (

    <div className="navbar bg-base-100">
    <a href="/"> 
    
    <img  src={Logo} alt="logo" className="w-40 h-20 p-2" />
    
    </a>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li>
        <details>
          <summary>PR Services</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Service 1</a></li>
            <li><a>Service 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>About</a></li>
      <button className="btn btn-primary">Book a service</button>
    </ul>
  </div>
</div>
  )
}

export default Navbar