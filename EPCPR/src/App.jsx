import { useState } from 'react'

import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
// import Clients from './components/Clients'

import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <Navbar />
    <Hero />
    {/* <Clients /> */}
    <Footer />
    </>
  );
};

export default App
