import HeaderOne from '../../src/components/sections/headers/headerOne'
import FooterOne from '../../src/components/sections/footers/footerOne'
import PageTitle from '../../src/components/sections/pageTitle'
import AboutOne from '../../src/components/sections/abouts/aboutOne'
import Teams from '../../src/components/sections/teams/teams'
import Testimonial from '../../src/components/sections/testimonial'

export const metadata = {
  title: 'Ascent - About Us',
  description: 'Learn more about Ascent - Childcare & Kids School',
}

export default function AboutUsPage() {
  return (
    <>
      <HeaderOne />
      <main>
        <PageTitle pageName="About Us" />
        <AboutOne isAboutpage={true} />
        <Teams />
        <Testimonial />
      </main>
      <FooterOne />
    </>
  )
}