import HeaderOne from '../../src/components/sections/headers/headerOne'
import FooterOne from '../../src/components/sections/footers/footerOne'
import Faq from '../../src/components/pages/faq'

export const metadata = {
  title: 'Ascent - FAQ',
  description: 'Frequently asked questions about our childcare services',
}

export default function FaqPage() {
  return (
    <>
      <HeaderOne />
      <Faq />
      <FooterOne />
    </>
  )
}