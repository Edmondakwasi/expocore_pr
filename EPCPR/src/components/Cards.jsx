import React from 'react'

const Cards = () => {
  return (
    <>
    <h4 className="text-4xl font-bold text-center pt-14">No fluff. We get results. And we can prove it.</h4>
    <p className="pt-3 text-center">We've supported over 100+ Fast growing companies to grow and build trust with strategic PR.</p>
    <div className="grid grid-cols-2 pt-10">
    <h2 className="m-24 text-4xl font-bold">Expand into new markets with Expocore PR</h2>
    {/* <p className="m-24 text-4xl">Hello world</p> */}
    <div className="card lg:card-side bg-base-100 shadow-xl m-14">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
  </div>
</div>

<div className="card lg:card-side bg-base-100 shadow-xl m-14">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
  </div>
  
</div>
<h2 className="m-24 text-4xl font-bold">Become a thought leader and build trust</h2>
<h2 className="m-24 text-4xl font-bold">Drive brand awareness</h2>
    {/* <p className="m-24 text-4xl">Hello world</p> */}
    <div className="card lg:card-side bg-base-100 shadow-xl m-14">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
  </div>
</div>
</div>
    </>
  )
}

export default Cards