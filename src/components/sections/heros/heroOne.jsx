import React from 'react'
import { Button } from '@/components/ui/button'
import boy_img_1 from "@/assets/images/banner/boy_img_1.png"
import boy_img_2 from "@/assets/images/banner/boy_img_2.png"
import painting from "@/assets/images/banner/painting.png"
import left_circle_2 from "@/assets/images/banner/left_circle_2.png"
import right_circle1 from "@/assets/images/banner/right-circle1..png"

import shap from "@/assets/images/shapes/shap.png"
import Link from 'next/link'
import ThreeLine from '@/assets/icons/threeLine'
import Title from '@/components/ui/title'

const HeroOne = () => {
  return (
    <section className="bg-transparent pt-[78px] lg:mb-15 mb-10 relative">
      <div className="container relative">
        <div className="flex flex-col items-center text-center relative z-10">
          <Title size={"7.5xl"} className={"font-normal max-w-[776px]"}>
            <span className="relative">Thalir Manam <span className="absolute -left-6 top-1 text-3xl text-[#0A6375]"><ThreeLine /></span></span>
            <span className="font-bold">Nurturing Minds</span> <span className="font-bold text-destructive-foreground">Shaping Futures</span>
          </Title>

          <div className="flex absolute right-[78px] top-14 animate-skw">
            <img src={shap.src || shap} alt="shap-2" className="w-8 h-12 relative top-9" />
            <img src={shap.src || shap} alt="shap-1" />
            <img src={shap.src || shap} alt="shap-2" className="w-5 h-8 -mt-8" />
          </div>

          <p className="pt-5 max-w-[431px]">Specialized services include speech and language therapy, behavioral therapy, swallowing disorders, sleep disorders, neurodevelopmental assessments, and psychometric evaluations</p>
          <div className="mt-6">
            <Button asChild variant={"secondary"} >
              <Link href="/contact-us">Contact Us</Link>
            </Button>
          </div>
        </div>
        <div className="absolute left-2.5 lg:top-0 top-10 sm:block hidden animate-up-down">
          <img src={left_circle_2.src || left_circle_2} alt="banner-img-1" style={{width: '260px', height: '365px'}} />
        </div>

        <div className="absolute right-0 bottom-0 pb-[71px] lg:block hidden animate-up-down">
          <img src={boy_img_2.src || boy_img_2} alt="banner-img-2" />
        </div>

        <div className="lg:pt-[72px]">
          <img src={painting.src || painting} alt="painting" />
        </div>
        

        {/* <!-- circle shap --> */}
        <div className="absolute right-0 bottom-[71px] lg:block hidden animate-up-down">
          <img src={right_circle1.src || right_circle1} alt="img" style={{width: '299px', height: '388px'}} />
        </div>
      </div>
      {/* <!-- circle shap --> */}
    </section>
  )
}

export default HeroOne