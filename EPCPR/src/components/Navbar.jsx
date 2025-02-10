import React from 'react'

import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
    <a href="/" className="flex-1"> 
    
    <img  src={Logo} alt="logo" className="w-40 h-20 p-2" />
    
    </a>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Link</a></li>
    </ul>
  </div>
</div>
  )
}

export default Navbar