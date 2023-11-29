import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Button from "@/components/core/Button";

const ContactUsHome = () => {
  return (
      <section id="contact">
        <div className="relative bg-[#d4e7f2] h-auto w-full py-10 flex flex-col lg:flex-row px-4 sm:px-10  justify-center items-center gap-12">

          <div className="relative border-4 border-[#3479b2] w-[295px] h-[277px] sm:w-[395px] sm:h-[377px] lg:w-[595px] lg:h-[477px] mt-16">
            <div className="absolute -top-5 sm:-top-10 -left-5 sm:-left-10 z-0">
              <div className="relative aspect-square  w-[295px] h-[277px] sm:w-[395px] sm:h-[377px] lg:w-[595px] lg:h-[477px]">
                <Image src="/images/mosque3.png" alt="bg-vector" fill={true} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 space-y-1 bg-[#d4e7f2] z-[1]">
            <h1 className="text-[#3479b2] text-4xl md:text-6xl lg:text-7xl font-bold">Contact Us</h1>
            <Input type="email" placeholder="Email address" />
            <Input type="title" placeholder="Title/Subject" />
            <Textarea placeholder="Write your message.." />
            <Button title="Send"/>
          </div>

        </div>
      </section>
  );
};

export default ContactUsHome;
