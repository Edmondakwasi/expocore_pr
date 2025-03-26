import React from 'react'

import brand1Image from '../assets/brand1.png'
import brand2Image from '../assets/brands.png'

const Brands = () => {
  return (
    <div className="bg-base-200 px-4 md:px-8 py-10 md:py-16">
      <h1 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl text-center mb-8 md:mb-12">
        Trusted by 3+ brands worldwide
      </h1>

      <div className="max-w-7xl mx-auto font-sans">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full flex justify-center">
            <img 
              src={brand1Image} 
              className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover" 
              alt="Brand 1" 
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle btn-sm md:btn-md">❮</a>
              <a href="#slide2" className="btn btn-circle btn-sm md:btn-md">❯</a>
            </div>
          </div>

          <div id="slide2" className="carousel-item relative w-full flex justify-center">
            <img 
              src={brand2Image} 
              className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover" 
              alt="Brand 2" 
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle btn-sm md:btn-md">❮</a>
              <a href="#slide3" className="btn btn-circle btn-sm md:btn-md">❯</a>
            </div>
          </div>

          <div id="slide3" className="carousel-item relative w-full flex justify-center">
            <img 
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" 
              className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover" 
              alt="Brand 3" 
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle btn-sm md:btn-md">❮</a>
              <a href="#slide1" className="btn btn-circle btn-sm md:btn-md">❯</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brands