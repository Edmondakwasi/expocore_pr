import { useState } from 'react'

import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Clients from './components/Clients'
import Services from './components/Services'
import Cards from './components/Cards'

import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <Navbar />
    <Hero />
    <Clients />
    <Services />
    <Cards />
    <Footer />
    </>
  );
};

export default App
