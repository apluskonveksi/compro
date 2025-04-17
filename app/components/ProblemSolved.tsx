import { X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ProblemSolved = () => {
  return (
    <>
      <div className='w-full h-full bg-[#1A202D] pt-8 px-4 relative overflow-hidden my-8 sm:my-14'>
        <div className='w-full flex flex-col sm:flex-row items-end sm:items-start justify-evenly gap-4 py-8 sm:py-14 '>
          <div>
            <h1 className="text-2xl md:text-4xl text-white">Kesulitan dalam <span className='text-red-500 font-semibold'>Pengadaan Seragam yang Ideal ?</span></h1>
            <div className='py-6 flex flex-col gap-4'>
              <div>
                <div className='flex items-start gap-2 w-full'>
                  <X className='text-red-400 w-5 h-5 bg-white p-0.5 rounded-full mt-1  ' />
                  <div className='w-full max-w-xl space-y-1.5'>
                    <h1 className='text-white font-semibold text-md sm:text-lg'>Pengiriman Tidak Tepat Waktu</h1>
                    <p className='text-gray-100 text-sm sm:text-md md:text-lg leading-relaxed'>Anda membutuhkan seragam yang siap digunakan untuk acara penting, namun proses produksi dan pengirimannya sering kali melewati tenggat yang telah ditentukan.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className='flex items-start gap-2 w-full'>
                  <X className='text-red-400 w-5 h-5 bg-white p-0.5 rounded-full mt-1 ' />
                  <div className='w-full max-w-xl space-y-1.5'>
                    <h1 className='text-white font-semibold text-md sm:text-lg'>Kualitas yang Tidak Konsisten</h1>
                    <p className='text-gray-100 text-sm sm:text-md md:text-lg leading-relaxed'>Seragam yang diterima tidak selalu sesuai dengan standar yang diharapkan—baik dari segi bahan, jahitan, maupun hasil akhir.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className='flex items-start gap-2 w-full'>
                  <X className='text-red-400 w-5 h-5 bg-white p-0.5 rounded-full mt-1  ' />
                  <div className='w-full max-w-xl space-y-1.5'>
                    <h1 className='text-white font-semibold text-md sm:text-lg'>Desain Kurang Merepresentasikan Brand</h1>
                    <p className='text-gray-100 text-sm sm:text-md md:text-lg leading-relaxed'>Desain seragam belum mampu merefleksikan identitas, visi, atau nilai dari perusahaan Anda secara optimal.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image src="/model-t.png" alt="model-image" width={250} height={250} className='-bottom-10 sm:-bottom-14 relative' priority={true} />
        </div>
      </div>
      <div className='py-8'>
        <h1 className="text-2xl md:text-4xl text-[#1A202D]">Yups, <span className='text-red-500 font-semibold'> Aplus Konveksi Solusinya!</span></h1>

      </div>
    </>
  )
}

export default ProblemSolved
