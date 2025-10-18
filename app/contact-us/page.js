import HeaderOne from '../../src/components/sections/headers/headerOne'
import FooterOne from '../../src/components/sections/footers/footerOne'
import PageTitle from '../../src/components/sections/pageTitle'
import ContactForm from '../../src/components/sections/contactForm'
import ContactAddress from '../../src/components/sections/contactAddress'
import GoogleMap from '../../src/components/sections/googleMap'

export const metadata = {
  title: 'Ascent - Contact Us',
  description: 'Get in touch with Ascent - Childcare & Kids School',
}

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