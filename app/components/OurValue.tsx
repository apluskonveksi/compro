
import { Services } from '@/utils/data'
import React from 'react'

const OurValue = () => {
  return (
    <div className='w-full flex flex-col md:flex-row items-center gap-4 justify-center pb-8'>
      {Services.map((service, index) => (
        <div key={index} className='w-full border border-gray-300 p-4 rounded-lg shadow-md flex flex-col items-start gap-4'>
          <div className='space-y-1'>
            <service.icon className='text-red-500' size={42} />
            <h1 className='text-md md:text-lg lg:text-xl uppercase font-bold'  >{service.title}</h1>
          </div>
          <p className='text-[#333] leading-relaxed'>{service.description}</p>
        </div>
      ))}

    </div>
  )
}

export default OurValue
