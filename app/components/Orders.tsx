import { orders } from '@/utils/data'
import React from 'react'

const Orders = () => {
  return (
    <>
      <div className="bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat w-full h-screen absolute left-0 top-0 right-0 -z-50 opacity-90" />
      <div className="pt-14 md:pt-24">
        <h1 className="text-center text-3xl md:text-6xl  text-white font-bold pb-2 md:pb-8 border-b-2 w-fit mx-auto">Cara Order</h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 md:gap-4 p-1 sm:p-8 my-2 md:my-8">

          {orders.map(order => (
            <div key={order.id} className="text-center flex flex-col items-center justify-center gap-1 md:gap-2 text-white p-1.5 md:p-3 border-2 rounded-lg">
              <order.icon className="text-white" size={42} />
              <h1 className='text-xl md:text-2xl font-bold'>{order.title}</h1>
              <p className='text-md md:text-xl font-semibold'>{order.description}</p>
            </div>
          ))}

        </div>

      </div>
    </>
  )
}

export default Orders
