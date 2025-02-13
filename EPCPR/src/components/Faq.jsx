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
    <p>Expocore is the ideal partner for every brand seeking to raise brand awareness and make a lasting impact in a competitive market. We offer our global expertise to be able to craft tailored PR strategies that meet your business objectives. Our integrated approach ensures your brand is noticed by the right audience at the right time and gains you the traction you need. We set clear goals right at the start to be truly effective and then adapt and change our approach as and when needed. Above all, we commit to transparency, collaboration, and delivering value at every step.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">What kind of clients does your PR firm work with?</div>
  <div className="collapse-content">
    <p>Expocore PR mostly focuses on brands or companies that struggles with brand awareness. We have experience cooperating with organizations of every vertical, including Food Brands, Tech Brands, Clothing Brands, Beverages, and many others. Whether you are a company ready to make your mark or a Brand looking to cement your market presence, our team has the skills and expertise to deliver you results. We have worked with clients of all sizes, ensuring that each campaign is strategically aligned with the unique goals of every client.</p>
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