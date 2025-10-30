import React from "react";
import { Button } from "@/components/ui/button";
import herogirl2 from "@/assets/images/banner/herogirl2.png";
import Image from "next/image";
import Link from "next/link";
import TextReveal from "@/lib/animations/textReveal";
import SlideUp from "@/lib/animations/slideUp";

const HeroOne = () => {
  return (
    <section
      className="relative w-full overflow-hidden py-4 sm:py-8 lg:py-12"
      style={{ backgroundColor: "#eff6ff" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
          
          {/* Left side - Image */}
          <div className="w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-1">
            <div className="relative w-[80%] sm:w-[70%] md:w-[60%] flex justify-center items-center -mt-4 sm:-mt-6 lg:-mt-8">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_0_20px_rgba(34,197,94,0.3)] bg-green-50 flex justify-center items-center p-2 sm:p-3">
                <Image
                  src={herogirl2}
                  alt="Thalir Manam Center"
                  width={380}
                  height={220}
                  className="w-full h-auto object-contain rounded-3xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right side - Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left order-1 lg:order-2 space-y-5 lg:space-y-7">
            
            <TextReveal delay={0.2}>
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl text-gray-800">
                  <span className="block text-black">Thalir Manam</span>
                </h1>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold text-gray-900">
                  Neuro Development Centre
                </h2>
              </div>
            </TextReveal>

            <TextReveal delay={0.6}>
              <div className="max-w-xl">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
                  Comprehensive developmental and behavioral pediatric services
                  for children with{" "}
                  <span className="font-semibold text-green-700">autism</span>,{" "}
                  <span className="font-semibold text-green-700">ADHD</span>,{" "}
                  <span className="font-semibold text-green-700">
                    learning disabilities
                  </span>
                  , and other developmental challenges. Expert care with
                  evidence-based interventions.
                </p>
              </div>
            </TextReveal>

            <SlideUp delay={1}>
              <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-600 text-white font-semibold px-8 py-5 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Link href="/contact-us">Contact Us</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold px-8 py-5 text-base sm:text-lg rounded-full transition-all duration-300"
                >
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </SlideUp>

            {/* Trust badges */}
            <div className="pt-4 lg:pt-6">
              <div className="flex flex-wrap justify-center lg:justify-start gap-5 items-center text-sm text-gray-600">
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
  );
};

export default HeroOne;
