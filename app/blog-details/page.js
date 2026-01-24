import HeaderOne from '../../src/components/sections/headers/headerOne'
import FooterOne from '../../src/components/sections/footers/footerOne'
import PageTitle from '../../src/components/sections/pageTitle'
import BlogArticle from '../../src/components/sections/blogs/blogArticle'
import Sidebar from '../../src/components/sections/sidebar/sidebar'
import { getPageSEO } from '../../src/lib/seo-config'

export const metadata = getPageSEO('blog-details')

export default function BlogDetailsPage() {
  return (
    <>
      <HeaderOne />
      <main>
        <PageTitle pageName="Blog Details" />
        <div className="container py-16">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-7.5">
            <div className="lg:col-span-2">
              <BlogArticle />
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