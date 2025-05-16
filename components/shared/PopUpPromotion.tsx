"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

const PopUpPromotion = () => {

  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 1500) // 1.5 detik
    return () => clearTimeout(timer)
  }, [])

  if (!showPopup) return null


  return (
    <div className=' top-0 fixed bottom-0 right-0 left-0 z-50 p-4 w-full flex items-center justify-center h-screen bg-black/50 overflow-hidden'>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <Card className={clsx(
          'w-full md:w-[850px] transform transition-all duration-300 ease-linear',
          showPopup ? 'opacity-100 ' : 'opacity-0 '
        )}>
          <CardHeader className='hidden'>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
          </CardHeader>
          <CardContent>
            <Image src="/promo.png" alt="promo-banner" width={1080} height={1080} priority={true} />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button className='cursor-pointer' onClick={() => setShowPopup(false)} variant="outline">Close</Button>
            <Link className='cursor-pointer' href="https://wa.me/6282123322019?text=hi%20aplus%20konveksi" target='_blank'>
              <Button className='cursor-pointer'>ORDER SEKARANG</Button>
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}

export default PopUpPromotion
