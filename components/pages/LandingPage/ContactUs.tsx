import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Button from "@/components/core/Button";


const ContactUs = () => {
  return (
    <section id="contact">
      <div className="relative h-auto w-full flex flex-col lg:flex-row px-4 sm:px-10 xl:container justify-center items-center gap-12 mt-6">

        <div className="relative border-4 border-[#29895e] w-[250px] h-[230px] sm:w-[395px] sm:h-[377px] xl:w-[595px] xl:h-[477px] mt-16 ">
          <div>
            <div className="absolute -top-5 sm:-top-10 -left-5 sm:-left-10 z-0">
              <div className="relative aspect-square  w-[250px] h-[230px] sm:w-[395px] sm:h-[377px] xl:w-[595px] xl:h-[477px]">
                <Image src="/images/mosque3.png" alt="bg-vector" fill={true} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 space-y-1">
          <h1 className="text-[#29895e] text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">Kontak Kami</h1>
          <Input type="email" placeholder="Alamat Email" />
          <Input type="title" placeholder="Title/Subject" />
          <Textarea placeholder="Masukan Pesan" />
          <Button title="Send"/>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
