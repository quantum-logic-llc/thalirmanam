import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { FaPhone } from 'react-icons/fa6'

const HelpContactSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-green-50 to-green-100 py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8">
          {/* Heading */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="font-bold text-orange-500 uppercase" style={{ fontSize: '36px', lineHeight: '1' }}>
              Can't find what you're looking for?
            </h2>
          </div>

          {/* Description */}
          <p className="max-w-2xl text-gray-600" style={{ fontSize: '1rem', lineHeight: '1.5rem' }}>
            Our team of experts is here to support you and your child. Reach out to us for personalized care and guidance.
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
                <span>Contact Us</span>
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

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-300/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
    </section>
  )
}

export default HelpContactSection
