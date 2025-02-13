import React, { useState } from 'react'
import Logo from '../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 relative">
      <div className="flex-1">
        <a href="/">
          <img src={Logo} alt="logo" className="w-32 h-16 p-2 md:w-40 md:h-20 md:ml-24" />
        </a>
      </div>

      {/* Mobile menu button */}
      <div className="flex-none lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn btn-square btn-ghost"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Desktop menu */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details className="mt-2">
              <summary>PR Services</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
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

      {/* Mobile menu (dropdown) */}
      {isOpen && (
        <div className="lg:hidden fixed top-[4rem] left-0 right-0 w-full bg-base-100 shadow-lg z-50">
          <ul className="menu menu-compact p-4">
            <li>
              <details>
                <summary>PR Services</summary>
                <ul className="bg-base-100 p-2">
                  <li><a>Branding</a></li>
                  <li><a>Marketing</a></li>
                  <li><a>Advertisement</a></li>
                </ul>
              </details>
            </li>
            <li><a>About</a></li>
            <li className="mt-2">
              <button className="btn btn-primary w-full">Book a service</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar