import Navbar from "@/components/ui/Navbar"

import OrganicShowcaseCarousel from "@/components/ui/Banner"
import OrganicCarouselSlide from "@/components/ui/Slides"
import OrganicCarousel from "@/components/ui/Carousel"
import HeroSection from "@/components/ui/HeroSection"
import CustomCarousel from "@/components/ui/CustomCarousel"

export default function Home() {
  return (
    <main>

        {/* ----- NAVBAR ----- */}
        <Navbar/>

        {/* ----- CAROUSEL ----- */}
        {/* Banner.tsx */}
        {/* <OrganicShowcaseCarousel/> */}
        {/* Carousel.tsx */}
        {/* <OrganicCarousel/> */}
        {/* HeroSection.tsx */}
        {/* <HeroSection/> */}
        {/* CustomCarousel.tsx */}
        {/* <CustomCarousel/> */}

        {/* Slides.tsx  ----- SELECTED ----- */}
        <OrganicCarouselSlide/>
        
    </main>
  )
}
