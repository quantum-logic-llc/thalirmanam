import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import AboutOne from '@/components/sections/abouts/aboutOne'
import Teams from '@/components/sections/teams/teams'
import Testimonial from '@/components/sections/testimonial'

const AboutUs = () => {
  return (
    <>
      <main>
        <PageTitle pageName="About Thalir Manam" />
        <AboutOne isAboutpage={true} />
        <Teams />
        <Testimonial />
      </main>
    </>
  )
}

export default AboutUs