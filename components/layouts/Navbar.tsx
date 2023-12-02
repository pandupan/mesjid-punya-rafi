'use client';

import Image from "next/image"
import Link from "next/link"
import Button from "../core/Button"
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import ButtonFull from "../core/ButtonFull";
import { usePathname } from "next/navigation";
import { FaSun, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";
import { RiMoonFill } from "react-icons/ri";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const pathname = usePathname()

  const [nav, setNav] = useState(false)

  const topNavRemider = ["/home"]

  const { data }: any = useSession();
  console.log(data);



  return (
    <> 
     
      {/* Navbar Desktop*/}  
      <div className="hidden lg:flex justify-between items-center w-full h-[125px] container">
        <div className="relative w-[90px] h-[90px]">
          <Link href="/">
            <Image 
              src="/images/LogoSemangka.jpeg"
              alt="logo"
              fill={true}
            />
          </Link>
        </div>
        <div className="flex items-center gap-12">
          <div className="flex gap-6 text-lg">
            <Link href="/#cekbrand">Cek Brand</Link>
            <Link href="/#about">About Us</Link>
            <Link href="/#contact">Contact</Link>
          </div>
          <div className="flex gap-6">
            {data ? (
              <Button title="Keluar" onClick={() => signOut()} />
            ) : (
              <Button title="Masuk" onClick={() => signIn()} />
            )}
            {data ? null : (
              <Link href="/register">
                <Button title="Daftar" />
              </Link>
            )}
          </div>
        </div>
      </div>
      {/*End Navbar Desktop*/}



      {/* Hamburger On Mobile  */}
        <div className="fixed flex justify-between items-center w-full h-[125px] lg:hidden border-b border-theme px-[25px] bg-white z-10">
          <div className="relative w-[60px] h-[60px]">
            <Link href="/">
              <Image 
                src="/images/LogoSemangka.jpeg"
                alt="logo"
                fill={true}
              />
            </Link>
          </div>
          {nav ? 
            <AiOutlineClose size={30} onClick={() => setNav(!nav)} className="text-theme" />
          : <AiOutlineMenu size={30} onClick={() => setNav(!nav)} className="text-theme" />
          }
        </div>
      {/* End Hamburger On Mobile  */}

      {/* Dropdown Menu Mobile */}
      <div className={
        nav ?
          "fixed lg:hidden top-[125px] left-0 right-0 bottom-0 flex justify-center items-center h-[100vh] bg-white ease-in-out duration-700 z-[80]"
        :
          "fixed lg:hidden top-[-200%] left-0 right-0 bottom-0 flex justify-center items-center h-[100vh] bg-white ease-in-out duration-700 z-[80]"
      }>
        <div className="w-full h-full px-[25px]">
          <ul className="space-y-5 text-lg my-6 px-1" onClick={() => setNav(!nav)}>
            <li><Link href="/#cekbrand">Cek Brand</Link></li>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul>
          <div className="w-full h-auto flex flex-col gap-4">
          {data ? (
              <ButtonFull title="Keluar" onClick={() => signOut()} />
            ) : (
              <ButtonFull title="Masuk" onClick={() => signIn()} />
            )}
            {data ? null : (
              <Link href="/register">
                <ButtonFull title="Daftar" />
              </Link>
            )}
          </div>
        </div>
      </div> 
      {/* End Dropdown Menu Mobile */}

    </>
  )
}

export default Navbar
