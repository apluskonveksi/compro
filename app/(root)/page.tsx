
import About from "../components/About";
import Hero from "../components/Hero";
import OurValue from "../components/OurValue";
import ProblemSolved from "../components/ProblemSolved";
import Product from "../components/Product";

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
      <OurValue />
      {/* Problem Solved */}
      <section className="my-8 sm:my-14">
        <ProblemSolved />
      </section>
      <section className="my-8 sm:my-14">
        <div className=" py-4 w-full border-b border-red-500">
          <h1 className="text-center  text-xl sm:text-2xl md:text-4xl font-bold ">PRODUK KAMI</h1>
        </div>
        <div className="p-0 sm:p-8 mt-6">
          <Product />
        </div>
      </section>
    </>
  );
}
