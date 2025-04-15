import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='-w-full px-2 py-4 md:px-12 lg:px-16 xl:px-24 2xl:px-32'>
      <div className='w-full px-4 bg-white border-b-2 border-[#121212] '>
        <div className='flex items-center justify-center p-4'>
          <Link href="/" >
            <Image src="/logo.png" width={200} height={200} priority={true} alt='logo-aplus-konveksi' className='object-cover px-4  ' />
          </Link>
        </div>
      </div>
      <ul className='w-full max-w-7xl mx-auto uppercase flex justify-between gap- py-4'>
        <li className='text-xl'>
          <Link href="/">Home</Link>
        </li>
        <li className='text-xl'>
          <Link href="/">portfolio</Link>
        </li>
        <li className='text-xl'>
          <Link href="/">produk</Link>
        </li>
        <li className='text-xl'>
          <Link href="/">layanan</Link>
        </li>
        <li className='text-xl'>
          <Link href="/">gallery</Link>
        </li>
        <li className='text-xl'>
          <Link href="/">size chart</Link>
        </li>
        <li className='text-xl'>
          <Link href="/">Cara Order</Link>
        </li>
        <li className='text-xl'>
          <Link href="/">Kontak</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
