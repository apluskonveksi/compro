import { services } from '@/utils/data'
import Image from 'next/image'
import React from 'react'


import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: '400'
});

const Services = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-8'>
      {services.map((service, index) => (
        <div key={index} className='flex flex-col sm:flex-row gap-4 border-b pb-4'>
          <Image src={service.cover} alt={service.title} width={200} height={150} priority={true} className='object-cover ' />
          <div className='space-y-2'>
            <h1 className='text-lg md:text-xl font-bold'>{service.title}</h1>
            <p className={`${poppins.className} text-[#1A202D]`}>{service.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Services
