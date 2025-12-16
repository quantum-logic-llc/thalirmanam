import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'
import { FaPhone } from 'react-icons/fa6'
import bi from '@/assets/images/team/appoint.png'

const bground ={
  image:bi,
  alt:"background image"
}

const HelpContactSection = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={bground.image}
          alt={bground.alt}
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-blue-900/70 to-gray-900/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8">
          {/* Heading */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="font-bold text-white/95 drop-shadow-2xl uppercase" 
                style={{ fontSize: '36px', lineHeight: '1', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
              Concerned about your child or teen&apos;s development?
            </h2>
          </div>

          {/* Description */}
          <p className="max-w-2xl text-white/90 drop-shadow-xl mx-auto" 
             style={{ fontSize: '1.3rem', lineHeight: '2rem', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
            We are here to help
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold text-base sm:text-lg px-10 py-7 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20"
            >
              <Link href="/contact-us" className="inline-flex items-center gap-3">
                <FaPhone className="text-xl sm:text-2xl" />
                <span>Book an Appointment To Talk With Us</span>
              </Link>
            </Button>
          </div>

          {/* Contact info */}
          <div className="pt-8 flex flex-wrap justify-center gap-8 sm:gap-10 text-sm sm:text-base text-white/80 drop-shadow-lg">
            <div className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span>Quick Response</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <span>Expert Consultation</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              <span>Personalized Care</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HelpContactSection
