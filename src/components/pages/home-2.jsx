import React from 'react'
import HeroTwo from '@/components/sections/heros/heroTwo'
import AboutTwo from '@/components/sections/abouts/aboutTwo'
import ServicesTwo from '@/components/sections/services/servicesTwo'
import ExtraCurricular from '@/components/sections/extraCurricular'
import SuccessProjectTwo from '@/components/sections/successProjects/successProjectTwo'
import AgeTwo from '@/components/sections/studentsAge/ageTwo'
import Pricing from '@/components/sections/pricing'
import BlogsTwo from '@/components/sections/blogs/blogsTwo'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'

const HomeTwo = () => {
  return (
    <>
      <main>
        <HeroTwo />
        <AboutTwo />
        <ServicesTwo />
        <ExtraCurricular />
        <SuccessProjectTwo />
        <AgeTwo />
        <Pricing />
        <BlogsTwo />
        <NewsletterTwo />
      </main>
    </>
  )
}

export default HomeTwo