import React from 'react'
import { Button } from '@/components/ui/button'

import herosec9 from "@/assets/images/banner/herosec9.png"
import Image from 'next/image';

import Link from 'next/link'
import Title from '@/components/ui/title'
import TextReveal from '@/lib/animations/textReveal'
import SlideUp from '@/lib/animations/slideUp'

const HeroOne = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white -mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen gap-8 lg:gap-12">

          {/* Left side - Image */}
          <div className="w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-1">
            <div className="relative w-full h-full">
              <Image
                src={herosec9.src || herosec9}
                alt="Thalir Manam Center"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Right side - Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left order-1 lg:order-2 space-y-6 lg:space-y-8">

            <TextReveal delay={0.2}>
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-800">
                  <span className="block bg-gradient-to-r from-green-600 via-green-600 to-green-600 bg-clip-text text-transparent">
                    Thalir Manam
                  </span>
                </h1>
                <h2 className="text-1xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900">
                  Neuro Development Centre
                </h2>
              </div>
            </TextReveal>

            <TextReveal delay={0.6}>
              <div className="max-w-xl">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
                  Comprehensive developmental and behavioral pediatric services for children with <span className="font-semibold text-green-700">autism</span>, <span className="font-semibold text-green-700">ADHD</span>, <span className="font-semibold text-green-700">learning disabilities</span>, and other developmental challenges. Expert care with evidence-based interventions.
                </p>
              </div>
            </TextReveal>

            <SlideUp delay={1}>
              <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
                <Button asChild variant={"secondary"} className="px-8 py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Link href="/contact-us">Contact Us</Link>
                </Button>
                <Button asChild variant={"outline"} className="px-8 py-6 text-base sm:text-lg rounded-full border-2 border-green-600 text-green-700 hover:bg-green-50 transition-all duration-300">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </SlideUp>

            {/* Trust badges */}
            <div className="pt-6 lg:pt-8">
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 items-center text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Expert Care</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Evidence-Based</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Child-Centered</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroOne
