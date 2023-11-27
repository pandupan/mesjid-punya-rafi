import EventsBlog from '@/components/pages/HomePageT1/EventsBlog'
import ContactUsHome from '@/components/pages/HomePageT1/ContactUsHome'
import HeroSectionHP from '@/components/pages/HomePageT1/HeroSectionHP'
import HistoryOfCenter from '@/components/pages/HomePageT1/HistoryOfCenter'
import NamazTimings from '@/components/pages/HomePageT1/NamazTimings'
import OurGallery from '@/components/pages/HomePageT1/OurGallery'
import PillarsOfIslam from '@/components/pages/HomePageT1/PillarsOfIslam'
import React from 'react'
import NewsLetter from '@/components/pages/HomePageT1/NewsLetter'

const page = () => {
  return (
    <>
      <HeroSectionHP/>
      <NamazTimings/>
      <HistoryOfCenter/>
      <PillarsOfIslam/>
      <OurGallery/>
      <EventsBlog/>
      <ContactUsHome/>
      <NewsLetter/>
    </>
  )
}

export default page
