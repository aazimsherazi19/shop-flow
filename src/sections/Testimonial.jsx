import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'

const Testimonial = ({ forceCarousel = false }) => {

  const testimonials = [
    {
      name: "John Doe",
      designation: "CEO, Company A",
      feedback: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.",
      bannerImg: assets.T1,
      personImg: assets.Person1,
      star: 5
    },
    {
      name: "John Doe",
      designation: "Sales Manager, Company B",
      feedback: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.",
      bannerImg: assets.T2,
      personImg: assets.Person2,
      star: 5
    },
    {
      name: "John Doe",
      designation: "Founder, Company C",
      feedback: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.",
      bannerImg: assets.T3,
      personImg: assets.Person3,
      star: 5
    }
  ]

  // ✅ latest 3
  const latest = testimonials.slice(-3)

  // ✅ carousel state
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % latest.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [latest.length])

  return (
    <section className='py-16 md:py-20 px-4 md:px-10 w-full'>
      <div className='max-w-6xl mx-auto'>

        {/* 🔷 DESKTOP GRID (ONLY when NOT forced carousel) */}
        {!forceCarousel && (
          <div className="hidden md:flex flex-col gap-6">

            {latest.map((testimonial, index)=> (
              <div
                key={index}
                className='grid md:grid-cols-2 gap-6 bg-[#f5f5f5] rounded-2xl p-6 items-center'
              >

                {/* IMAGE */}
                <div className={`${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <img
                    src={testimonial.bannerImg}
                    alt=""
                    className='w-full h-[260px] object-cover rounded-xl'
                  />
                </div>

                {/* TEXT */}
                <div className='flex flex-col gap-4'>

                  <div>
                    {[...Array(testimonial.star)].map((_, i)=> (
                      <span key={i} className='text-yellow-500 text-lg'>★</span>
                    ))}
                  </div>

                  <p className='text-dark text-sm md:text-base'>
                    {testimonial.feedback}
                  </p>

                  <div className='flex items-center gap-3'>
                    <img
                      src={testimonial.personImg}
                      alt=""
                      className='w-12 h-12 rounded-full object-cover'
                    />

                    <div>
                      <h3 className='font-bold text-dark'>
                        {testimonial.name}
                      </h3>
                      <p className='text-primary text-xs md:text-sm'>
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

        {/* 🔷 CAROUSEL (mobile OR forced) */}
        <div className={`${forceCarousel ? "block" : "md:hidden"} overflow-hidden`}>
        <h2 className='text-3xl font-medium text-gray text-center mb-3'>What Our Customers Says <br/>About Us</h2>
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {latest.map((testimonial, index)=> (
              <div key={index} className="min-w-full px-2">

                <div className="bg-[#f5f5f5] rounded-2xl p-6">

                  <div>
                    {[...Array(testimonial.star)].map((_, i)=> (
                      <span key={i} className='text-yellow-500'>★</span>
                    ))}
                  </div>

                  <p className='mt-4 text-sm'>
                    {testimonial.feedback}
                  </p>

                  <div className='flex items-center gap-3 mt-4'>
                    <img
                      src={testimonial.personImg}
                      alt=""
                      className='w-12 h-12 rounded-full object-cover'
                    />

                    <div>
                      <h3 className='font-bold'>
                        {testimonial.name}
                      </h3>
                      <p className='text-primary text-xs'>
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>

          {/* DOTS */}
          <div className="flex justify-center mt-4 gap-2">
            {latest.map((_, i)=> (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  current === i ? "bg-primary scale-110" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default Testimonial