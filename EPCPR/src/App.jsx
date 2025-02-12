import { useState } from 'react'

import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Clients from './components/Clients'

import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <Navbar />
    <Hero />
    <Clients />
    <h4 className="text-6xl font-bold p-5 m-40">No fluff. We get results and we can prove it. We've supported over 20+ fast growing companies to grow and build truest with strategic PR.</h4>
    <Footer />
    </>
  );
};

export default App
