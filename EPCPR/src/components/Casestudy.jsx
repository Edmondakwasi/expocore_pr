import React from 'react'

const Casestudy = () => {
  return (
    <div className="bg-base-200 p-20">
        <h1 className="font-extrabold text-4xl text-nowrap text-center">Case studies with proven results</h1>
        <p className="pt-3 text-center">Read our case studies to see how we tailored our approach <br /> to ensure we hit the desired outcomes unique to every client.</p>
        <div className="grid grid-cols-2 gab-2 ">
            <div className="card lg:card-side bg-base-100 shadow-xl mr-5 mt-10">
                
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
            <div className="card lg:card-side bg-base-100 shadow-xl ml-5 mt-10">
                
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
  )
}

export default Casestudy