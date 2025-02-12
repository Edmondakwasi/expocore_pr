import React from 'react'


const Hero = () => {
  return (
    <>
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img
        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
        className="w-96 rounded-lg shadow-2xl ml-32" />
      <div>
        <h1 className="text-7xl font-bold pb-8">We are a B2C  PR <br /> company  on a mission <br /> <i> to grow your brand</i></h1>
        <p className="text-2xl">
        Need to stand out in a competitive space? Our B2C PR firm can help <br /> put  you on the map! Drive  major brand awareness, reach new audiences, <br /> and boost your  credibility as a thought-leading brand.
        </p>
        <button className="btn btn-primary mt-8">Book a service</button>
        {/* <Rating /> */}
      </div>
    </div>
  </div>
  </>
  )
}

export default Hero