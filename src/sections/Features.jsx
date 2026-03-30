import React from 'react'
import { assets } from '../assets/assets.js'



const Features = ({ boxes }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 px-4 py-8 sm:px-12 py-10 md:px-16 md:py-12 lg:px-20 lg: py-14'>
      {boxes.map((box, index)=> (
       <div key={index} className='px-2 py-4 flex items-center gap-4 justify-center'>
             {/* Logo */}
         <div className='px-2 py-2 rounded-lg bg-primary '>
            <img src={box.icon} alt="" className='w-[25px] h-[25px]'/>
         </div>

         {/* Text */}
         <div className='flex flex-col '>
           <h3 className='font-medium text-[16px] md:text-[18px] text-dark'>{box.heading}</h3>
           <p className='font-normal text-[12px] md:text-[12px] text-second'>{box.text}</p>
         </div>
      </div>
      ))}
      

    </div>
  )
}

export default Features
