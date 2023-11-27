'use client';

import Image from "next/image"
import Link from "next/link"
import Button from "../core/Button"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { InputAuth } from "../ui/inputAuth";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import ButtonFull from "../core/ButtonFull";
import { usePathname } from "next/navigation";
import { FaSun, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";
import { RiMoonFill } from "react-icons/ri";

const Navbar = () => {
  const pathname = usePathname()

  const [nav, setNav] = useState(false)
  const [isOpenLogin, setIsOpenLogin] = useState(false)
  const [isOpenSign, setIsOpenSign] = useState(false)

  const topNavRemider = ["/home"]


  function closeModalLogin() {
    setIsOpenLogin(false)
  }
  function closeModalSign() {
    setIsOpenSign(false)
  }

  function openModalLogin() {
    setIsOpenLogin(true)
    setIsOpenSign(false)
    setNav(false)
  }
  function openModalSign() {
    setIsOpenSign(true)
    setIsOpenLogin(false)
    setNav(false)
  }

  return (
    <> 
      {/* Top Nav Remider */}
      {topNavRemider.includes(pathname) && (
        <div className="hidden lg:flex flex-col justify-center items-end w-full h-full container mt-4 -mb-6">
          <div className="items-center  justify-between flex w-[730px] h-[50px]">
            <div className="flex gap-2">
              <FaSun size={20} className="text-theme"/>
              <p>Sunrise At : <span className="text-theme">6:10 AM</span></p>
            </div>
            <div className="flex gap-2">
              <RiMoonFill size={20} className="text-theme"/>
              <p>Sunset At : <span className="text-theme">3:55 PM</span></p>
            </div>
            <div className="flex items-center gap-4">
              <FaFacebookF size={20}/>
              <FaTwitter size={20}/>
              <FaInstagram size={20}/>
              <FaYoutube size={20}/>
              <FaLinkedinIn size={20}/>
              <FaGooglePlusG size={23}/>
            </div>

          </div>
          <div className="bg-gray-900 w-[730px] h-[2px] my-1"/>
        </div>
      )}
      {/* End Top Nav Remider */}

      {/* Navbar Desktop*/}  
      <div className="hidden lg:flex justify-between items-center w-full h-[125px] container">
        <div className="relative w-[90px] h-[90px]">
          <Link href="/">
            <Image 
              src="/images/logo.png"
              alt="logo"
              fill={true}
            />
          </Link>
        </div>
        <div className="flex items-center gap-12">
          <div className="flex gap-6 text-lg">
            <Link href="/home">Home</Link>
            <Link href="/#theme">Themes</Link>
            <Link href="/#about">About Us</Link>
            <Link href="/#contact">Contact</Link>
          </div>
          <div className="flex gap-6">
            <Button title="Login" onClick={openModalLogin}/>

            
            <Button title="Register" onClick={openModalSign}/>
          </div>
        </div>
      </div>
      {/*End Navbar Desktop*/}

      {/* Pop Over Modal Login*/}
      <Transition appear show={isOpenLogin} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalLogin}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                  <Dialog.Title
                    as="h3"
                    className="flex items-center justify-between px-4"
                  >
                    <div className="text-2xl font-bold">
                      LOGIN
                    </div>
                    <button>
                      <AiOutlineClose onClick={closeModalLogin} size={25} />
                    </button>
                  </Dialog.Title>

                    <div className="flex flex-col justify-center mt-4 gap-3 px-4">
                      <Label htmlFor="email">Email</Label>
                      <InputAuth type="email" placeholder="Your email" />
                      <Label htmlFor="password">Password</Label>
                      <InputAuth type="title" placeholder="**********" />
                      <div className="text-white items-center justify-center flex flex-col gap-[20px]">
                        <div className="space-x-2 mt-2">
                          <Checkbox id="terms1" />
                            <label
                              htmlFor="terms1"
                              className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black"
                            >
                              Remember me
                            </label>
                        </div>
                          <Link href="/home" onClick={closeModalLogin}>
                            <Button title="Login"/>
                          </Link>
                          
                          <Link href="/#contact" className="text-sm text-theme" onClick={closeModalLogin}>
                            Forgot Password?
                          </Link>
                          <div className="w-[85%] h-[1px] bg-theme mx-auto"/>

                        <div className="flex flex-col items-center justify-center text-black">
                          <p>Don&apos;t have an account?</p>
                          <button onClick={openModalSign} className="text-theme my-[15px]">Sign Up</button>
                        </div>
                        
                      </div>
                    </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/*End Pop Over Modal Login*/}

      {/* Pop Over Modal Sign*/}
      <Transition appear show={isOpenSign} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalSign}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                <Dialog.Title
                  as="h3"
                  className="flex items-center justify-between px-4"
                >
                  <div className="text-2xl font-bold">
                    SIGN UP
                  </div>
                  <button>
                    <AiOutlineClose onClick={closeModalSign} size={25} />
                  </button>
                </Dialog.Title>

                  <div className="flex flex-col justify-center mt-4 gap-3 px-4">
                    <Label htmlFor="name">Name</Label>
                    <InputAuth type="name" placeholder="Your Name" />
                    <Label htmlFor="email">Email</Label>
                    <InputAuth type="email" placeholder="Your email" />
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <InputAuth type="phone" placeholder="Your phone" />
                    <Label htmlFor="password">Password</Label>
                    <InputAuth type="title" placeholder="**********" />
                    <div className="text-white items-center justify-center flex flex-col gap-[20px]">
                      <div className="space-x-2 mt-2">
                        <Checkbox id="terms2" />
                          <label
                            htmlFor="terms1"
                            className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black"
                          >
                            I agree with <span className="text-theme">Terms</span> & <span className="text-theme">Privacy</span>
                          </label>
                      </div>
                        <Link href="/home" onClick={closeModalSign}>
                          <Button title="Sign Up"/>
                        </Link>

                        <div className="w-[85%] h-[1px] bg-theme mx-auto"/>

                      <div className="flex flex-col items-center justify-center text-black">
                        <p>Already have an account?</p>
                        <button onClick={openModalLogin} className="text-theme my-[15px]">Login</button>
                      </div>
                      
                    </div>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/*End Pop Over Modal Sign*/}

      {/* Hamburger On Mobile  */}
        <div className="fixed flex justify-between items-center w-full h-[125px] lg:hidden border-b border-theme px-[25px] bg-white z-10">
          <div className="relative w-[60px] h-[60px]">
            <Link href="/">
              <Image 
                src="/images/logo.png"
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
            <li><Link href="/home">Home</Link></li>
            <li><Link href="/#theme">Theme</Link></li>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul>
          <div className="w-full h-auto flex flex-col gap-4">
            <ButtonFull title="Sign Up" onClick={openModalSign}/>
            <ButtonFull title="Login" onClick={openModalLogin}/>
          </div>
        </div>
      </div> 
      {/* End Dropdown Menu Mobile */}

    </>
  )
}

export default Navbar
