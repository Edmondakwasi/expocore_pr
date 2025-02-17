import React from 'react'

const Faq = () => {
  return (
    <div className="md:px-8 lg:px-20 py-8 md:py-12 lg:py-20">
      <h1 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl text-center mb-6 md:mb-8 lg:mb-10">
        Still have questions?
      </h1>
      
      <div className="max-w-4xl mx-auto bg-base-200 rounded-lg md:p-6 lg:p-8">
        <div className="space-y-4">
          {/* FAQ Item 1 */}
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-base md:text-lg lg:text-xl font-medium">
              Why choose Expocore PR for your PR campaign?
            </div>
            <div className="collapse-content">
              <p className="text-sm md:text-base">
                Expocore is the ideal partner for every brand seeking to raise brand awareness and make a lasting impact in a competitive market. We offer our global expertise to be able to craft tailored PR strategies that meet your business objectives. Our integrated approach ensures your brand is noticed by the right audience at the right time and gains you the traction you need. We set clear goals right at the start to be truly effective and then adapt and change our approach as and when needed. Above all, we commit to transparency, collaboration, and delivering value at every step.
              </p>
            </div>
          </div>
          <hr />

          {/* FAQ Item 2 */}
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-base md:text-lg lg:text-xl font-medium">
              What kind of clients does your PR firm work with?
            </div>
            <div className="collapse-content">
              <p className="text-sm md:text-base">
                Expocore PR mostly focuses on brands or companies that struggles with brand awareness. We have experience cooperating with organizations of every vertical, including Food Brands, Tech Brands, Clothing Brands, Beverages, and many others. Whether you are a company ready to make your mark or a Brand looking to cement your market presence, our team has the skills and expertise to deliver you results. We have worked with clients of all sizes, ensuring that each campaign is strategically aligned with the unique goals of every client.
              </p>
            </div>
          </div>
          <hr />

          {/* FAQ Item 3 */}
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-base md:text-lg lg:text-xl font-medium">
              How do you tailor your strategies to different industries or clients?
            </div>
            <div className="collapse-content">
              <p className="text-sm md:text-base">
                At Expocore PR, we know that not all industries and clients are the same. We perform in-depth research concerning goals, target audience, and the competitive landscape to create a personalized PR strategy. We decide the best channels, outlets, and stories to drive resonance among a particular audience.
              </p>
            </div>
          </div>
          <hr />

          {/* FAQ Item 4 */}
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-base md:text-lg lg:text-xl font-medium">
              Are results guaranteed?
            </div>
            <div className="collapse-content">
              <p className="text-sm md:text-base">
                At Expocore PR, we aim to get you the desired results while prioritizing transparency—because we believe in setting honest expectations, not false promises. Public relations depends very much on a host of factors, and outcomes cannot be guaranteed. Anyone who says otherwise is being disingenuous. With a strategic and proactive approach, we are confident we can increase your brand's visibility.

                We set clear goals at the start of every campaign, track the progress of our established KPIs, and adjust strategies to ensure optimal outcomes. Our track record of success across various brands demonstrates our ability to deliver results that align with your business objectives.
              </p>
            </div>
          </div>
          <hr />

          {/* FAQ Item 5 */}
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-base md:text-lg lg:text-xl font-medium">
              Where is your agency based?
            </div>
            <div className="collapse-content">
              <p className="text-sm md:text-base">
                Our head office is located on Campus KNUST.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq