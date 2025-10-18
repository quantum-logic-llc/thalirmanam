import HeaderOne from '../src/components/sections/headers/headerOne'
import FooterOne from '../src/components/sections/footers/footerOne'
import HeroOne from '../src/components/sections/heros/heroOne'
import AboutOne from '../src/components/sections/abouts/aboutOne'
import ServicesOne from '../src/components/sections/services/servicesOne'
import Gallery from '../src/components/sections/gallery/gallery'
import Programs from '../src/components/sections/programs'
import FaqComp from '../src/components/sections/faqComp'
import Teams from '../src/components/sections/teams/teams'
import Testimonial from '../src/components/sections/testimonial'
import BlogsOne from '../src/components/sections/blogs/blogsOne'
import NewsletterOne from '../src/components/sections/newsletters/newsletterOne'
import SuccessProjectOne from '../src/components/sections/successProjects/successProjectOne'
import AgeOne from '../src/components/sections/studentsAge/ageOne'

export const metadata = {
  title: 'Ascent - Childcare & Kids School || Home',
  description: 'Ascent - Childcare & Kids School React.js and Tailwind CSS Template',
}

export default function HomePage() {
  return (
    <>
      <HeaderOne />
      <main>
        <HeroOne />
        <SuccessProjectOne />
        <AboutOne isAboutpage={false} />
        <Programs />
        <Gallery />
        <ServicesOne />
        <FaqComp />
        <Teams />
        <AgeOne />
        <Testimonial />
        <BlogsOne />
        <NewsletterOne />
      </main>
      <FooterOne />
    </>
  )
}