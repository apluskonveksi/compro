import Orders from '@/app/components/Orders'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const CaraOrder = () => {
    return (
        <div className='my-4 md:my-8 w-full'>
            <div className='py-8 sm:py-14 w-full h-full relative my-8 sm:my-14 flex flex-col items-center justify-center'>
                <Orders />
                <Link href="/kontak" className='bg-red-500 text-[#1A202D] rounded-md mt-4 transition-colors'>
                    <Button variant="outline" size="lg" className='text-lg cursor-pointer shadow-lg' >Hubungi Kami</Button>
                </Link>
            </div>
        </div>
    )
}

export default CaraOrder
