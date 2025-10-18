import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import BlogArticle from '@/components/sections/blogs/blogArticle'
import Sidebar from '@/components/sections/sidebar/sidebar'

const BlogDetails = () => {
  return (
    <>
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
    </>
  )
}

export default BlogDetails