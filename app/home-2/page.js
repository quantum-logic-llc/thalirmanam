import HeaderTwo from '../../src/components/sections/headers/headerTwo'
import FooterTwo from '../../src/components/sections/footers/footerTwo'
import HeroTwo from '../../src/components/sections/heros/heroTwo'
import AboutTwo from '../../src/components/sections/abouts/aboutTwo'
import ServicesTwo from '../../src/components/sections/services/servicesTwo'
import ExtraCurricular from '../../src/components/sections/extraCurricular'
import SuccessProjectTwo from '../../src/components/sections/successProjects/successProjectTwo'
import AgeTwo from '../../src/components/sections/studentsAge/ageTwo'
import Pricing from '../../src/components/sections/pricing'
import BlogsTwo from '../../src/components/sections/blogs/blogsTwo'
import NewsletterTwo from '../../src/components/sections/newsletters/newsletterTwo'

export const metadata = {
  title: 'Ascent - Childcare & Kids School || Home Two',
  description: 'Ascent - Childcare & Kids School React.js and Tailwind CSS Template',
}

export default function HomeTwoPage() {
  return (
    <>
      <HeaderTwo />
      <main>
        <HeroTwo />
        <AboutTwo />
        <ServicesTwo />
        <ExtraCurricular />
        <SuccessProjectTwo />
        <AgeTwo />
        <Pricing />
        <BlogsTwo />
        <NewsletterTwo />
      </main>
      <FooterTwo />
    </>
  )
}