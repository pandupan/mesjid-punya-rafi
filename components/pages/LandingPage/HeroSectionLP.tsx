import Image from "next/image";

const HeroSectionLP = () => {
  return (
    <div className="relative lg:mt-0 mt-[125px] w-full h-[558px] px-4 sm:px-10 flex flex-col gap-2 drop-shadow-lg py-20 justify-center bg-hero">
      <div className=" w-full px-4 sm:px-10 xl:container space-y-4">
        <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold max-w-[765px]">
          Konsumerisme Hati Nurani
        </h1>
        <h3 className="text-white text-base md:text-lg lg:text-2xl font-bold">
          Quran 5:2
        </h3>
        <p className="text-white text-sm lg:text-lg max-w-[680px] text-justify sm:text-left">
        &quot;Dan tolong-menolonglah kamu dalam (mengerjakan) kebajikan dan takwa, dan jangan tolong-menolong dalam berbuat dosa dan permusuhan.&quot;
        </p>
        <div>
          <a
            href="/#cekbrand"
            title="cekbrand"
            className="bg-[#66beee] px-10 py-4 rounded-xl mt-4 text-center"
          >
            Cek Brand
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionLP;
