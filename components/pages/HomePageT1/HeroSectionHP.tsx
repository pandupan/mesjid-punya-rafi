import Image from "next/image"

const HeroSectionHP = () => {
  return (
    <div className="relative lg:mt-0 mt-[125px] w-full h-[558px] px-4 sm:px-10 flex flex-col gap-2 drop-shadow-lg py-20 justify-center bg-hero-hp">
      <div className="absolute flex flex-col justify-center items-center place-self-center">
      <h1 className="text-white px-4 sm:px-0 text-4xl md:text-6xl lg:text-7xl text-center font-bold max-w-[900px]">
        Indeed, Allah defends those who have believed
      </h1>
      <h3 className="text-white text-base md:text-lg lg:text-xl font-bold mt-10">QURAN (22:38)</h3>
      </div>
    </div>
  )
}

export default HeroSectionHP