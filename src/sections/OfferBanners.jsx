import React from 'react'

const OfferBanners = () => {
  return (
    <section className='w-full px-4 py-8 md:px-6 lg:px-10 lg:py-10 xl:px-14 lg:py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-8 py-8 md:px-10 md:py-12 lg:px-12 lg:py-20 '>
         <div>
             <div className='aspect-[1/1] relative h-[100px] min-w-[240px] rounded-tl-2xl overflow-hidden group cursor-pointer bg-primary px-3 py-6 text-center'>
              <h3 className='font-semibold text-white text-xl'>New Member Discount</h3>
          </div>

          <div>
            {/* <div className='aspect-[1/2] relative h-[420px]  min-w-[240px] rounded-l-2xl overflow-hidden group cursor-pointer bg-[#1C2533] px-3 py-10 text-center flex flex-col justify-center items-center'>
            <h3 className='absolute top-12 text-5xl md:text-7xl   font-bold text-transparent text-stroke opacity-60'>45% OFF</h3>
            <h3 className='text-5xl md:text-7xl  font-bold text-white z-10'>45% OFF</h3>
            <h3 className='absolute bottom-12 text-5xl md:text-7xl font-bold text-white text-stroke opacity-60'>45% OFF</h3>
            <p className='text-primary font-light '>Coupon Code ?</p>
          </div> */}
          <div className="aspect-[1/2] relative h-[420px] min-w-[240px] rounded-bl-2xl overflow-hidden group cursor-pointer bg-[#1C2533] px-3 py-14">

  {/* CENTER CONTENT */}
  <div className="flex flex-col justify-center items-center h-full text-center">
    
    <h3 className="absolute top-12 text-5xl md:text-7xl font-bold text-transparent text-stroke opacity-60">
      45% OFF
    </h3>

    <h3 className="text-5xl md:text-7xl font-bold text-white z-10">
      45% OFF
    </h3>

    <h3 className="absolute bottom-20 text-5xl md:text-7xl font-bold text-transparent text-stroke opacity-60">
      45% OFF
    </h3>

  </div>

  {/* BOTTOM CONTENT */}
  <div className="absolute bottom-4 left-0 w-full flex flex-col items-center gap-3">
    
    <p className="text-primary font-light text-sm">
      Coupon Code: KFIS04LKF
    </p>

    <button className="bg-primary text-white px-4 py-2 rounded-full text-sm hover:opacity-90 transition">
      Shop Now
    </button>

  </div>

</div>
          </div>

         </div>

         <div>
            
         </div>
        </div>
      
    </section>
  )
}

export default OfferBanners
