import React from 'react'
import { assets } from '../assets/assets'

const Banners3 = () => {
  return (
    <section className="w-full py-16 md:py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* GRID LAYOUT (BEST PRACTICE) */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* 🔷 LEFT BIG CARD */}
          <div className="bg-[#f2f2f2] rounded-2xl p-6 flex flex-col justify-between min-h-[320px] md:min-h-[420px]">

            <img 
              src={assets.Offer1} 
              alt="" 
              className="w-[160px] md:w-[220px] object-contain"
            />

            <div className="mt-4">
              <h3 className="text-2xl md:text-3xl font-medium text-dark">
                Get 30% Off Your First Order
              </h3>
              <p className="text-[#5E5E5E] mt-2">
                Exclusive welcome discount for new customers.
              </p>
            </div>

            <button className="button mt-6 self-start">
              Unlock My Discount
            </button>
          </div>

          {/* 🔷 RIGHT SIDE (2 CARDS) */}
          <div className="grid grid-rows-2 gap-6">

            {/* TOP CARD */}
            <div className="bg-[#f2f2f2] rounded-2xl p-6 flex items-center justify-between min-h-[180px]">

              <div>
                <h3 className="text-xl md:text-2xl font-medium text-dark">
                  Coffee Table
                </h3>
                <p className="text-[#5E5E5E] mt-2 text-sm">
                  20 inches diameter Height 18 inches
                </p>

                <button className="button mt-4">
                  Shop Now
                </button>
              </div>

              <img 
                src={assets.Offer1} 
                alt="" 
                className="w-[120px] md:w-[160px] object-contain"
              />
            </div>

            {/* BOTTOM CARD */}
            <div className="bg-[#f2f2f2] rounded-2xl p-6 flex items-center justify-between min-h-[180px]">

              <div>
                <h3 className="text-xl md:text-2xl font-medium text-dark">
                  Coffee Table
                </h3>
                <p className="text-[#5E5E5E] mt-2 text-sm">
                  20 inches diameter Height 18 inches
                </p>

                <button className="button mt-4">
                  Shop Now
                </button>
              </div>

              <img 
                src={assets.Offer1} 
                alt="" 
                className="w-[120px] md:w-[160px] object-contain"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Banners3