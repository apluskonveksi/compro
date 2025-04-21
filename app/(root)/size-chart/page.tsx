import Image from 'next/image'
import React from 'react'

const SizeChart = () => {
  return (
    <div className='w-full my-4 md:my-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Image src="/sc-kemeja.png" alt='size-chart-kemeja' width={1200} height={800} className='object-cover' priority={true} />
      </div>
    </div>
  )
}

export default SizeChart
