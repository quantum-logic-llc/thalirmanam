import HeaderOne from '../../src/components/sections/headers/headerOne'
import FooterOne from '../../src/components/sections/footers/footerOne'
import ContactUs from '../../src/components/pages/contact-us'

export const metadata = {
  title: 'Ascent - Contact Us',
  description: 'Get in touch with Ascent - Childcare & Kids School',
}

export default function ContactUsPage() {
  return (
    <>
      <HeaderOne />
      <ContactUs />
      <FooterOne />
    </>
  )
}