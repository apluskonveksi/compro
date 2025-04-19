import Image from 'next/image'
import React from 'react'

import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: '400'
});

const About = () => {
  return (

    <div className='my-4 md:my-8 '>
      <h1 className='text-xl sm:text-2xl md:text-4xl text-[#1A202D] my-4 text-center md:text-left'><span className='font-bold border-b-2 border-red-500 pb-1'>Tentang</span> Kami</h1>
      <div className='flex items-start justify-center gap-1 flex-col md:flex-row'>
        <div className={`${poppins.className} antialiased w-full max-w-4xl px-2 text-gray-600 text-md md:text-lg leading-relaxed`}>
          <p>Aplus Konveksi adalah mitra terpercaya dalam dunia konveksi yang berkomitmen tinggi untuk memberikan hasil produksi yang tidak hanya sesuai pesanan, tetapi juga unggul dalam hal kualitas dan ketepatan waktu. Kami memahami bahwa setiap produk yang kami hasilkan mencerminkan identitas brand klien, oleh karena itu kami selalu menjunjung tinggi standar mutu dalam setiap proses produksi.</p>
          <br />
          <p>Kami didukung oleh tim profesional yang ahli di bidangnya. Tim teknis kami terdiri dari tenaga potong kain, penjahit, hingga quality control (QC) yang telah melalui proses seleksi ketat dan mendapatkan pelatihan secara berkala untuk menjamin hasil yang presisi dan rapi. Tidak hanya itu, tim manajemen kami—yang mencakup desainer, konten kreator, tim pemasaran, admin, serta keuangan—juga merupakan individu-individu berpengalaman dan berdedikasi untuk mendukung kelancaran setiap proyek secara menyeluruh.</p>
          <br />
          <p>Seluruh proses produksi Aplus Konveksi berada di bawah naungan Aplus Multi Kreasi, sebuah perusahaan yang bergerak di bidang industri kreatif dan manufaktur. Dengan sistem kerja yang terstruktur dan diawasi melalui pendampingan sesuai standar industri, kami memastikan setiap tahapan produksi—mulai dari perencanaan desain, pemilihan bahan, proses produksi hingga pengemasan—berjalan dengan profesional, efisien, dan terkurasi dengan baik.</p>
          <br />
          <p> Komitmen kami tidak hanya berhenti pada hasil akhir yang memuaskan, namun juga pada pelayanan yang komunikatif, fleksibel, dan mengedepankan kebutuhan klien. Dengan semangat kolaborasi dan inovasi, Aplus Konveksi siap menjadi bagian dari kesuksesan brand Anda melalui produk-produk yang berkualitas dan terpercaya.</p>
        </div>
        <div className='w-fit mx-auto'>
          <Image src="/about.png" alt="Aplus Konveksi" width={500} height={400} priority={true} className='object-cover ' />
        </div>
      </div>
    </div>

  )
}

export default About
