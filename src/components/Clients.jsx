import React from 'react'

import brand1Image from '../assets/brand1.png'
import brand2Image from '../assets/brands.png'
import brand3Image from '../assets/brand3.png'


const Clients = () => {
  return (
    <div className="container mx-auto px-4 md:px-8">
      <h1 className="font-display pt-8 md:pt-14 font-extrabold text-2xl md:text-3xl lg:text-4xl text-center">
        Our Clients
      </h1>
      
      <div className="max-w-7xl mx-auto overflow-x-auto">
        <div className="flex flex-row justify-center items-center gap-4 md:gap-10 lg:gap-12 py-8 md:py-14 min-w-max px-4"> 
          <img
            src={brand2Image}
            alt="Client 1"
            className="rounded-full w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover"
          />
          
          <img
            src={brand1Image} 
            alt="Client 2"
            className="rounded-full w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover"
          />
          
          <img
            src={brand3Image}
            alt="Client 3"
            className="rounded-full w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Clients