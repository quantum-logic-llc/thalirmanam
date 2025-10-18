import HeaderOne from '../../src/components/sections/headers/headerOne'
import FooterOne from '../../src/components/sections/footers/footerOne'
import PageTitle from '../../src/components/sections/pageTitle'
import ServiceArtical from '../../src/components/sections/services/serviceArtical'
import Sidebar from '../../src/components/sections/sidebar/sidebar'

export const metadata = {
  title: 'Ascent - Service Details',
  description: 'Learn more about our specific childcare and educational services',
}

export default function ServiceDetailsPage() {
  return (
    <>
      <HeaderOne />
      <main>
        <PageTitle pageName="Service Details" />
        <div className="container py-16">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-7.5">
            <div className="lg:col-span-2">
              <ServiceArtical />
            </div>
            <div>
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
      <FooterOne />
    </>
  )
}