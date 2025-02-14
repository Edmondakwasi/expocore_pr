import React from 'react'

const Testimonials = () => {
  return (
    <div className="px-4 md:px-8 lg:px-20 py-8 md:py-12 lg:py-20">
      <div className="opacity-0 animate-fadeIn">
        <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl pt-6 md:pt-10 lg:pt-14 animate-slideDown">
          Our mission
        </h1>
        <p className="text-center text-base md:text-xl lg:text-2xl p-4 md:p-6 lg:p-10 max-w-4xl mx-auto animate-slideUp delay-300">
          "We are a team of passionate PR and marketing experts who are dedicated to helping our clients achieve their business goals through strategic PR and marketing campaigns. Our mission is to provide our clients with the best possible service and results, and to help them grow their businesses and reach their full potential".
        </p>
      </div>
    </div>
  )
}

export default Testimonials