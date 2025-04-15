import Image from "next/image";

export default function Home() {
  return (
    <>
      <section>
        {/* Hero */}
        <div className="w-full h-full  pb-8">
          <Image src="/hero.jpg" alt="hero-image" width={1024} height={580} priority={true} className="w-full scale-95 object-cover " />
        </div>
      </section>
    </>
  );
}
