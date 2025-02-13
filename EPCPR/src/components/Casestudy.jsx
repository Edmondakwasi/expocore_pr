import React from 'react'

const Casestudy = () => {
  return (
    <div className="bg-base-200 p-20">
    <h1 className="font-extrabold text-4xl text-nowrap text-center">Case studies with proven results</h1>
    <p className="pt-3 text-center">Read our case studies to see how we tailored our approach <br /> to ensure we hit the desired outcomes unique to every client.</p>
    <div className="grid grid-cols-2 gab-2">
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
 </div>
 </div>
  )
}

export default Casestudy