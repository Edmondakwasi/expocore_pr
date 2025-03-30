import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="navbar bg-base-100 relative">
      <div className="flex-1 ml-5">
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
                <li><a>Brand Promotion</a></li>
                <li><a>Event Coordination</a></li>
                <li><a>Social Media Management</a></li>
              </ul>
            </details>
          </li>
          <li className="mt-2 pr-5"><a>About</a></li>
          <button className="btn btn-primary">Book a service</button>
        </ul>
      </div>

      {/* Theme toggle button */}
      <button 
        onClick={toggleTheme}
        className="btn btn-ghost btn-circle flex items-center justify-center p-2"
      >
        {theme === 'light' ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        )}
      </button>

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