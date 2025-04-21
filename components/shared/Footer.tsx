"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { ArrowUp } from 'lucide-react';

const Footer = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };



  return (
    <>
      <div className='w-full text-center text-md text-white p-4 bg-red-500'>
        <h1>Aplus Konveksi Bandung - Copyright©2025</h1>
      </div>
      <div className='fixed bottom-14 right-4 z-50'>
        <div className='w-full flex items-center justify-between'>
          <div>
            {isVisible && (
              <motion.button
                onClick={scrollToTop}
                className="fixed bottom-14 left-4 z-50 rounded-full bg-[#121212] text-white p-3 shadow-lg hover:bg-red-700 transition-colors"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3 }}
                aria-label="Back to top"
              >
                <ArrowUp className="w-6 h-6" />
              </motion.button>
            )}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="https://wa.me/6282123322019?text=hi%20aplus%20konveksi" target='_blank'>
              <Image src="/whatsapp.png" alt='whatsapp' width={50} height={50} priority={true} className='object-cover ' />
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Footer
