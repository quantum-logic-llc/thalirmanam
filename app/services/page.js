import HeaderOne from '../../src/components/sections/headers/headerOne'
import FooterOne from '../../src/components/sections/footers/footerOne'
import Services from '../../src/components/pages/services'
import PageTitle from '../../src/components/sections/pageTitle'
import ServicesOne from '../../src/components/sections/services/servicesOne'
import Partner from '../../src/components/sections/partner'
import { getPageSEO } from '../../src/lib/seo-config'


export const metadata = getPageSEO('services')

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