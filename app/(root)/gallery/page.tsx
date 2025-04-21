import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Gallery = () => {
  return (
    <div className='w-full h-full min-h-screen flex items-center justify-center'>
      <div className='w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2'>
        <div className='w-full'>
          <h1 className='text-4xl md:text-6xl leading-relaxed pb-6 font-semibold'>PAGE IS UNDER CONSTRUCTION</h1>
          <Link href="/" className='w-fit mx-auto'>
            <Button variant="default" size="lg" className='rounded-full flex items-center justify-center' >Kembali</Button>
          </Link>
        </div>
        <Image src="/mn.jpg" alt='maintenance' width={1200} height={1200} priority={true} className='object-contain w-full mt-24 md:mt-0' />
      </div>

    </div>
  )
}

export default Gallery
