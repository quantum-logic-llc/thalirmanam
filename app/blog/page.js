import HeaderOne from '../../src/components/sections/headers/headerOne'
import FooterOne from '../../src/components/sections/footers/footerOne'
import PageTitle from '../../src/components/sections/pageTitle'
import BlogsTwo from '../../src/components/sections/blogs/blogsTwo'
import Sidebar from '../../src/components/sections/sidebar/sidebar'

export const metadata = {
  title: 'Ascent - Blog',
  description: 'Read our latest blog posts about childcare and education',
}

export default function BlogPage() {
  return (
    <>
      <HeaderOne />
      <main>
        <PageTitle pageName="Blog" />
        <div className="container py-16">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-7.5">
            <div className="lg:col-span-2">
              <BlogsTwo />
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