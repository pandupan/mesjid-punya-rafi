import Image from "next/image";
import { FaLocationPin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { GrGooglePlus } from "react-icons/gr";
const NewsLetter = () => {
  return (
    <div className=" sm:px-8 md:px-22 xl:px-10 relative overflow-hidden flex flex-col w-full h-[800px] bg-hero-news">
      <div className="absolute container flex flex-col sm:py-12 py-4 md:px-0 xl:px-44 xl:container">
        <h3 className="text-white text-xs sm:text-sm font-semibold">
          Join Our
        </h3>
        <h1 className="text-white text-4xl sm:text-5xl font-bold">
          News Letter
        </h1>

        <div className="justify-end flex flex-row gap-8 xl:mr-0 sm:mr-16 sm:my-0 my-2">
          <a
            href=""
            className="xl:w-[300px]  w-[120px] h-[30px] sm:h-[44px] bg-white items-center flex justify-center rounded-md sm:rounded-xl"
          >
            <p className="text-theme-secondary sm:text-base text-xs place-self-center">
              Enter Email
            </p>
          </a>
          <a
            href=""
            className="xl:w-[150px] sm:w-[100px] w-[60px] h-[30px] sm:h-[44px] bg-white items-center flex justify-center rounded-md sm:rounded-xl"
          >
            <p className="text-theme-secondary sm:text-base text-xs place-self-center">
              Go
            </p>
          </a>
        </div>

        <p className="text-white sm:text-base text-xs sm:w-[450px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
        <div className="flex text-white flex-col sm:flex-row gap-4 sm:gap-12 xl:w-full sm:w-[500px] lg:w-[1000px] lg:gap-16 xl:gap-32 sm:mt-24 mt-8  ">
          <div className="flex flex-col gap-1 sm:gap-3 ">
            <h1 className="text-sm sm:text-2xl font-bold">Contact Us</h1>
            <div className="flex flex-row gap-3 justify-start">
              <FaLocationPin size={17} />
              <p className="text-xs sm:text-base font-light w-[180px] ">
                12345 ABCDE Ab.#1234 Place, FL 12345
              </p>
            </div>
            <div className="flex flex-row gap-3 items-center justify-start">
              <FaPhoneAlt size={12} />
              <p className="text-xs sm:text-base font-light">123-456-9870</p>
            </div>
            <div className="flex flex-row gap-3 items-center justify-start">
              <FaPhoneAlt size={12} />
              <p className="text-xs sm:text-base font-light">123-456-9870</p>
            </div>
            <div className="flex flex-row gap-3">
              <GrMail size={17} />
              <p className="text-xs sm:text-base font-light">
                info@mosqueonline
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:w-[179px] gap-2 ">
            <h1 className="text-sm sm:text-2xl font-bold">Quick Links</h1>
            <div className="flex flex-col font-light gap-1 sm:gap-2">
              <a href="" className="text-xs sm:text-base font-light">
                Home
              </a>
              <a href="" className="text-xs sm:text-base font-light">
                AboutUs
              </a>
              <a href="" className="text-xs sm:text-base font-light">
                Pillars of Islam
              </a>
              <a href="" className="text-xs sm:text-base font-light">
                Event & blog
              </a>
              <a href="" className="text-xs sm:text-base font-light">
                Gallery
              </a>
              <a href="" className="text-xs sm:text-base font-light">
                Contact
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:w-[179px] gap-2 ">
            <h1 className="text-sm sm:text-2xl font-bold">Quick Links</h1>
            <div className="flex flex-col font-light gap-2">
              <a href="" className="text-xs sm:text-base">
                Namaz Timings
              </a>
              <a href="" className="text-xs sm:text-base">
                FAQ
              </a>
            </div>
          </div>
          <div className="flex flex-col  xl:w-[149px]">
            <h1 className="text-sm sm:text-2xl font-bold">Follow Us</h1>
            <div className="flex flex-row gap-3 items-center mt-4">
              <a href=" ">
                <FaFacebookF size={15} />
              </a>
              <a href=" ">
                <FaTwitter size={15} />
              </a>
              <a href=" ">
                <FaInstagram size={15} />
              </a>
              <a href=" ">
                <TfiYoutube size={15} />
              </a>
              <a href=" ">
                <FaLinkedinIn size={15} />
              </a>
              <a href="">
                <GrGooglePlus size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-white sm:mt-4 mt-2 xl:mt-14"></div>
        <div className="text-center items-center justify-center flex flex-col mt-2 sm:mt-8">
          <h1 className=" text-white font-bold text-md sm:text-xl">
            TERMS & PRIVACY POLICY
          </h1>
          <p className="xl:w-[804px] sm:w-[600px] text-xs sm:text-sm xl:text-base text-white font-light">
            By accessing this Site, you accept the Mosques.online Terms and
            Conditions of Use. GeoTech acknowledges and honors the privacy of
            users of www.mosque.online and other services offered through this
            domain (the “Website”).
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
