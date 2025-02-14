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
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold pb-4 lg:pb-8 animate-slideInLeft">
              We are a B2C PR <br className="hidden md:block" /> 
              company on a mission <br className="hidden md:block" /> 
              <i className="animate-fadeIn">to grow your brand</i>
            </h1>
            <p className="font-sans text-lg md:text-xl lg:text-2xl max-w-prose animate-fadeIn delay-300">
              Need to stand out in a competitive space? Our B2C PR firm can help 
              put you on the map! Drive major brand awareness, reach new audiences, 
              and boost your credibility as a thought-leading brand.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <button className="btn btn-primary mt-6 lg:mt-8 w-44 sm:w-auto 
                           hover:scale-105 transition-transform duration-300 animate-fadeIn delay-500">
                Book a service
              </button>
              <div className="flex flex-col items-center sm:items-start animate-fadeIn delay-600">
                <div className="flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-5 mt-6 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg className="w-5 mt-6 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 mt-1">Rated 4.8 on Trustpilot</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero