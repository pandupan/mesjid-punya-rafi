import Image from "next/image";
const AboutUs = () => {
  return (
    <section id="about">
      <div className="relative flex px-4 sm:px-10 xl:container flex-col-reverse lg:flex-row-reverse justify-center items-center gap-12 pt-16 pb-24">
        <div className="flex flex-col gap-6 sm:gap-4 bg-white z-[1] px-2 sm:px-0">
          <h1 className="text-[#3479b2] text-4xl md:text-6xl xl:text-7xl font-bold">
            Tentang Kami
          </h1>
          <div className="flex flex-col gap-4 ">
          <p className="max-w-[394px] text-sm xl:text-base text-justify">
            Kami adalah platform yang berkomitmen untuk mempromosikan
            konsumerisme hati nurani dengan memberikan akses informasi tentang
            dukungan atau ketidaksetujuan perusahaan terkait Pendudukan Israel
            ilegal di Palestina.
          </p>
          <p className="max-w-[394px] text-sm xl:text-base text-justify">
            Visi kami adalah menciptakan transparansi dan kesadaran bagi
            konsumen agar dapat membuat pilihan berdasarkan nilai-nilai etika
            dan moral dalam dukungan mereka terhadap perusahaan.
          </p>
          <p className="max-w-[394px] text-sm xl:text-base text-justify">
            Kami mengumpulkan dan menyajikan informasi terkait dukungan
            perusahaan terhadap isu global ini, sehingga konsumen dapat membuat
            keputusan yang tercerahkan dan sejalan dengan nilai-nilai
            kemanusiaan.
          </p>
          </div>
        </div>

        <div className="relative border-4 border-[#3479b2] w-[250px] h-[230px] sm:w-[395px] sm:h-[377px] xl:w-[595px] xl:h-[477px] bg-white z-[1]">
          <div>
            <div className="absolute -top-5 sm:-top-10 -left-5 sm:-left-10 z-0">
              <div className="relative aspect-square w-[250px] h-[230px] sm:w-[395px] sm:h-[377px] xl:w-[595px] xl:h-[477px]">
                <Image src="/images/mosque1.png" alt="bg-vector" fill={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
