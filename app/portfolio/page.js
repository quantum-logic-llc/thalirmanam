import HeaderOne from '../../src/components/sections/headers/headerOne'
import FooterOne from '../../src/components/sections/footers/footerOne'
import Portfolio from '../../src/components/pages/portfolio'

export const metadata = {
  title: 'Ascent - Portfolio',
  description: 'View our portfolio and success stories',
}

export default function PortfolioPage() {
  return (
    <>
      <HeaderOne />
      <Portfolio />
      <FooterOne />
    </>
  )
}