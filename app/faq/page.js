import HeaderOne from '../../src/components/sections/headers/headerOne'
import FooterOne from '../../src/components/sections/footers/footerOne'
import PageTitle from '../../src/components/sections/pageTitle'
import FaqComp from '../../src/components/sections/faqComp'
import { getPageSEO } from '../../src/lib/seo-config'

export const metadata = getPageSEO('faq')

export default function FaqPage() {
  return (
    <>
      <HeaderOne />
      <main>
        <PageTitle pageName="FAQ" />
        <FaqComp />
      </main>
      <FooterOne />
    </>
  )
}