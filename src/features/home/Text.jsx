import React from 'react'

const Text = ({ children, align }) => {
  return (
    <div className={`px-4 py-8 md:px-8 md:py-12 lg:px-24 lg:py-14 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <div className='px-3 py-1 border border-[#FFD6BA] text-dark bg-[#FEEFE3] rounded-2xl text-[14px] inline font-light '>Categories</div>
      <div className=' font-medium text-5xl mt-2 leading-[1.15]'>
      {children}
      </div>
    </div>
  )
}

export default Text
