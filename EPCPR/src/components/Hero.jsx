import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen px-4 md:px-8 lg:px-16">
        <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-12">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="w-96 max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl mx-auto lg:ml-32 
                     hover:scale-105 transition-transform duration-300 animate-fadeIn" 
            alt="Hero"
          />
          <div className="text-center lg:text-left animate-slideUp">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold pb-4 lg:pb-8 animate-slideInLeft">
              We are a B2C PR <br className="hidden md:block" /> 
              company on a mission <br className="hidden md:block" /> 
              <i className="animate-fadeIn">to grow your brand</i>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-prose animate-fadeIn delay-300">
              Need to stand out in a competitive space? Our B2C PR firm can help 
              put you on the map! Drive major brand awareness, reach new audiences, 
              and boost your credibility as a thought-leading brand.
            </p>
            <button className="btn btn-primary mt-6 lg:mt-8 w-full sm:w-auto 
                           hover:scale-105 transition-transform duration-300 animate-fadeIn delay-500">
              Book a service
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero