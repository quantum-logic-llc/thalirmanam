import HeaderOne from '../../src/components/sections/headers/headerOne'
import FooterOne from '../../src/components/sections/footers/footerOne'
import ContactUs from '../../src/components/pages/contact-us'
import { getPageSEO } from '../../src/lib/seo-config'


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