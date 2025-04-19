
import About from "../components/About";
import Hero from "../components/Hero";
import OurValue from "../components/OurValue";
import ProblemSolved from "../components/ProblemSolved";
import Product from "../components/Product";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* About */}
      <section>
        <About />
      </section>

      {/* Value */}
      <section>
        <OurValue />
      </section>

      {/* Problem Solved */}
      <section className="my-8 sm:my-14">
        <ProblemSolved />
      </section>

      {/* Product */}
      <section className="my-8 sm:my-14">
        <div className=" py-4 w-full border-b border-red-500">
          <h1 className="text-center  text-xl sm:text-2xl md:text-4xl  "><span className="font-bold text-[#1A202D]">PRODUK</span> KAMI</h1>
        </div>
        <div className="p-0 sm:p-8 mt-6">
          <Product />
        </div>
      </section>

      {/* Services */}
      <section className="my-8 sm:my-14">
        <div className=" py-4 w-full space-y-4">
          <h1 className="text-center  text-xl sm:text-2xl md:text-4xl  "><span className="font-bold border-b-2 border-red-500 pb-1 text-[#1A202D]">LAYANAN</span> KAMI</h1>
          <p className="text-center text-lg md:text-xl text-[#1A202D]">Aplus Konveksi hadir sebagai solusi terlengkap untuk kebutuhan produksi sandang
            dan promosi Anda.</p>
        </div>

        <div className="p-0 sm:p-8 mt-6">
          <Services />
        </div>
      </section>
    </>
  );
}
