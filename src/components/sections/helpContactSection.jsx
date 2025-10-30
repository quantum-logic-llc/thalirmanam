import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { FaPhone } from 'react-icons/fa6'

const HelpContactSection = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24" style={{ backgroundColor: '#eff6ff' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8">
          {/* Heading */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="font-bold text-orange-500 uppercase" style={{ fontSize: '36px', lineHeight: '1' }}>
              Concerned about your child or teen’s development?
            </h2>
          </div>

          {/* Description */}
          <p className="max-w-2xl text-gray-600" style={{ fontSize: '1.2rem', lineHeight: '2rem' }}>
           We are here to help
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-600 text-white font-semibold text-base sm:text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact-us" className="inline-flex items-center gap-3">
                <FaPhone className="text-lg sm:text-xl" />
                <span>book an appointment to talk with us.</span>
              </Link>
            </Button>
          </div>

          {/* Optional: Contact info */}
          <div className="pt-6 flex flex-wrap justify-center gap-6 sm:gap-8 text-sm sm:text-base text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Quick Response</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Expert Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Personalized Care</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HelpContactSection
