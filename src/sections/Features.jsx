import React from 'react'
import { assets } from '../assets/assets.js'

const boxes = [
  { icon: assets.f1, heading: "Premium Materials", text: "Crafted with lasting quality" },
  { icon: assets.f2, heading: "Fast Delivery", text: "Quick and safe to your door." },
  { icon: assets.f3, heading: "Custom Options", text: "Fit your space, your way." },
  { icon: assets.f4, heading: "Easy Support", text: "Help is just a click away." },
];

const Features = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-8 sm:px-12 py-10 md:px-16 md:py-12 lg:px-20 lg: py-14'>
      {boxes.map((box, index)=> (
       <div key={index} className='px-2 py-4 flex items-center gap-4'>
             {/* Logo */}
         <div className='px-2 py-2 rounded-lg bg-primary '>
            <img src={box.icon} alt="" className='w-[25px] h-[25px]'/>
         </div>

         {/* Text */}
         <div className='flex flex-col '>
           <h3 className='font-medium text-[16px] md:text-[18px] lg:text-[21px] text-dark '>{box.heading}</h3>
           <p className='font-normal text-[12px] md:text-[14px] text-second'>{box.text}</p>
         </div>
      </div>
      ))}
      

    </div>
  )
}

export default Features
