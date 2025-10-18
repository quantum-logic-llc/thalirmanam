import HeaderOne from '../../src/components/sections/headers/headerOne'
import FooterOne from '../../src/components/sections/footers/footerOne'
import ServiceDetails from '../../src/components/pages/service-details'

export const metadata = {
  title: 'Ascent - Service Details',
  description: 'Learn more about our specific childcare and educational services',
}

export default function ServiceDetailsPage() {
  return (
    <>
      <HeaderOne />
      <ServiceDetails />
      <FooterOne />
    </>
  )
}