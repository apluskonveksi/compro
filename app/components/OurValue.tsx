import { Handshake, PencilRuler } from 'lucide-react'
import React from 'react'

const OurValue = () => {
  return (
    <div className='w-full flex items-center gap-4 justify-center pb-8'>
      <div className='w-full border border-gray-300 p-4 rounded-lg shadow-md flex flex-col items-start gap-4'>
        <PencilRuler className='text-red-500' size={62} />
        <h1 className='text-md md:text-lg lg:text-xl uppercase font-bold'  >Professional</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ea assumenda, provident labore inventore pariatur accusamus magnam voluptatem perspiciatis. Ratione, repellendus, ducimus similique tempore impedit facilis odio enim numquam, molestias reprehenderit veritatis quas aut? Dicta tenetur illum impedit ipsam quidem saepe aliquid sint, vero aperiam laborum, amet possimus voluptatem omnis.</p>
      </div>
      <div className='w-full border border-gray-300 p-4 rounded-lg shadow-md flex flex-col items-start gap-4'>
        <Handshake className='text-red-500' size={62} />
        <h1 className='text-md md:text-lg lg:text-xl uppercase font-bold'  >Terpercaya</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ea assumenda, provident labore inventore pariatur accusamus magnam voluptatem perspiciatis. Ratione, repellendus, ducimus similique tempore impedit facilis odio enim numquam, molestias reprehenderit veritatis quas aut? Dicta tenetur illum impedit ipsam quidem saepe aliquid sint, vero aperiam laborum, amet possimus voluptatem omnis.</p>
      </div>
      <div className='w-full border border-gray-300 p-4 rounded-lg shadow-md flex flex-col items-start gap-4'>
        <PencilRuler className='text-red-500' size={62} />
        <h1 className='text-md md:text-lg lg:text-xl uppercase font-bold'  >Professional</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ea assumenda, provident labore inventore pariatur accusamus magnam voluptatem perspiciatis. Ratione, repellendus, ducimus similique tempore impedit facilis odio enim numquam, molestias reprehenderit veritatis quas aut? Dicta tenetur illum impedit ipsam quidem saepe aliquid sint, vero aperiam laborum, amet possimus voluptatem omnis.</p>
      </div>
    </div>
  )
}

export default OurValue
