import HeaderOne from '../../src/components/sections/headers/headerOne'
import FooterOne from '../../src/components/sections/footers/footerOne'
import ContactUs from '../../src/components/pages/contact-us'
import { getPageSEO } from '../../src/lib/seo-config'
import PageTitle from '../../src/components/sections/pageTitle'
import ContactForm from '../../src/components/sections/contactForm'
import ContactAddress from '../../src/components/sections/contactAddress'
import GoogleMap from '../../src/components/sections/googleMap'


export const metadata = getPageSEO('contact-us')

export default function ContactUsPage() {
  return (
    <>
      <HeaderOne />
      <main>
        <PageTitle pageName="Contact Us" />
        <ContactForm />
        <ContactAddress />
        <GoogleMap />
      </main>
      <FooterOne />
    </>
  )
}