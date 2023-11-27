import Image from "next/image";
const OurGallery = () => {
  return (
    <div className="relative px-4 sm:px-10 xl:container flex flex-col py-8 overflow-hidden ">
      <div className="absolute -top-80 -right-8 z-0">
        <div className="relative aspect-square w-[310px] h-[670px]">
          <Image src="/images/bg-vector-3-4.png" alt="bg-vector" fill={true} />
        </div>
      </div>
      <div className="flex flex-col items-center my-10">
        <h3 className="text-[#004B48] font-bold text-xs">Associated Mosque</h3>
        <h1 className="text-[#004B48] text-3xl lg:text-6xl font-bold">Our Gallery</h1>
      </div>
      <p className="text-center sm:w-[750px] place-self-center sm:text-base text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore.
      </p>
      <div className="flex flex-col sm:flex-row gap-8 mt-12 justify-center items-center">
        <div className="relative first-line:bg-[#b6c9c3] w-[288px] h-[270px] xl:w-[728px] sm:w-full sm:h-[328px] xl:h-[580px] lg:w-[500px] lg:h-[400px]">
          <div className="object-cover">
            <Image src="/images/Gallery1.png" alt="bg-vector" fill={true} />
          </div>
        </div>
        <div className="flex sm:flex-col flex-row sm:gap-6 gap-8">
          <div className="relative w-[130px] h-[100px] xl:w-[346px] sm:w-[200px] lg:w-[246px] sm:h-[152px] lg:h-[188px] xl:h-[277px] bg-[#b6c9c3]">
            <div className="object-cover">
              <Image src="/images/Gallery2.png" alt="bg-vector" fill={true} />
            </div>
          </div>
          <div className="relative w-[130px] h-[100px] xl:w-[346px] sm:w-[200px] lg:w-[246px] sm:h-[152px] lg:h-[188px] xl:h-[277px] bg-[#b6c9c3]">
            <div className="object-cover">
              <Image src="/images/Gallery3.png" alt="bg-vector" fill={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center ">
        <a href=" " className="bg-[#1DBBB4] sm:w-[154px] w-[120px] h-[30px] sm:h-[43px] justify-center items-center flex rounded-xl mt-2 place-self-center">
          <p className="place-self-center text-center sm:text-base text-sm">View More</p>
        </a>
      </div>
    </div>
  );
};

export default OurGallery;
