import HeaderOne from '../../src/components/sections/headers/headerOne'
import FooterOne from '../../src/components/sections/footers/footerOne'
import { getPageSEO } from '../../src/lib/seo-config'
import PageTitle from '../../src/components/sections/pageTitle'
import ContactAddress from '../../src/components/sections/contactAddress'
import ContactForm from '../../src/components/sections/contactForm'
import GoogleMap from '../../src/components/sections/googleMap'


export const metadata = getPageSEO('contact-us')

export default function ContactUsPage() {
  return (
    <>
      <HeaderOne />
      <main>
        <PageTitle pageName="Contact Us" breadcrumbCurrent="Contact Us" />
        <ContactAddress />
        <ContactForm />
        <GoogleMap />
      </main>
      <FooterOne />
    </>
  )
}