import Image from "next/image";
import React from "react";

const SelectTheme = () => {
  return (
    <section id="theme">
      <div className="relative flex flex-col w-full px-4 sm:px-10 xl:container justify-center items-center my-20">

        <h1 className="text-[#3479b2] text-4xl md:text-6xl xl:text-7xl font-bold mx-auto px-2">Select a Theme</h1>
        
        <p className="w-full text-justify sm:text-center mt-4 px-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        

        <div className="hidden sm:block absolute -bottom-0 -right-20 z-[-1]">
          <div className="relative aspect-square w-[608px] h-[656px]">
            <Image
              src="/images/bg-vector-3-1.png"
              alt="bg-vector"
              fill={true}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default SelectTheme;
