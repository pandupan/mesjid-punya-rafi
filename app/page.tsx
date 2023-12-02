import AboutUs from '@/components/pages/LandingPage/AboutUs'
import ContactUs from '@/components/pages/LandingPage/ContactUs'
import HeroSectionLP from '@/components/pages/LandingPage/HeroSectionLP'
import ReceiveNews from '@/components/pages/LandingPage/ReceiveNews'
import SelectTheme from '@/components/pages/LandingPage/CekBrand'

export default function Home() {
  return (
   <>
    <HeroSectionLP/>
    <SelectTheme/>
    <AboutUs/>
    <ContactUs/>
    <ReceiveNews/>
   </>
  )
}
