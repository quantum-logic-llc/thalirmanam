import HeaderOne from '../src/components/sections/headers/headerOne'
import FooterOne from '../src/components/sections/footers/footerOne'
import HeroCarousel from '../src/components/sections/heros/heroCarousel'
import ServicesOne from '../src/components/sections/services/servicesOne'
import ServicesGrid from '../src/components/sections/services/servicesGrid'
import Gallery from '../src/components/sections/gallery/gallery'
import CommitmentBanner from '../src/components/sections/commitmentBanner'
import FaqComp from '../src/components/sections/faqComp'
import Teams from '../src/components/sections/teams/teams'
import WhoWeServe from '../src/components/sections/whoWeServe'
// import FocusAreas from '../src/components/sections/focusAreas'
import WhyChooseUs from '../src/components/sections/whyChooseUs'
import HelpContactSection from '../src/components/sections/helpContactSection'
import Testimonial from '../src/components/sections/testimonial'

import AgeOne from '../src/components/sections/studentsAge/ageOne'

import { getPageSEO } from '../src/lib/seo-config'

export const metadata = getPageSEO('home')

export default function HomePage() {
  return (
    <>
      <HeaderOne />
      <main>
        <HeroCarousel />
        <WhoWeServe />
        {/* <FocusAreas /> */}
        <ServicesGrid />
        <WhyChooseUs />
        <CommitmentBanner />
        <FaqComp />
        <Testimonial />
        <HelpContactSection />
        <Teams />
      </main>
      <FooterOne />
    </>
  )
}