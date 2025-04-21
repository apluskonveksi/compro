"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

const Contact = () => {

  const pathname = usePathname()




  return (
    <div className='w-full'>
      {pathname !== '/kontak' && (
        <div className='p-4 text-center space-y-4'>
          <h1 className='text-2xl sm:text-2xl md:text-5xl pb-3'><span className='font-bold text-red-500 border-b-2 border-[#1A202D] pb-1 '>Hubungi</span> Kami</h1>
          <p className='text-md md:text-lg font-semibold text-[#1A202D]'>Hubungi kami melalui kontak di bawah ini untuk konsultasi, pemesanan, atau kerja sama.
            Tim kami akan merespons dengan cepat dan ramah.</p>
        </div>
      )}
      <div className='w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-start justify-center px-4 py-8'>
        {/* LEFT */}
        <div className='w-full'>
          <h1 className='py-3 text-lg font-semibold'>Info Kontak</h1>
          <div className='flex items-center gap-2 w-full max-w-[500px]'>
            {/* Icon */}
            <Image src="/tlp.png" alt='telp-icon' width={50} height={50} priority={true} className='object-cover' />
            <p className='text-md md:text-lg text-[#1A202D] font-semibold'>0821-2332-2019</p>
          </div>

          <div className='flex items-center gap-2 w-full max-w-[500px]'>
            {/* Icon */}
            <Image src="/email.png" alt='email-icon' width={50} height={50} priority={true} className='object-cover' />
            <p className='text-md md:text-lg text-[#1A202D] font-semibold'>cs.apluskonveksi@gmail.com</p>
          </div>

          <div className='flex items-center gap-2 w-full max-w-[500px]'>
            {/* Icon */}
            <Image src="/address.png" alt='address-icon' width={50} height={50} priority={true} className='object-cover' />
            <p className='text-md md:text-lg text-[#1A202D] font-semibold'>Jl.Arcamanik No.19 Bandung, Jawa-barat</p>
          </div>

          <div className='flex items-center gap-2 w-full max-w-[500px]'>
            {/* Icon */}
            <Image src="/ig.png" alt='instagram-icon' width={50} height={50} priority={true} className='object-cover' />
            <p className='text-md md:text-lg text-[#1A202D] font-semibold'>@apluskonveksi</p>
          </div>
        </div>

        {/* RIGHT INPUT FIELD*/}
        <div className='w-full mt-8 md:mt-0'>
          <h1 className='py-3 text-lg font-semibold'>Kirim Pesan</h1>
          <form className='w-full'>
            <div className='flex flex-col gap-1 w-full mb-3'>
              <label>Nama Lengkap</label>
              <input type="text" className='w-full px-3 py-2 max-w-[500px] border border-gray-400 rounded-md outline-none focus:border-red-400 focus:outline-none' />
            </div>

            <div className='flex flex-col gap-1 w-full mb-3'>
              <label>No.Handphone</label>
              <input type="number" className='w-full px-3 py-2 max-w-[500px] border border-gray-400 rounded-md outline-none focus:border-red-400 focus:outline-none' />
            </div>

            <div className='flex flex-col gap-1 w-full mb-3'>
              <label>Email</label>
              <input type="email" className='w-full px-3 py-2 max-w-[500px] border border-gray-400 rounded-md outline-none focus:border-red-400 focus:outline-none' />
            </div>

            <Button className='w-full max-w-[500px] bg-red-500 text-white hover:bg-red-600 transition-all duration-200 ease-in-out my-3 cursor-pointer'>Kirim Pesan</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
