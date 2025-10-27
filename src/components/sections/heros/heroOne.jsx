import React from 'react'
import { Button } from '@/components/ui/button'

import herosec from "@/assets/images/banner/herosec.png"
import left_circle2 from "@/assets/images/banner/left_circle2.png"
import right_circle2 from "@/assets/images/banner/right_circle2.png"
import Image from 'next/image';

import shap from "@/assets/images/shapes/shap.png"
import Link from 'next/link'
import ThreeLine from '@/assets/icons/threeLine'
import Title from '@/components/ui/title'
import TextReveal from '@/lib/animations/textReveal'
import SlideUp from '@/lib/animations/slideUp'

const HeroOne = () => {
  return (
    <section className="bg-transparent pt-[78px] lg:mb-15 mb-10 relative">
      <div className="container relative">
        <div className="flex flex-col items-center text-center relative z-10">
          <TextReveal delay={0.2}>
            <Title size={"7.5xl"} className={"font-normal max-w-[776px]"}>
              <span className="relative">Thalir Manam <span className="absolute -left-5 top-1 text-3xl text-[#0A6375]"><ThreeLine /></span></span><br></br>
              <span className="font-bold text-[56px]">Child Development Centre</span>
            </Title>
          </TextReveal>

          <div className="flex absolute right-[78px] top-14 animate-skw">
            <Image src={shap.src || shap} alt="shap-2" width={32} height={48} className="w-8 h-12 relative top-9" />
            <Image src={shap.src || shap} alt="shap-1" width={64} height={64} />
            <Image src={shap.src || shap} alt="shap-2" width={20} height={32} className="w-5 h-8 -mt-8" />
          </div>

          <TextReveal delay={0.6}>
            <p className="pt-5 max-w-[500px]">Comprehensive developmental and behavioral pediatric services for children with autism, ADHD, learning disabilities, and other developmental challenges. Expert care with evidence-based interventions.</p>
          </TextReveal>
          
          <SlideUp delay={3}>
            <div className="mt-6">
              <Button asChild variant={"secondary"} >
                <Link href="/contact-us">Contact Us</Link>
              </Button>
            </div>
          </SlideUp>
        </div>
        <div className="absolute left-2.5 lg:top-0 top-10 sm:block hidden animate-up-down">
          <Image src={left_circle2.src || left_circle2} alt="banner-img-1" width={260} height={365}
          className="object-cover rounded-[75px] border-1 border-pink-400 shadow-[0_0_15px_rgba(96,165,250,0.4)]"
          />
        </div>

        <div className="lg:pt-[60px] bg-transparent">
          <Image src={herosec.src || herosec} alt="banner-img-1" width={900} height={600} className="bg-transparent animate-up-down  border-2 border-white/20 rounded-lg" />
        </div>
        

        {/* <!-- circle shap --> */}
      <div className="absolute right-5 bottom-40 lg:block hidden animate-up-down rounded-[75px] overflow-hidden border-3 border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.4)]">
  <Image
    src={right_circle2.src || right_circle2}
    alt="banner-img-2"
    width={300}
    height={360}
    className="object-cover"
  />
</div>

  
      
      </div>
      {/* <!-- circle shap --> */}
    </section>
  )
}

export default HeroOne