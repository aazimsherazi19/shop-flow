import React from 'react'
import { assets } from '../assets/assets'

const Banners3 = () => {
  return (
    <div className='w-full py-16 md:py-20 px-4 md:px-10'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row gap-6 h-100 overflow-hidden'>
            {/* left */}
           <div className='flex-1 h-full rounded-2xl p-6 bg-[#f2f2f2] flex flex-col'>

             <div className='w-[160px] md:w-[200px] lg:w-[240px]'>
                <img src={assets.Offer1} alt="" />
             </div>
             
             <div>
                <h3 className='text-3xl font-medium text-dark'>Get 30% Off Your First Order</h3>
                <p className='text-[#5E5E5E] text-md'>Exclusive welcome discount for new customers.</p>
             </div>
            
            <div>
              <button className="button">
                Unlock My Discount
              </button>
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Banners3
