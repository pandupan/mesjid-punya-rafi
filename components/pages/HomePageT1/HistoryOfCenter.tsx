import React from 'react'
import Image from 'next/image'

const HistoryOfCenter = () => {
  return (
    <div className="relative flex px-4 sm:px-10 xl:container lg:flex-row flex-col-reverse justify-center items-center gap-24 pt-20 pb-32">
    <div className="flex flex-col gap-3 sm:gap-4">
      <div>
      <h3 className='text-xs sm:text-sm xl:text-base font-bold'>
        Few Words About
      </h3>
    <h1 className="text-theme-secondary text-3xl sm:text-5xl xl:text-6xl font-bold">History Of Center</h1>
      </div>
      <p className="sm:w-[470px] mt-2 xl:mt-8 sm:text-base text-sm">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
      </p>
      <h2 className='font-bold sm:text-base text-sm'>
        The Mosque is the #1 Islamic Center in the Country!
      </h2>
      <div className='flex flex-row gap-28 sm:text-base text-sm ml-4 sm:ml-0'>
        <ul style={{ listStyleType: 'disc' }}>
          <li>Astonishing Facilities</li> 
          <li>Leads Charity Events</li>
          <li>Feeding Hungry People</li>
        </ul>
        <ul style={{ listStyleType: 'disc' }}>
          <li>Helping Communities</li>
          <li>Schooling Children</li>
          <li>Providing Homes</li>
        </ul>
      </div>
      <button className="bg-[#1DBBB4] w-[154px] h-[43px] rounded-xl mt-2">
      <a className="place-self-center">Learn More</a>
    </button>
    </div>

    <div className="relative border-4 border-[#0C7C95] w-[270px] h-[270px] sm:w-[470px] sm:h-[470px] lg:w-[400px] lg:h-[400px] xl:w-[523px] xl:h-[523px] ">
      <div>
      <div className="absolute -top-4 -left-4 lg:-left-14 lg:-top-8 sm:-top-10 sm:-left-10 z-0">
      <div className="relative aspect-square w-[270px] h-[270px] sm:w-[470px] sm:h-[470px] lg:w-[400px] lg:h-[400px] xl:w-[523px] xl:h-[523px]">
        <Image 
          src="/images/mosque2.png" 
          alt="bg-vector" 
          fill={true} />
      </div>
    </div>
      </div>
    </div>
    <div className="absolute -bottom-40 -left-8 z-0">
      <div className="relative aspect-square w-[270px] h-[610px]">
        <Image 
          src="/images/bg-vector-3-3.png" 
          alt="bg-vector" 
          fill={true} />
      </div>
    </div>
  </div>
  )
}

export default HistoryOfCenter
