import React from 'react'
import { FaEye, FaBullseye } from 'react-icons/fa6'
import SlideUp from '@/lib/animations/slideUp'

const VisionMission = () => {
  return (
    <section className="lg:py-15 py-10 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container relative z-10 px-3 sm:px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-15 px-3 sm:px-4">
          <SlideUp>
            <h2 className="text-orange-500 text-2xl sm:text-[28px] md:text-[32px] font-bold uppercase mb-3 sm:mb-4">
              Our Vision & Mission
            </h2>
          </SlideUp>
          <SlideUp delay={2}>
            <h3 className="text-gray-800 text-2xl sm:text-3xl md:text-[36px] font-bold capitalize mb-3 sm:mb-4">
              Guiding Our Purpose
            </h3>
          </SlideUp>
          <SlideUp delay={3}>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Our vision and mission drive everything we do, ensuring every child receives the best care possible
            </p>
          </SlideUp>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-8 max-w-6xl mx-auto">

          {/* Vision Card */}
          <SlideUp delay={4}>
            <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 group h-full flex flex-col">
              {/* Icon */}
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaEye className="text-white text-2xl lg:text-3xl" />
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Our Vision</h3>

              {/* Description */}
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                To be a leading force in pediatric healthcare, recognized for our commitment to excellence, innovation, and compassionate family-centered care. We envision a future where every child reaches their full potential through early intervention and comprehensive developmental support.
              </p>

              {/* Decorative element */}
              <div className="mt-6 h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            </div>
          </SlideUp>

          {/* Mission Card */}
          <SlideUp delay={5}>
            <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-green-100 hover:border-green-300 group h-full flex flex-col">
              {/* Icon */}
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaBullseye className="text-white text-2xl lg:text-3xl" />
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Our Mission</h3>

              {/* Description */}
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                To provide compassionate, expert care to children with developmental and behavioral challenges. We are dedicated to safeguarding health, shaping futures, and empowering families through evidence-based interventions, multidisciplinary collaboration, and personalized treatment plans.
              </p>

              {/* Decorative element */}
              <div className="mt-6 h-1 w-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
            </div>
          </SlideUp>
        </div>

        {/* Core Values Section */}
        <SlideUp delay={6}>
          <div className="mt-12 lg:mt-16 text-center">
            <h4 className="text-xl lg:text-2xl font-bold text-gray-800 mb-6">Our Core Values</h4>
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4 max-w-4xl mx-auto">
              <div className="bg-white px-6 py-3 rounded-full shadow-md border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300">
                <span className="text-gray-700 font-semibold">Expertise</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-md border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300">
                <span className="text-gray-700 font-semibold">Innovation</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-md border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300">
                <span className="text-gray-700 font-semibold">Compassion</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-md border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300">
                <span className="text-gray-700 font-semibold">Family-Centered Care</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-md border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300">
                <span className="text-gray-700 font-semibold">Evidence-Based Practice</span>
              </div>
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  )
}

export default VisionMission
