import React from 'react'

const Faq = () => {
  return (
    <div>
    <h1 className="p-14 font-extrabold text-4xl text-nowrap text-center">Still have questions?</h1>
    <div className="bg-base-200 ml-56 mr-56 mb-32 rounded-lg">
    <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium">Why choose Expocore PR for your PR campaign?</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
</div>
</div>
  )
}

export default Faq