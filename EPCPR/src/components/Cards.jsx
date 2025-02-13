import React from 'react';

const Cards = () => {
  return (
    <div className="p-14">
      {/* Main Title */}
      <h4 className="text-4xl font-bold text-center pt-14">
        No fluff. <span className="italic">We get results.</span> And we can prove it.
      </h4>
      <p className="pt-3 text-center text-lg ">
        We've supported over 100 fast-growing companies to grow and build trust with strategic PR.
      </p>

      {/* Section 1 */}
      <div className="grid lg:grid-cols-2 gap-10 pt-20">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold">Expand into new markets with Expocore PR</h2>
          <p className="mt-4 ">
            We build localized PR strategies to expand your brand and create visibility in desired markets.
          </p>
          <button className="mt-4 px-6 py-2 rounded-lg">
            Book a discovery call
          </button>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl mb-24">
                
                    {/* Left section with image */}
                    <figure className="relative w-full lg:w-1/2">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                            alt="SoftBank Deal"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 p-5 bg-gradient-to-t from-black to-transparent w-full text-white">
                            <h3 className="text-lg font-semibold">SoftBank’s First Saudi Deal</h3>
                            <p className="text-sm">Follows UAE, Turkey Investments</p>
                        </div>
                    </figure>
                   
                
            
                {/* Right section with details */}
                <div className="card-body w-full lg:w-1/2">
                    <span className="badge badge-outline">TELECOM</span>
                    <h2 className="card-title">Unifonic case study</h2>
                    <p>Leveraging a successful funding round to boost global player status.</p>
                    <button className="btn btn-primary">Read case study</button>
                    <div className="flex justify-between text-gray-500 text-sm mt-3">
                        <span><strong>390M</strong> Online readership</span>
                        <span><strong>103+</strong> Pieces of coverage</span>
                    </div>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl mb-24">
                
                    {/* Left section with image */}
                    <figure className="relative w-full lg:w-1/2">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                            alt="SoftBank Deal"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 p-5 bg-gradient-to-t from-black to-transparent w-full text-white">
                            <h3 className="text-lg font-semibold">SoftBank’s First Saudi Deal</h3>
                            <p className="text-sm">Follows UAE, Turkey Investments</p>
                        </div>
                    </figure>
                {/* Right section with details */}
                <div className="card-body w-full lg:w-1/2">
                    <span className="badge badge-outline">TELECOM</span>
                    <h2 className="card-title">Unifonic case study</h2>
                    <p>Leveraging a successful funding round to boost global player status.</p>
                    <button className="btn btn-primary">Read case study</button>
                    <div className="flex justify-between text-gray-500 text-sm mt-3">
                        <span><strong>390M</strong> Online readership</span>
                        <span><strong>103+</strong> Pieces of coverage</span>
                    </div>
                </div>
                
            </div>
            <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold">Expand into new markets with Expocore PR</h2>
          <p className="mt-4 ">
            We build localized PR strategies to expand your brand and create visibility in desired markets.
          </p>
          <button className="mt-4 px-6 py-2 rounded-lg">
            Book a discovery call
          </button>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold">Expand into new markets with Expocore PR</h2>
          <p className="mt-4 ">
            We build localized PR strategies to expand your brand and create visibility in desired markets.
          </p>
          <button className="mt-4 px-6 py-2 rounded-lg">
            Book a discovery call
          </button>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl mb-24">
                
                    {/* Left section with image */}
                    <figure className="relative w-full lg:w-1/2">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                            alt="SoftBank Deal"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 p-5 bg-gradient-to-t from-black to-transparent w-full text-white">
                            <h3 className="text-lg font-semibold">SoftBank’s First Saudi Deal</h3>
                            <p className="text-sm">Follows UAE, Turkey Investments</p>
                        </div>
                    </figure>
                   
                
            
                {/* Right section with details */}
                <div className="card-body w-full lg:w-1/2">
                    <span className="badge badge-outline">TELECOM</span>
                    <h2 className="card-title">Unifonic case study</h2>
                    <p>Leveraging a successful funding round to boost global player status.</p>
                    <button className="btn btn-primary">Read case study</button>
                    <div className="flex justify-between text-gray-500 text-sm mt-3">
                        <span><strong>390M</strong> Online readership</span>
                        <span><strong>103+</strong> Pieces of coverage</span>
                    </div>
                </div>
            </div>
      </div>

      
    </div>
  );
};

export default Cards;
