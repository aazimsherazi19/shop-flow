import React from 'react'

const SectionTitle = ({ title, top }) => {
  return (
    <div className='text-center'>
        {top && <div className='px-3 py-1 border border-dark text-dark bg-transparent rounded-2xl text-[14px] inline font-light '>{top}</div>}
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mt-3'>{title}</h2>
    </div>
  )
}

export default SectionTitle
