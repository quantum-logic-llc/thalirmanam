import HeaderOne from '../src/components/sections/headers/headerOne'
import FooterOne from '../src/components/sections/footers/footerOne'
import HeroOne from '../src/components/sections/heros/heroOne'
import AboutOne from '../src/components/sections/abouts/aboutOne'
import ServicesOne from '../src/components/sections/services/servicesOne'
import ServicesGrid from '../src/components/sections/services/servicesGrid'
import Gallery from '../src/components/sections/gallery/gallery'
import Programs from '../src/components/sections/programs'
import FaqComp from '../src/components/sections/faqComp'
import Teams from '../src/components/sections/teams/teams'
import Testimonial from '../src/components/sections/testimonial'
import NewsletterOne from '../src/components/sections/newsletters/newsletterOne'
import SuccessProjectOne from '../src/components/sections/successProjects/successProjectOne'
import AgeOne from '../src/components/sections/studentsAge/ageOne'

import { getPageSEO } from '../src/lib/seo-config'

export const metadata = getPageSEO('home')

export default function HomePage() {
  return (
    <>
      <HeaderOne />
      <main>
        <HeroOne />
        <AboutOne isAboutpage={false} />
        <ServicesGrid />
        <SuccessProjectOne />
        <Programs />
        <FaqComp />
        <Teams />
        <Testimonial />
        <NewsletterOne />
      </main>
      <FooterOne />
    </>
  )
}