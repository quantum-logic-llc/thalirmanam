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
            <Title size={"7.5xl"} className={"font-normal max-w-[776px] px-4"}>
              <span className="relative inline-block">Thalir Manam <span className="absolute -left-3 sm:-left-5 top-0 sm:top-1 text-2xl sm:text-3xl text-[#0A6375]"><ThreeLine /></span></span><br></br>
              <span className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[56px]">Neuro development centre</span>
            </Title>
          </TextReveal>

          <div className="hidden lg:flex absolute right-[78px] top-14 animate-skw">
            <Image src={shap.src || shap} alt="shap-2" width={32} height={48} className="w-8 h-12 relative top-9" />
            <Image src={shap.src || shap} alt="shap-1" width={64} height={64} />
            <Image src={shap.src || shap} alt="shap-2" width={20} height={32} className="w-5 h-8 -mt-8" />
          </div>

          <TextReveal delay={0.6}>
            <p className="pt-5 max-w-[500px] px-4 text-sm sm:text-base">Comprehensive developmental and behavioral pediatric services for children with autism, ADHD, learning disabilities, and other developmental challenges. Expert care with evidence-based interventions.</p>
          </TextReveal>

          <SlideUp delay={3}>
            <div className="mt-2 mb-0">
              <Button asChild variant={"secondary"} className="px-8 py-6 text-base">
                <Link href="/contact-us">Contact Us</Link>
              </Button>
            </div>
          </SlideUp>
        </div>

        {/* Left decorative image */}
        <div className="absolute left-2 lg:left-2.5 top-20 lg:top-0 sm:block hidden ">
          <Image
            src={herogirl.src || herogirl}
            alt="banner-img-1"
            width={200}
            height={280}
            className="lg:w-[260px] lg:h-[365px] object-cover rounded-[50px] lg:rounded-[75px] border border-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.3)]"
          />
        </div>

        {/* Main hero image */}
        <div className="lg:pt-0 px-4 sm:px-8 bg-transparent ">
          <Image
            src={herosec9.src || herosec9}
            alt="banner-img-1"
            width={900}
            height={600}
            className="bg-transparent  border-2 border-white/20 rounded-lg w-full max-w-[900px] h-auto"
          />
        </div>

        {/* Right decorative image */}
        <div className="absolute right-6 lg:right-2 bottom-80 lg:bottom-96 hidden sm:block group">
          {/* Decorative background blur */}
          {/* <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-[60px] lg:rounded-[85px] blur-xl -z-10 group-hover:blur-2xl transition-all duration-500"></div> */}

          {/* Main image container */}
          <div className="relative rounded-[50px] lg:rounded-[75px] overflow-hidden border-2 border-blue-400/60 shadow-[0_0_25px_rgba(96,165,250,0.5)] group-hover:shadow-[0_0_35px_rgba(96,165,250,0.7)] transition-all duration-500 backdrop-blur-sm">
            <Image
              src={heroboy.src || heroboy}
              alt="banner-img-2"
              width={220}
              height={340}
              className="lg:w-[300px] lg:h-[340px] object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent pointer-events-none"></div>

            {/* Corner decorative elements */}
            <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-blue-400/60 animate-pulse"></div>
            <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-cyan-400/60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>

  
      
      </div>
      {/* <!-- circle shap --> */}
    </section>
  )
}

export default HeroOne