import Image from "next/image";
import React from "react";

const SelectTheme = () => {
  return (
    <section id="cekbrand">
      <div className="relative flex flex-col w-full px-4 sm:px-10 xl:container justify-center items-center my-40">
        <h1 className="text-[#29895e] text-4xl md:text-6xl xl:text-7xl font-bold mx-auto px-2">
          CEK BRAND
        </h1>

        <p className="w-full text-justify sm:text-center mt-4 px-8 text-2xl">
          Sebuah platform yang mempromosikan konsumerisme hati nurani dengan
          mengidentifikasi / memfasilitasi akses ke informasi tentang perusahaan
          mana yang mendukung atau tidak mendukung Pendudukan Israel ilegal di
          Palestina.
        </p>
        <input
                className="p-4 mt-4 border-2 border-[#3fd592] rounded-full w-[200px] sm:w-[400px] lg:w-[700px]"
                type="cek"
                id="cek" 
                name="cek"
                placeholder="Cek disini"
              />
      </div>
    </section>
  );
};

export default SelectTheme;
