import React from 'react';

const Cards = () => {
  return (
    <div className="p-4 md:p-8 lg:p-14">
      {/* Main Title */}
      <h4 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-center pt-8 md:pt-14 mb-4">
        No fluff. <span className="italic">We get results.</span> And we can prove it.
      </h4>
      <p className="font-sans pt-3 pb-8 md:pb-12 lg:pb-16 text-center text-base md:text-lg max-w-3xl mx-auto">
        We've supported over 100 fast-growing companies to grow and build trust with strategic PR.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        {/* Text Section */}
        <div className="flex flex-col justify-center space-y-4 md:space-y-6 text-center lg:text-left">
          <h2 className="font-display text-2xl md:text-3xl font-bold">
            Expand into new markets with Expocore PR
          </h2>
          <p className="font-sans text-sm md:text-base lg:text-lg">
            We build localized PR strategies to expand your brand and create visibility in desired markets.
          </p>
          <div className="flex justify-center lg:justify-start">
          <button className="font-sans btn btn-primary w-48 sm:w-44 mx-48 lg:mx-0">
            Book a discovery call
          </button>
          </div>
        </div>

        {/* Card Section */}
        <div className="card bg-base-100 shadow-xl">
          <div className="flex flex-col lg:flex-row">
            {/* Left section with image */}
            <figure className="relative rounded-t-lg rounded-bl-lg w-full lg:w-1/2 h-48 md:h-64 lg:h-auto">
              <img
                src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                alt="SoftBank Deal"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 p-3 md:p-5 bg-gradient-to-t from-black to-transparent w-full text-white">
                <h3 className="font-display text-base md:text-lg font-semibold">SoftBank's First Saudi Deal</h3>
                <p className="font- sans text-xs md:text-sm">Follows UAE, Turkey Investments</p>
              </div>
            </figure>

            {/* Right section with details */}
            <div className="card-body p-4 md:p-6 w-full lg:w-1/2">
              <span className="badge badge-outline">TELECOM</span>
              <h2 className="card-title text-lg md:text-xl">Unifonic case study</h2>
              <p className="font-sanstext-sm md:text-base">Leveraging a successful funding round to boost global player status.</p>
              <button className="font-sans btn btn-primary w-44 sm:w-auto">Read case study</button>
              <div className="flex flex-col sm:flex-row justify-between text-gray-500 text-xs md:text-sm mt-3 space-y-2 sm:space-y-0">
                <span><strong>390M</strong> Online readership</span>
                <span><strong>103+</strong> Pieces of coverage</span>
              </div>
            </div>
          </div>
        </div>

        {/* Repeat similar structure for other cards */}
        <div className="card bg-base-100 shadow-xl">
          <div className="flex flex-col lg:flex-row">
            {/* Left section with image */}
            <figure className="relative rounded-t-lg rounded-bl-lg w-full lg:w-1/2 h-48 md:h-64 lg:h-auto">
              <img
                src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                alt="SoftBank Deal"
                className="w-44 h-full object-cover"
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
              <p className="text-sm mb-10 md:text-base">Leveraging a successful funding round to boost global player status.</p>
              <button className="btn btn-primary w-44 sm:w-auto">Read case study</button>
              <div className="flex flex-col sm:flex-row justify-between text-gray-500 text-xs md:text-sm mt-3 space-y-2 sm:space-y-0">
                <span><strong>390M</strong> Online readership</span>
                <span><strong>103+</strong> Pieces of coverage</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-4 md:space-y-6 text-center lg:text-left">
          <h2 className="font-display text-2xl md:text-3xl font-bold">
            Expand into new markets with Expocore PR
          </h2>
          <p className="text-sm md:text-base lg:text-lg">
            We build localized PR strategies to expand your brand and create visibility in desired markets.
          </p>
          <div className="flex justify-center lg:justify-start">
          <button className="btn btn-primary w-44 sm:w-48 mx-48 lg:mx-0">
            Book a discovery call
          </button>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-4 md:space-y-6 text-center lg:text-left">
          <h2 className="font-display text-2xl md:text-3xl font-bold">
            Expand into new markets with Expocore PR
          </h2>
          <p className="text-sm md:text-base lg:text-lg">
            We build localized PR strategies to expand your brand and create visibility in desired markets.
          </p>
          <div className="flex justify-center lg:justify-start">
          <button className="btn btn-primary w-44 sm:w-48 mx-48 lg:mx-0">
            Book a discovery call
          </button>
          </div>
        </div>

        <div className="card  bg-base-100 shadow-xl">
          <div className="flex flex-col lg:flex-row">
            {/* Left section with image */}
            <figure className="relative rounded-t-lg rounded-bl-lg w-full lg:w-1/2 h-48 md:h-64 lg:h-auto">
              <img
                src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                alt="SoftBank Deal"
                className="w-44 h-full object-cover"
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
              <p className="text-sm mb-10 md:text-base">Leveraging a successful funding round to boost global player status.</p>
              <button className="btn btn-primary w-44 sm:w-auto">Read case study</button>
              <div className="flex flex-col sm:flex-row justify-between text-gray-500 text-xs md:text-sm mt-3 space-y-2 sm:space-y-0">
                <span><strong>390M</strong> Online readership</span>
                <span><strong>103+</strong> Pieces of coverage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
