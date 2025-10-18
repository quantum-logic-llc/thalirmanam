import HeaderOne from '../../src/components/sections/headers/headerOne'
import FooterOne from '../../src/components/sections/footers/footerOne'
import PageTitle from '../../src/components/sections/pageTitle'
import ServicesOne from '../../src/components/sections/services/servicesOne'
import Partner from '../../src/components/sections/partner'

export const metadata = {
  title: 'Ascent - Services',
  description: 'Discover our childcare and educational services',
}

export default function ServicesPage() {
  return (
    <>
      <HeaderOne />
      <main>
        <PageTitle pageName="Services" />
        <ServicesOne />
        <Partner />
      </main>
      <FooterOne />
    </>
  )
}