import HeaderOne from '../../src/components/sections/headers/headerOne'
import FooterOne from '../../src/components/sections/footers/footerOne'
import PageTitle from '../../src/components/sections/pageTitle'
import Gallery from '../../src/components/sections/gallery/gallery'
import { getPageSEO } from '../../src/lib/seo-config'

export const metadata = getPageSEO('portfolio')

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