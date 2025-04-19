import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='w-full text-center text-md text-white p-4 bg-red-500'>
                <h1>Aplus Konveksi Bandung - Copyright©2025</h1>
            </div>
            <div className='fixed bottom-14  right-4 z-50'>
                <Link href="https://wa.me/6282123322019?text=hi%20aplus%20konveksi" target='_blank'>
                    <Image src="/whatsapp.png" alt='whatsapp' width={50} height={50} priority={true} className='object-cover ' />
                </Link>
            </div>
        </>
    )
}

export default Footer
