import { Check, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ProblemSolved = () => {
  return (
    <>
      <div className='w-full h-full bg-[#1A202D] pt-8 px-4 relative overflow-hidden '>
        <div className='w-full flex flex-col sm:flex-row items-end sm:items-start justify-evenly gap-4 py-8 sm:py-14 '>
          <div>
            <h1 className="text-2xl md:text-4xl text-white">Kesulitan dalam <span className='text-red-500 font-semibold'>Pengadaan Seragam yang Ideal ?</span></h1>
            <div className='py-6 flex flex-col gap-4'>
              <div>
                <div className='flex items-start gap-2 w-full'>
                  <X className='text-red-400 w-5 h-5 bg-white p-0.5 rounded-full mt-1  ' />
                  <div className='w-full max-w-xl space-y-1.5'>
                    <h1 className='text-white font-semibold text-md sm:text-lg'>Pengiriman Tidak Tepat Waktu</h1>
                    <p className='text-gray-300 text-md md:text-lg leading-relaxed'>Anda membutuhkan seragam yang siap digunakan untuk acara penting, namun proses produksi dan pengirimannya sering kali melewati tenggat yang telah ditentukan.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className='flex items-start gap-2 w-full'>
                  <X className='text-red-400 w-5 h-5 bg-white p-0.5 rounded-full mt-1 ' />
                  <div className='w-full max-w-xl space-y-1.5'>
                    <h1 className='text-white font-semibold text-md sm:text-lg'>Kualitas yang Tidak Konsisten</h1>
                    <p className='text-gray-300 text-md md:text-lg leading-relaxed'>Seragam yang diterima tidak selalu sesuai dengan standar yang diharapkan—baik dari segi bahan, jahitan, maupun hasil akhir.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className='flex items-start gap-2 w-full'>
                  <X className='text-red-400 w-5 h-5 bg-white p-0.5 rounded-full mt-1  ' />
                  <div className='w-full max-w-xl space-y-1.5'>
                    <h1 className='text-white font-semibold text-md sm:text-lg'>Desain Kurang Merepresentasikan Brand</h1>
                    <p className='text-gray-300 text-md md:text-lg leading-relaxed'>Desain seragam belum mampu merefleksikan identitas, visi, atau nilai dari perusahaan Anda secara optimal.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image src="/model-t.png" alt="model-image" width={250} height={250} className='-bottom-10 sm:-bottom-14 relative' priority={true} />
        </div>
      </div>
      <div className='bg-gray-100 w-full py-14'>
        <div className=' w-full max-w-7xl mx-auto px-2'>
          <h1 className="text-2xl md:text-4xl text-[#1A202D]">Yups, <span className='text-red-500 font-bold'> Aplus Konveksi Solusinya!</span></h1>
          <div className='py-6 flex flex-col gap-4 '>
            <div>
              <div className='flex items-start gap-2 w-full'>
                <Check className='text-white w-5 h-5 bg-green-400 p-0.5 rounded-full mt-1  ' />
                <div className='w-fit space-y-1.5'>
                  <h1 className='text-[#1A202D] font-semibold text-md sm:text-lg'>Produksi & Pengiriman Tepat Waktu</h1>
                  <p className='text-gray-600 text-md md:text-lg leading-relaxed'>Kami memahami pentingnya ketepatan waktu, terutama untuk kebutuhan event atau keperluan operasional perusahaan. Karena itu, setiap pesanan dijadwalkan dan diproses secara efisien agar tiba sesuai waktu yang disepakati.</p>
                </div>
              </div>
            </div>
            <div>
              <div className='flex items-start gap-2 w-full'>
                <Check className='text-white w-5 h-5 bg-green-400 p-0.5 rounded-full mt-1 ' />
                <div className='w-fit space-y-1.5'>
                  <h1 className='text-[#1A202D] font-semibold text-md sm:text-lg'>Kualitas Konsisten & Terjamin</h1>
                  <p className='text-gray-600 text-md md:text-lg leading-relaxed'>Setiap seragam melewati proses produksi yang diawasi secara ketat, dengan standar quality control berlapis untuk memastikan hasil yang rapi, nyaman dipakai, dan sesuai ekspektasi.</p>
                </div>
              </div>
            </div>
            <div>
              <div className='flex items-start gap-2 w-full'>
                <Check className='text-white w-5 h-5 bg-green-400 p-0.5 rounded-full mt-1  ' />
                <div className='w-fit space-y-1.5'>
                  <h1 className='text-[#1A202D] font-semibold text-md sm:text-lg'>Desain yang Mewakili Identitas Brand Anda</h1>
                  <p className='text-gray-600 text-md md:text-lg leading-relaxed'>Tim desain kami siap membantu mewujudkan seragam yang tidak hanya menarik, tapi juga mencerminkan nilai, visi, dan citra perusahaan Anda.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProblemSolved
