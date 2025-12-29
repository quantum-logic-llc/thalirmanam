import HeaderOne from '../../src/components/sections/headers/headerOne'
import FooterOne from '../../src/components/sections/footers/footerOne'
import Services from '../../src/components/pages/services'
import PageTitle from '../../src/components/sections/pageTitle'
import ServicesGrid from '../../src/components/sections/services/servicesGrid'
import Partner from '../../src/components/sections/partner'

// ... other imports

export default function ServicesPage() {
  return (
    <>
      <HeaderOne />
      <main>
        <PageTitle pageName="Services" />
        <ServicesGrid />
      </main>
      <FooterOne />
    </>
  )
}