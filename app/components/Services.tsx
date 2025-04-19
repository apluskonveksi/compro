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
    <div className='flex flex-wrap gap-6 py-8'>
      {services.map((service, index) => (
        <div key={index} className='flex flex-col bg-gray-50 pb-4 w-[350px] mx-auto shadow-md rounded-b-lg'>
          <Image src={service.cover} alt={service.title} width={200} height={150} priority={true} className='object-cover w-full ' />
          <div className='space-y-2 p-2'>
            <h1 className='text-lg md:text-xl font-bold uppercase'>{service.title}</h1>
            <p className={`${poppins.className} text-[#1A202D]`}>{service.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Services
