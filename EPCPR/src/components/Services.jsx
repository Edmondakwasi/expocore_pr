import React from 'react'

const Services = () => {
  return (
    <div className="bg-base-200">
      <div className="container mx-auto px-4 py-10 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Cards Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="card bg-primary text-primary-content">
              <div className="card-body p-4 md:p-6">
                <h2 className="font-sans card-title text-lg md:text-xl">Global PR agency</h2>
                <p className="font-sans text-sm md:text-base">If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>

            <div className="card bg-primary text-primary-content">
              <div className="card-body p-4 md:p-6">
                <h2 className="font-sans card-title text-lg md:text-xl">Card title!</h2>
                <p className="font-sans text-sm md:text-base">If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>

            <div className="card bg-primary text-primary-content">
              <div className="card-body p-4 md:p-6">
                <h2 className="font-sans card-title text-lg md:text-xl">Card title!</h2>
                <p className="font-sans text-sm md:text-base">If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>

            <div className="card bg-primary text-primary-content">
              <div className="card-body p-4 md:p-6">
                <h2 className="font-sans card-title text-lg md:text-xl">Card title!</h2>
                <p className="font-sans text-sm md:text-base">If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
            <h2 className="font-display text-xl md:text-3xl lg:text-4xl font-bold">
              Expand into new markets with Expocore PR
            </h2>
            <p className="font-sans text-sm md:text-base">
              We build localized PR strategies to expand your brand and create visibility in desired markets.
            </p>
            <button className=" w-44 font-sans btn btn-primary  sm:w-48 mx-48 lg:mx-0">
              Book a discovery call
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services