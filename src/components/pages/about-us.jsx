import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import AboutOne from '@/components/sections/abouts/aboutOne'
import VisionMission from '@/components/sections/visionMission'
import Teams from '@/components/sections/teams/teams'
import Testimonial from '@/components/sections/testimonial'
import ServicesGrid from '@/components/sections/services/servicesGrid'

const AboutUs = () => {
  return (
    <>
      <main>
        <PageTitle pageName="About Thalir Manam" breadcrumbCurrent="About Us" />
        <AboutOne isAboutpage={true} />
        <VisionMission />
        <ServicesGrid />
        <Teams />
        <Testimonial />
      </main>
    </>
  )
}

export default AboutUs