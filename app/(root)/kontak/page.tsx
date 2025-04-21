import Contact from '@/app/components/Contact'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

const ContactPage = () => {
  return (
    <>
      <div className='w-full h-[100px] md:h-[300px] flex items-center justify-center relative'>
        <div className="w-full h-full bg-[url('/bg-contact.jpg')]  bg-cover bg-center absolute top-0 left-0 -z-20 " />
        <div className="w-full h-full bg-gradient-to-t from-black/80 to-transparent absolute top-0 left-0 -z-10 " />
        <h1 className=' text-white text-xl md:text-4xl font-bold'>HUBUNGI KAMI</h1>
      </div>
      <div className='w-full h-full pt-0 md:pt-8'>
        <Contact />
      </div>
      {/* ACCORDION */}
      <div className='w-full  h-full mb-14 bg-gray-50 p-8'>
        <div className='w-full max-w-[1200px] mx-auto '>
          <h1 className='text-[#1A202D] text-lg md:text-4xl font-semibold w-full max-w-[530px]  py-8'>Tanyakan apa saja kepada kami, mungkin jawaban yang Anda cari sudah tersedia di bawah ini.</h1>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className='text-lg md:text-2xl'>Berapa minimum order?</AccordionTrigger>
              <AccordionContent className='text-md md:text-xl'>
                Minumin Order 24 PCS
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className='text-lg md:text-2xl'>Berapa lama waktu pengerjaan?</AccordionTrigger>
              <AccordionContent className='text-md md:text-xl'>
                Waktu Pengerjaan berdasarkan Model, Jumlah dan Tingkat Kesulitan, rata-rata proses pengerjaan 2 Minggu sampai 4 Minggu
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className='text-lg md:text-2xl'>Apa saja yang bisa diproduksi di Aplus Konveksi?</AccordionTrigger>
              <AccordionContent className='text-md md:text-xl'>
                Kemeja, Jacket, Polo Shirt, Seragam Kantor, Seragam Sekolah, Rompi, Wearpack, Kaos Sablon, Souvenir dan lainnya.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

    </>
  )
}

export default ContactPage
