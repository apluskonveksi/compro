import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { links } from '@/utils/data'
import Link from 'next/link'
import { Button } from '../ui/button'

const MobileNavbar = () => {
  return (
    <div className='w-full flex justify-between md:hidden py-4 px-2'>
      <Image src="/logo.png" width={120} height={100} priority={true} alt='logo-aplus-konveksi' className='object-cover' />
      <Sheet >
        <SheetTrigger asChild>
          <MenuIcon className='text-red-500' size={32} />
        </SheetTrigger>
        <SheetContent className='text-white bg-[#121212] border-none flex flex-col justify-between'>
          <SheetHeader className='hidden'>
            <SheetTitle></SheetTitle>
          </SheetHeader>
          <ul className='flex flex-col gap-4 pt-14'>
            {links.map((link, index) => (
              <li key={index} className='text-md px-2 border-b border-gray-500 pb-4 uppercase font-semibold'>
                <SheetClose asChild>
                  <Link href={link.href}>{link.name}</Link>
                </SheetClose>
              </li>
            ))}
          </ul>
          <div className='flex flex-col items-center gap-4 pb-4'>
            <p>Social Media</p>
            {/* SOSIAL MEDIA */}
            <div className='flex items-center justify-center gap-2'>
              <Link href="/" target='_blank' className='px-2'>
                <Image src="/instagram.png" width={30} height={30} alt='instagram' className='object-cover' />
              </Link>
              <Link href="/" target='_blank' className='px-2'>
                <Image src="/facebook.png" width={30} height={30} alt='instagram' className='object-cover' />
              </Link>
              <Link href="/" target='_blank' className='px-2'>
                <Image src="/youtube.png" width={30} height={30} alt='instagram' className='object-cover' />
              </Link>
            </div>
            <Link href="/">
              <Button variant="default" size="sm" className="cursor-pointer" >HUBUNGI KAMI</Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNavbar
