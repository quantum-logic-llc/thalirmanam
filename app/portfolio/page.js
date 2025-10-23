import HeaderOne from '../../src/components/sections/headers/headerOne'
import FooterOne from '../../src/components/sections/footers/footerOne'
import PageTitle from '../../src/components/sections/pageTitle'
import Gallery from '../../src/components/sections/gallery/gallery'

export const metadata = {
  title: 'Ascent - Portfolio',
  description: 'View our portfolio and success stories',
}

export default function PortfolioPage() {
  return (
    <>
      <HeaderOne />
      <main>
        <PageTitle pageName="Portfolio" />
        <Gallery />
      </main>
      <FooterOne />
    </>
  )
}