import HeaderOne from '../../src/components/sections/headers/headerOne'
import FooterOne from '../../src/components/sections/footers/footerOne'
import AboutUs from '../../src/components/pages/about-us'
import { getPageSEO } from '../../src/lib/seo-config'


export const metadata = getPageSEO('about-us')

export default function AboutUsPage() {
  return (
    <>
      <HeaderOne />
      <AboutUs />
      <FooterOne />
    </>
  )
}