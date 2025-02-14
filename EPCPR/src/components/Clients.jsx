import React from 'react'

const Clients = () => {
  return (
    <div className="container mx-auto px-4 md:px-8">
      <h1 className="pt-8 md:pt-14 font-extrabold text-2xl md:text-3xl lg:text-4xl text-center">
        Our Clients
      </h1>
      
      <div className="max-w-7xl mx-auto overflow-x-auto">
        <div className="flex flex-row justify-center items-center gap-4 md:gap-10 lg:gap-12 py-8 md:py-14 min-w-max px-4"> 
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Client 1"
            className="rounded-full w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover"
          />
          
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Client 2"
            className="rounded-full w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover"
          />
          
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Client 3"
            className="rounded-full w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Clients