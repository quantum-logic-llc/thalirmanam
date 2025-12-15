import React from 'react'
import Image from 'next/image'
import AboutOne from '@/components/sections/abouts/aboutOne'
import VisionMission from '@/components/sections/visionMission'
import Teams from '@/components/sections/teams/teams'
import Testimonial from '@/components/sections/testimonial'
import SlideUp from '@/lib/animations/slideUp'
import { Button } from '../ui/button'
import { FaHeart, FaUsers, FaLightbulb, FaStar } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import Link from 'next/link'

const AboutUs = () => {
  const features = [
    {
      icon: FaHeart,
      title: 'Compassionate Care',
      description: 'Individualized attention with empathy and understanding',
      color: 'pink',
    },
    {
      icon: FaUsers,
      title: 'Expert Team',
      description: 'Highly qualified developmental specialists',
      color: 'green',
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'Evidence-based therapeutic interventions',
      color: 'blue',
    },
    {
      icon: FaStar,
      title: 'Proven Results',
      description: 'Track record of successful outcomes',
      color: 'purple',
    },
  ]

  const achievements = [
    'Over 10+ Years of Excellence',
    'Expert Team of Specialists',
    'Evidence-Based Approaches',
    'Family-Centered Care',
    'Comprehensive Support Services',
  ]

  return (
    <>
      <main>
        {/* Hero Banner Section */}
        <AboutOne isAboutpage={true} />

        {/* Vision & Mission Section */}
        <VisionMission />

        {/* What Makes Us Special */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: '#eff6ff' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SlideUp>
                <div className="text-center mb-12 lg:mb-16">
                  <h2 className="text-[#73BE48] text-2xl lg:text-3xl font-bold uppercase mb-4">
                    What Makes Us Special
                  </h2>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Excellence in Every Aspect
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-green-500 mx-auto"></div>
                </div>
              </SlideUp>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <SlideUp key={index} delay={index * 2}>
                    <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                      <div
                        className={`w-24 h-24 bg-gradient-to-br from-${feature.color}-100 to-${feature.color}-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl`}
                      >
                        <feature.icon className={`text-${feature.color}-600 text-4xl`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </SlideUp>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Tight Spacing */}
        <div className="-mt-12 relative z-5">
          <Testimonial />
        </div>

        {/* Meet Our Founder Section - Tight Spacing */}
        <div className="-mt-12 relative z-5">
          <Teams />
        </div>

        {/* Contact CTA with Background Image */}
      <section className="relative w-full overflow-hidden py-12 mt-12">
  {/* Background image */}
  <div className="absolute inset-0 -z-10">
    <Image
      src="https://tse3.mm.bing.net/th/id/OIP.GSgXC9EFJ9p_J0S9ewZoaAHaC9?cb=ucfimg2&ucfimg=1&w=2560&h=1021&rs=1&pid=ImgDetMain&o=7&rm=3"
      alt="Contact background"
      fill
      className="object-cover object-center"
      priority
    />
    <div className="absolute inset-0 bg-black/40" />
  </div>

  {/* Content */}
  <div className="container mx-auto px-4 flex flex-col items-center text-center gap-4">
    <h1 className="text-white text-2xl lg:text-3xl font-bold max-w-3xl">
      Noticing developmental concerns in your child or teenager?
    </h1>

    <p className="text-white/90 max-w-3xl text-base lg:text-lg leading-relaxed">
      Noticing delays or changes in your child or teenager’s growth, learning, behavior, or emotions?
      Early support and guidance can make a meaningful difference in their development and well-being.
    </p>

    <Button
      asChild
      size="lg"
      className="mt-2 bg-green-600 hover:bg-green-700 text-white font-semibold text-base sm:text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
    >
      <Link href="/contact-us" className="inline-flex items-center gap-3">
        <FaPhone className="text-lg sm:text-xl" />
        <span>Click to contact with us.</span>
      </Link>
    </Button>
  </div>
</section>

      </main>
    </>
  )
}

export default AboutUs
