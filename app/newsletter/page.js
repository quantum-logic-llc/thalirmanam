import HeaderOne from '../../src/components/sections/headers/headerOne'
import FooterOne from '../../src/components/sections/footers/footerOne'
import PageTitle from '../../src/components/sections/pageTitle'
import NewsletterArchive from '../../src/components/sections/newsletters/newsletterArchive'

export default function NewsletterPage() {
  return (
    <>
      <HeaderOne />
      <main>
        <PageTitle pageName="Newsletter" />
        <NewsletterArchive />
      </main>
      <FooterOne />
    </>
  )
}