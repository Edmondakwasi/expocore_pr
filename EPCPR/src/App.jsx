import { useState } from 'react'

import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Clients from './components/Clients'
import Services from './components/Services'
import Cards from './components/Cards'
import Brands from './components/Brands'
import Testimonials from './components/Testimonials'
import Casestudy from './components/Casestudy'
import Calltoaction from './components/Calltoaction'
import Faq from './components/Faq'


import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <Navbar />
    <Hero />
    <Clients />
    <Services />
    <Cards />
    <Brands />
    <Testimonials />
    <Casestudy />
    <Calltoaction />
    <Faq />
    <Footer />
    </>
  );
};

export default App
