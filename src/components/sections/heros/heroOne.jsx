import React from 'react'
import { Button } from '@/components/ui/button'

import herosec from "@/assets/images/banner/herosec.png"
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
            <div className="mt-6 mb-8">
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
        <div className="lg:pt-[60px] pt-8 px-4 sm:px-8 bg-transparent ">
          <Image
            src={herosec.src || herosec}
            alt="banner-img-1"
            width={900}
            height={600}
            className="bg-transparent  border-2 border-white/20 rounded-lg w-full max-w-[900px] h-auto"
          />
        </div>

        {/* Right decorative image */}
        <div className="absolute right-2 lg:right-5 bottom-20 lg:bottom-40 hidden sm:block  rounded-[50px] lg:rounded-[75px] overflow-hidden border border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.4)]"> 
          <Image src={heroboy.src || heroboy} alt="banner-img-2" width={220} height={360} className="lg:w-[300px] lg:h-[360px] object-cover" /> </div>

  
      
      </div>
      {/* <!-- circle shap --> */}
    </section>
  )
}

export default HeroOne