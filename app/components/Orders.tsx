import { orders } from '@/utils/data'
import React from 'react'

import { Poppins } from "next/font/google";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const poppins = Poppins({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: '400'
});

const Orders = () => {
  return (
    <div className='w-full min-h-screen relative overflow-hidden'>
      <div className="bg-[url('/bg.png')]  bg-right bg-cover w-full h-full absolute left-0 top-0 right-0 -z-50 opacity-90" />
      <div className="pt-14 md:pt-24">
        <h1 className="text-center text-3xl md:text-6xl text-[#222] font-extrabold md:text-white pb-2 md:pb-8 border-b-2 w-fit mx-auto">Cara Order</h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 md:gap-4 p-1 sm:p-8 my-2 md:my-8">

          {orders.map(order => (
            <div key={order.id} className="text-center flex flex-col items-center justify-center gap-1 md:gap-2 text-white p-1.5 md:p-3 border-2 rounded-lg">
              <order.icon className="text-white" size={42} />
              <h1 className='text-lg md:text-2xl font-bold'>{order.title}</h1>
              <p className={`${poppins.className} text-md md:text-lg `}>{order.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='py-4 flex flex-col items-center justify-center'>
        <h1 className="text-center text-3xl py-12 md:text-6xl  text-white font-bold pb-2 md:pb-8 border-b-2 w-fit mx-auto">DTF PRINTING </h1>
        <div className='w-fit mx-auto py-4'>
          <Image src="/cara-order.jpeg" alt="dtf" width={1080} height={1920} priority={true} className=' object-contain' />
        </div>
        <Link href="/kontak" className='bg-red-500 text-[#1A202D] rounded-md mt-4 transition-colors'>
          <Button variant="outline" size="lg" className='text-lg cursor-pointer shadow-lg' >Hubungi Kami</Button>
        </Link>
      </div>

    </div>
  )
}

export default Orders
