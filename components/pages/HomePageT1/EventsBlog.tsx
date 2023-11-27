import Image from "next/image";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { AiFillClockCircle } from "react-icons/ai";

const EventsBlog = () => {
  return (
    <div className="px-4 sm:px-10 items-center flex flex-col py-8 bg-[#d4e7f2]">
      <div className="flex flex-col items-center gap-2 my-10">
      <h3 className="text-[#1f3e61] font-bold text-xs">Events & Blog</h3>
        <h1 className="text-[#1f3e61] text-3xl lg:text-6xl font-bold">Our Event & Blog</h1>
      </div>
      <div className="flex xl:flex-row flex-col gap-6 mt-10">
        <div className="flex flex-col gap-6 items-center">

          <div className="flex flex-row items-center bg-white w-[300px] h-[200px] sm:w-[714px] sm:h-[247px] shadow-md">
            <div className="flex sm:flex-row">
              <div className="relative sm:w-[298px] sm:h-[247px] bg-[#b6c9c3]">
                <div className="object-cover">
                  <Image
                    src="/images/EventsBlog1.png"
                    alt="bg-vector"
                    fill={true}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:gap-4 p-8">
                <h1 className="sm:text-xl text-md text-theme-secondary font-bold">
                  Is Islam Old Philosophy?
                </h1>
                <div className="flex flex-row gap-10">
                  <div className="flex flex-row gap-2 items-center">
                    <div className="text-[#1f538e]">
                      <FaCalendarAlt size={17} />
                    </div>
                    <h3 className="sm:text-base text-xs place-self-center">Jan 6, 2022</h3>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <div className="text-[#1f538e]">
                      <FaUser size={17} />
                    </div>
                    <h3 className="sm:text-base text-xs place-self-center">Imam Ullah</h3>
                  </div>
                </div>
                <p className="sm:w-[324px] sm:text-sm text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <a href="" className="text-theme-secondary text-xs sm:text-sm">
                  View Details
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-row items-center bg-white w-[300px] h-[200px] sm:w-[714px] sm:h-[247px]  shadow-md">
            <div className="flex flex-row">
              <div className="relative sm:w-[298px] sm:h-[247px] bg-[#b6c9c3]">
                <div className="object-cover">
                  <Image
                    src="/images/EventsBlog2.png"
                    alt="bg-vector"
                    fill={true}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 p-8">
                <h1 className="sm:text-xl text-md text-theme-secondary font-bold">
                  Importance Of Namaz
                </h1>
                <div className="flex flex-row gap-10">
                  <div className="flex flex-row gap-2 items-center">
                    <div className="text-[#1f538e]">
                      <FaCalendarAlt size={17} />
                    </div>
                    <h3 className="sm:text-base text-xs place-self-center">Jan 8, 2022</h3>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <div className="text-[#1f538e]">
                      <FaUser size={17} />
                    </div>
                    <h3 className="sm:text-base text-xs place-self-center">Imam Ullah</h3>
                  </div>
                </div>
                <p className="sm:w-[324px] sm:text-sm text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <a href="" className="text-theme-secondary text-xs sm:text-sm">
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-9">
          <div className="flex flex-col md:flex-col xl:flex-col gap-9">
          <div className="relative overflow-hidden flex flex-row sm:w-[715px] sm:h-[149px] xl:w-[432px] xl:h-[149px] w-[300px] h-[120px] bg-white py-8 px-4 gap-6">
            <div className="object-cover">
              <Image
                src="/images/EventsBlog3.png"
                alt="bg-vector"
                fill={true}
              />
            </div>
            <div className="absolute flex flex-row gap-4">
              <div className="flex flex-col">
                <h1 className="sm:text-6xl text-4xl text-white font-bold">15</h1>
                <h3 className="sm:text-3xl text-xl text-white font-bold">Jan</h3>
              </div>
              <div className="flex flex-col gap-2 sm:gap-3">
                <h1 className="sm:text-2xl text-lg text-white font-bold">
                  Is Islam Old Philosophy?
                </h1>
                <div className="flex flex-row gap-2 sm:gap-6">
                  <div className="flex flex-row gap-1 items-center">
                    <div className="text-white">
                      <FaLocationPin size={17} />
                    </div>
                    <h3 className="place-self-center text-xs sm:text-base text-white">
                      Park Lane, London
                    </h3>
                  </div>
                  <div className="flex flex-row gap-1 items-center">
                    <div className="text-white">
                      <AiFillClockCircle size={17} />
                    </div>
                    <h3 className="place-self-center text-xs sm:text-base text-white">
                      Imam Ullah
                    </h3>
                  </div>
                </div>
                <a href="" className="text-white text-xs sm:text-sm">
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-row sm:w-[715px] sm:h-[149px] xl:w-[432px] xl:h-[149px] w-[300px] h-[120px] bg-white py-8 sm:px-4 sm:gap-6 shadow-md">
            <div className="flex flex-col px-3 sm:px-0">
                <h1 className="sm:text-6xl text-4xl text-theme-secondary font-bold">22</h1>
                <h3 className="sm:text-3xl text-xl text-theme-secondary font-bold">Jan</h3>
            </div>
            <div className="flex flex-col gap-2 sm:gap-3">
              <h1 className="sm:text-2xl text-lg text-theme-secondary font-bold">
                Is Islam Old Philosophy?
              </h1>
              <div className="flex flex-row gap-2 sm:gap-6">
                <div className="flex flex-row gap-1 items-center">
                  <div className="text-[#1f538e]">
                    <FaLocationPin size={17} />
                  </div>
                  <h3 className="place-self-center text-xs sm:text-base ">
                    Park Lane, London
                  </h3>
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <div className="text-[#1f538e]">
                    <AiFillClockCircle size={17} />
                  </div>
                  <h3 className="place-self-center text-xs sm:text-base">Imam Ullah</h3>
                </div>
              </div>
              <a href="" className="text-theme-secondary text-xs sm:text-sm">
                View Details
              </a>
            </div>
          </div>
          </div>
          <div className="flex flex-row sm:w-[715px] sm:h-[149px] xl:w-[432px] xl:h-[149px] w-[300px] h-[120px] bg-white py-8 sm:px-4 sm:gap-6 shadow-md">
            <div className="flex flex-col px-3 sm:px-0">
                <h1 className="sm:text-6xl text-4xl text-theme-secondary font-bold">26</h1>
                <h3 className="sm:text-3xl text-xl text-theme-secondary font-bold">Jan</h3>
            </div>
            <div className="flex flex-col gap-2 sm:gap-3">
              <h1 className="sm:text-2xl text-lg text-theme-secondary font-bold">
                Is Islam Old Philosophy?
              </h1>
              <div className="flex flex-row gap-2 sm:gap-6">
                <div className="flex flex-row gap-1 items-center">
                  <div className="text-[#1f538e]">
                    <FaLocationPin size={17} />
                  </div>
                  <h3 className="place-self-center text-xs sm:text-base ">
                    Park Lane, London
                  </h3>
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <div className="text-[#1f538e]">
                    <AiFillClockCircle size={17} />
                  </div>
                  <h3 className="place-self-center text-xs sm:text-base">Imam Ullah</h3>
                </div>
              </div>
              <a href="" className="text-theme-secondary text-xs sm:text-sm">
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsBlog;
