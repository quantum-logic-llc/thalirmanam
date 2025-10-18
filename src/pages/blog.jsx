import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import BlogsTwo from '@/components/sections/blogs/blogsTwo'
import Sidebar from '@/components/sections/sidebar/sidebar'

const Blog = () => {
  return (
    <>
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
    </>
  )
}

export default Blog