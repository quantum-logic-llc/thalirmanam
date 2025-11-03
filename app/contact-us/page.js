import HeaderOne from '../../src/components/sections/headers/headerOne'
import FooterOne from '../../src/components/sections/footers/footerOne'
import { getPageSEO } from '../../src/lib/seo-config'
import PageTitle from '../../src/components/sections/pageTitle'
import ContactSectionNew from '../../src/components/sections/contactSectionNew'
import GoogleMapNew from '../../src/components/sections/googleMapNew'


export const metadata = getPageSEO('contact-us')

export default function ContactUsPage() {
  return (
    <>
      <HeaderOne />
      <main>
        <PageTitle pageName="Contact Us" breadcrumbCurrent="Contact Us" />
        <ContactSectionNew />
        <GoogleMapNew />
      </main>
      <FooterOne />
    </>
  )
}