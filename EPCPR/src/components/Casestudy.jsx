import React from 'react'

const Casestudy = () => {
  return (
    <div className="bg-base-200 px-4 md:px-8 lg:px-20 py-8 md:py-12 lg:py-20">
      <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-center">
        Case study with proven results
      </h1>
      <p className="pt-3 text-center text-sm md:text-base lg:text-lg max-w-3xl mx-auto">
        Read our case studies to see how we tailored our approach to ensure we hit the desired outcomes unique to every client.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mt-8 md:mt-12 lg:mt-14">
        {/* First Card */}
        <div className="card bg-base-100 shadow-xl">
          <div className="flex flex-col lg:flex-row">
            {/* Left section with image */}
            <figure className="relative w-full lg:w-1/2 h-48 md:h-64 lg:h-auto">
              <img
                src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                alt="SoftBank Deal"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-3 md:p-5 bg-gradient-to-t from-black to-transparent w-full text-white">
                <h3 className="text-base md:text-lg font-semibold">SoftBank's First Saudi Deal</h3>
                <p className="text-xs md:text-sm">Follows UAE, Turkey Investments</p>
              </div>
            </figure>

            {/* Right section with details */}
            <div className="card-body p-4 md:p-6 w-full lg:w-1/2">
              <span className="badge badge-outline">TELECOM</span>
              <h2 className="card-title text-lg md:text-xl">Unifonic case study</h2>
              <p className="text-sm md:text-base">Leveraging a successful funding round to boost global player status.</p>
              <button className="btn btn-primary w-full sm:w-auto">Read case study</button>
              <div className="flex flex-col sm:flex-row justify-between text-gray-500 text-xs md:text-sm mt-3 space-y-2 sm:space-y-0">
                <span><strong>390M</strong> Online readership</span>
                <span><strong>103+</strong> Pieces of coverage</span>
              </div>
            </div>
          </div>
        </div>

        {/* Second Card - Same structure as first card */}
        <div className="card bg-base-100 shadow-xl">
          <div className="flex flex-col lg:flex-row">
            {/* Left section with image */}
            <figure className="relative w-full lg:w-1/2 h-48 md:h-64 lg:h-auto">
              <img
                src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                alt="SoftBank Deal"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-3 md:p-5 bg-gradient-to-t from-black to-transparent w-full text-white">
                <h3 className="text-base md:text-lg font-semibold">SoftBank's First Saudi Deal</h3>
                <p className="text-xs md:text-sm">Follows UAE, Turkey Investments</p>
              </div>
            </figure>

            {/* Right section with details */}
            <div className="card-body p-4 md:p-6 w-full lg:w-1/2">
              <span className="badge badge-outline">TELECOM</span>
              <h2 className="card-title text-lg md:text-xl">Unifonic case study</h2>
              <p className="text-sm md:text-base">Leveraging a successful funding round to boost global player status.</p>
              <button className="btn btn-primary w-full sm:w-auto">Read case study</button>
              <div className="flex flex-col sm:flex-row justify-between text-gray-500 text-xs md:text-sm mt-3 space-y-2 sm:space-y-0">
                <span><strong>390M</strong> Online readership</span>
                <span><strong>103+</strong> Pieces of coverage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Casestudy