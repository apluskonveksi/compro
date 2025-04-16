import Image from 'next/image'


const Hero = () => {
  return (
    <section>
      <div className="w-full h-full pb-8 relative">
        <Image src="/hero.jpg" alt="hero-image" width={2024} height={1024} priority={true} className="w-full scale-100 md:scale-95 object-cover " />
      </div>
    </section>
  )
}

export default Hero
