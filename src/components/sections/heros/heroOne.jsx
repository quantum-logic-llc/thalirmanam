import React from 'react'
import { Button } from '@/components/ui/button'

import herogirl from "@/assets/images/banner/herogirl.png"
import Image from 'next/image';

import Link from 'next/link'
import Title from '@/components/ui/title'
import TextReveal from '@/lib/animations/textReveal'
import SlideUp from '@/lib/animations/slideUp'

const HeroOne = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden pt-10" style={{ backgroundColor: '#eff6ff' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen gap-2 lg:gap-10">

          {/* Left side - Image */}
         {/* Left side - Image */}
<div className="w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-1">
  <div className="relative w-[90%] h-auto"> {/* reduced image width slightly */}
    <div className="relative rounded-3xl overflow-hidden shadow-[0_0_25px_rgba(34,197,94,0.4)] bg-green-50 p-2"> {/* green shadow and soft bg */}
      <Image
        src={herogirl.src || herogirl}
        alt="Thalir Manam Center"
        width={500} // reduced width
        height={380} // reduced height
        className="w-full h-auto object-contain rounded-3xl"
        priority
      />
    </div>
  </div>
</div>


          {/* Right side - Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left order-1 lg:order-2 space-y-6 lg:space-y-8">

            <TextReveal delay={0.2}>
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl text-gray-800 ">
                  <span className="block text-black ">
                    Thalir Manam
                  </span>
                </h1>
                <h2 className="text-1xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-gray-900">
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
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-600 text-white font-semibold px-8 py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Link href="/contact-us">Contact Us</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold px-8 py-6 text-base sm:text-lg rounded-full transition-all duration-300">
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
