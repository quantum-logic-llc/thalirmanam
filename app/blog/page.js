import HeaderOne from '../../src/components/sections/headers/headerOne'
import FooterOne from '../../src/components/sections/footers/footerOne'
import Blog from '../../src/pages/blog'

export const metadata = {
  title: 'Ascent - Blog',
  description: 'Read our latest blog posts about childcare and education',
}

export default function BlogPage() {
  return (
    <>
      <HeaderOne />
      <Blog />
      <FooterOne />
    </>
  )
}