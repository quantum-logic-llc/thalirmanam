import React from 'react'
import { Button } from '@/components/ui/button'

import herosec9 from "@/assets/images/banner/herosec9.png"
import herogirl from "@/assets/images/banner/herogirl.png"
import heroboy from "@/assets/images/banner/heroboy.png"
import Image from 'next/image';

import shap from "@/assets/images/shapes/shap.png"
import Link from 'next/link'
import ThreeLine from '@/assets/icons/threeLine'
import Title from '@/components/ui/title'
import TextReveal from '@/lib/animations/textReveal'
import SlideUp from '@/lib/animations/slideUp'

const HeroOne = () => {
  return (
    <section className="bg-transparent pt-[78px] lg:mb-15 mb-10 relative overflow-hidden">
      <div className="container relative">
        <div className="flex flex-col items-center text-center relative z-10">
          <TextReveal delay={0.2}>
            <Title size={"7.5xl"} className={"font-normal max-w-[776px] px-2 sm:px-4"}>
              <span className="relative inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Thalir Manam
                <span className="absolute -left-2 sm:-left-3 md:-left-5 top-0 sm:top-1 text-xl sm:text-2xl md:text-3xl text-[#0A6375]">
                  <ThreeLine />
                </span>
              </span>
              <br></br>
              <span className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[56px]">
                Neuro development centre
              </span>
            </Title>
          </TextReveal>

          <div className="hidden lg:flex absolute right-[78px] top-14 animate-skw">
            <Image src={shap.src || shap} alt="shap-2" width={32} height={48} className="w-8 h-12 relative top-9" />
            <Image src={shap.src || shap} alt="shap-1" width={64} height={64} />
            <Image src={shap.src || shap} alt="shap-2" width={20} height={32} className="w-5 h-8 -mt-8" />
          </div>

          <TextReveal delay={0.6}>
            <p className="pt-3 sm:pt-5 max-w-[500px] px-3 sm:px-4 text-xs sm:text-sm md:text-base leading-relaxed">
              Comprehensive developmental and behavioral pediatric services for children with autism, ADHD, learning disabilities, and other developmental challenges. Expert care with evidence-based interventions.
            </p>
          </TextReveal>

          <SlideUp delay={3}>
            <div className="mt-3 sm:mt-4 mb-0">
              <Button asChild variant={"secondary"} className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base">
                <Link href="/contact-us">Contact Us</Link>
              </Button>
            </div>
          </SlideUp>
        </div>

        {/* Left decorative image */}
        <div className="absolute left-0 sm:left-2 lg:left-2.5 top-24 sm:top-20 lg:top-0 hidden sm:block w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px]">
          <Image
            src={herogirl.src || herogirl}
            alt="banner-img-1"
            width={260}
            height={365}
            className="w-full h-auto object-cover rounded-[40px] sm:rounded-[50px] lg:rounded-[75px] border border-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.3)]"
          />
        </div>

        {/* Main hero image */}
        <div className="lg:pt-0 px-2 sm:px-4 md:px-8 bg-transparent mt-4 sm:mt-6">
          <Image
            src={herosec9.src || herosec9}
            alt="banner-img-1"
            width={900}
            height={600}
            className="bg-transparent border-2 border-white/20 rounded-lg w-full max-w-[900px] h-auto mx-auto"
          />
        </div>

        {/* Right decorative image */}
        <div className="absolute right-0 sm:right-4 md:right-6 lg:right-2 bottom-[280px] sm:bottom-80 md:bottom-[360px] lg:bottom-96 hidden sm:block group w-[140px] sm:w-[180px] md:w-[220px] lg:w-[300px]">
          {/* Main image container */}
          <div className="relative rounded-[40px] sm:rounded-[50px] lg:rounded-[75px] overflow-hidden border-2 border-blue-400/60 shadow-[0_0_25px_rgba(96,165,250,0.5)] group-hover:shadow-[0_0_35px_rgba(96,165,250,0.7)] transition-all duration-500 backdrop-blur-sm">
            <Image
              src={heroboy.src || heroboy}
              alt="banner-img-2"
              width={300}
              height={340}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent pointer-events-none"></div>

            {/* Corner decorative elements */}
            <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-blue-400/60 animate-pulse"></div>
            <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-cyan-400/60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroOne
