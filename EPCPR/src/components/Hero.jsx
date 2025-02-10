import React from 'react'


const Hero = () => {
  return (
    <>
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      {/* <img
        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
        className="max-w-sm rounded-lg shadow-2xl" /> */}
      <div>
        <h1 className="text-5xl font-bold">We are a B2C PR firm on a mission <br /> to<i> grow your brand</i></h1>
        <p className="py-6">
        Need to stand out in a competitive space? Our B2C PR firm can help put  you on the map! Drive major brand awareness, reach new audiences, and boost your <br /> credibility as a thought-leading brand.
        </p>
        <button className="btn btn-primary">Book a service</button>
        {/* <Rating /> */}
      </div>
    </div>
  </div>
  </>
  )
}

export default Hero