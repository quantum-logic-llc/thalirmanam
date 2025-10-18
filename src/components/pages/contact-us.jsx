import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import ContactForm from '@/components/sections/contactForm'
import ContactAddress from '@/components/sections/contactAddress'
import GoogleMap from '@/components/sections/googleMap'

const ContactUs = () => {
  return (
    <>
      <main>
        <PageTitle pageName="Contact Us" />
        <ContactForm />
        <ContactAddress />
        <GoogleMap />
      </main>
    </>
  )
}

export default ContactUs