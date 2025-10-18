import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import ServicesOne from '@/components/sections/services/servicesOne'
import Partner from '@/components/sections/partner'

const Services = () => {
  return (
    <>
      <main>
        <PageTitle pageName="Services" />
        <ServicesOne />
        <Partner />
      </main>
    </>
  )
}

export default Services