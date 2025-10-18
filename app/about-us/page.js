import HeaderOne from '../../src/components/sections/headers/headerOne'
import FooterOne from '../../src/components/sections/footers/footerOne'
import AboutUs from '../../src/pages/about-us'

export const metadata = {
  title: 'Ascent - About Us',
  description: 'Learn more about Ascent - Childcare & Kids School',
}

export default function AboutUsPage() {
  return (
    <>
      <HeaderOne />
      <AboutUs />
      <FooterOne />
    </>
  )
}