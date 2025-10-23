import React from 'react'
import { Button } from '@/components/ui/button'
import boy_img_1 from "@/assets/images/banner/boy_img_1.png"
import image4 from "@/assets/images/banner/image 4.png"
import left_circle_2 from "@/assets/images/banner/left_circle_2.png"
import right_circle1 from "@/assets/images/banner/right-circle1..png"
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
              <span className="relative">Thalir Manam <span className="absolute -left-6 top-1 text-3xl text-[#0A6375]"><ThreeLine /></span></span>
              <span className="font-bold">Child Development Centre</span>
            </Title>
          </TextReveal>

          <div className="flex absolute right-[78px] top-14 animate-skw">
            <Image src={shap.src || shap} alt="shap-2" className="w-8 h-12 relative top-9" />
            <Image src={shap.src || shap} alt="shap-1" />
            <Image src={shap.src || shap} alt="shap-2" className="w-5 h-8 -mt-8" />
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
          <Image src={left_circle_2.src || left_circle_2} alt="banner-img-1" style={{width: '260px', height: '365px'}} />
        </div>



        <div className="lg:pt-[72px] bg-transparent">
          <Image src={image4.src || image4} alt="banner-img-1" className="bg-transparent animate-up-down  border-2 border-white/20 rounded-lg" />
        </div>
        

        {/* <!-- circle shap --> */}
        <div className="absolute right-5 bottom-16 lg:block hidden animate-up-down ">
          <Image src={right_circle1.src || right_circle1} alt="banner-img-2" style={{width: '320px', height: '400px'}} />
        </div>
      </div>
      {/* <!-- circle shap --> */}
    </section>
  )
}

export default HeroOne