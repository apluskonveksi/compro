import { products } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const Product = () => {
  return (
    <div className='my-4 md:my-8 '>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {products.map((product) => (
          <div key={product.id} className='w-full'>
            <Image src={product.cover} alt={product.title} width={1200} height={800} priority={true} className='object-contain w-full cursor-not-allowed' />
            <div className='bg-red-500 text-white w-full flex items-center justify-center py-2'>
              <p className='text-lg md:text-xl font-semibold'>{product.title}</p>
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}

export default Product
