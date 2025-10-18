import HeaderOne from '../../../src/components/sections/headers/headerOne'
import FooterOne from '../../../src/components/sections/footers/footerOne'
import BlogDetails from '../../../src/pages/blog-details'

export const metadata = {
  title: 'Ascent - Unlock Blog Details',
  description: 'Read detailed blog posts about childcare and education',
}

export default function BlogDetailsPage() {
  return (
    <>
      <HeaderOne />
      <BlogDetails />
      <FooterOne />
    </>
  )
}