import { products } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const Product = () => {
  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center'>
      {products.map((product) => (
        <div key={product.id} className='w-full'>
          <Image src={product.cover} alt={product.title} width={450} height={450} priority={true} className='object-contain w-full cursor-not-allowed' />
          <div className='bg-red-500 text-white w-full flex items-center justify-center py-2'>
            <p className='text-lg md:text-xl font-semibold'>{product.title}</p>
          </div>
        </div>

      ))}
    </div>
  )
}

export default Product
