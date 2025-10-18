import HeaderOne from '../../src/components/sections/headers/headerOne'
import FooterOne from '../../src/components/sections/footers/footerOne'
import Services from '../../src/components/pages/services'

export const metadata = {
  title: 'Ascent - Services',
  description: 'Discover our childcare and educational services',
}

export default function ServicesPage() {
  return (
    <>
      <HeaderOne />
      <Services />
      <FooterOne />
    </>
  )
}