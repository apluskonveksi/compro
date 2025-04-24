import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { links } from '@/utils/data'
import MobileNavbar from './MobileNavbar'

const Navbar = () => {
  return (
    <>
      <div className='w-full hidden md:block'>
        <div className='bg-red-500 w-full  flex items-center justify-between px-2 py-2 md:px-12 lg:px-16 xl:px-24 2xl:px-32'>
          <div className=' text-white text-left s,:text-center'>APLUS KONVEKSI BANDUNG</div>
          <div className='hidden sm:flex items-center gap-4'>
            {/* SOSIAL MEDIA */}
            <div className='flex items-center justify-center gap-2'>
              <Link href="https://www.instagram.com/apluskonveksibandung" target='_blank' className='px-2'>
                <Image src="/instagram.png" width={20} height={20} alt='instagram' className='object-cover' />
              </Link>
              <Link href="https://www.facebook.com/aboyz.jjah" target='_blank' className='px-2'>
                <Image src="/facebook.png" width={20} height={20} alt='instagram' className='object-cover' />
              </Link>
              <Link href="https://youtube.com" target='_blank' className='px-2'>
                <Image src="/youtube.png" width={20} height={20} alt='instagram' className='object-cover' />
              </Link>
            </div>
            <Link href="https://wa.me/6282123322019?text=hi%20aplus%20konveksi" target='_blank'>
              <Button variant="default" size="sm" className="cursor-pointer" >HUBUNGI KAMI</Button>
            </Link>
          </div>
        </div>
        <div className='-w-full px-2 py-4 md:px-12 lg:px-16 xl:px-24 2xl:px-32'>
          <div className='w-full px-4 bg-white border-b border-[#121212] '>
            <div className='flex items-center justify-center p-4'>
              <Link href="/" >
                <Image src="/logo.png" width={200} height={200} priority={true} alt='logo-aplus-konveksi' className='object-cover px-4  ' />
              </Link>
            </div>
          </div>
          <ul className='w-full max-w-7xl mx-auto uppercase hidden md:flex justify-between gap- py-4'>
            {links.map((link, index) => (
              <li key={index} className='text-md lg:text-lg font-semibold text-[#1A202D]'>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}

          </ul>
        </div>
      </div>
      {/* Mobile Navbar */}
      <MobileNavbar />
    </>
  )
}

export default Navbar
