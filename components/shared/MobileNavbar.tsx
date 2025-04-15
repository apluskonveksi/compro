import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const MobileNavbar = () => {
  return (
    <div className='w-full flex justify-between md:hidden py-4 px-2'>
      <Image src="/logo.png" width={120} height={100} priority={true} alt='logo-aplus-konveksi' className='object-cover' />
      <div>
        <MenuIcon className='text-red-500' size={30} />
      </div>
    </div>
  )
}

export default MobileNavbar
