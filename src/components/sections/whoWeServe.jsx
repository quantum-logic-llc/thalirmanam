import React from "react";
import Link from "next/link";
import Image from "next/image";
import Title from "@/components/ui/title";
import { Button } from "@/components/ui/button";
import SectionName from "@/components/ui/sectionName";
import SectionDescription from "@/components/ui/sectionDescription";
import SlideUp from "@/lib/animations/slideUp";
import collage from "@/assets/images/about/collage.png";

const servicesWeServe = [
  
   {
    id: 1,
    title: "High-risk infants and newborns",
  },
  {
    id: 2,
    title: "Comprehensive early developmental support",
  },
  {
    id: 3,
    title: "Building Adolescents pre vocational  and Social Communications skills for real life",
  },
  {
    id: 4,
    title: "Young adults seeking support for independence and life skills",
  },
];

const WhoWeServe = () => {
  return (
    <section className="whoWeServe lg:py-15 py-10 relative overflow-hidden" style={{ backgroundColor: '#eff6ff' }}>
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 px-3 sm:px-4">
          <SlideUp>
            <h2 className="text-[#f28cb3] text-2xl sm:text-[28px] md:text-[32px] font-bold uppercase mb-3 sm:mb-4">Who We Serve?</h2>
          </SlideUp>
          <SlideUp delay={2}>
            <h3 className="text-gray-800 text-2xl sm:text-3xl md:text-[36px] font-bold capitalize mt-2.5 mb-3 sm:mb-4">
              Specialized Care For Every Child and Young Adult
            </h3>
          </SlideUp>
          <SlideUp delay={3}>
            <SectionDescription className="max-w-3xl mx-auto text-gray-600 text-sm sm:text-base">
              We provide care for children, adolescents, and young adults across the developmental spectrum
            </SectionDescription>
          </SlideUp>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center max-w-6xl mx-auto px-3 sm:px-4">
          {/* Left Side - Service Points */}
          <SlideUp delay={4}>
            <div className="space-y-3 sm:space-y-4">
              {servicesWeServe.map((service) => (
                <div key={service.id} className="flex items-start gap-3 sm:gap-4 group">
                  {/* Checkmark Badge */}
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-xs sm:text-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    ✓
                  </div>
                  {/* Service Title */}
                  <div className="flex-1 pt-0.5 sm:pt-1">
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base leading-snug group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </SlideUp>

          {/* Right Side - Image */}
          <SlideUp delay={5}>
            <div className="relative">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl h-[280px] sm:h-[350px] md:h-[350px] lg:h-[350px]">
                <Image
                  src={collage}
                  alt="Thalir Manam Child Development Center"
                  fill
                  
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-24 h-20 sm:w-32 sm:h-25 bg-primary/10 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-20 h-16 sm:w-24 sm:h-20 bg-blue-100 rounded-full blur-2xl -z-10"></div>
            </div>
          </SlideUp>
        </div>

        {/* CTA Button Section */}
        <SlideUp delay={6}>
          <div className="mt-8 sm:mt-10 md:mt-12 text-center px-3 sm:px-4">
            <Button
              asChild
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Link href="mailto:thalirmanam5@gmail.com?subject=Appointment%20Request&body=Hello%2C%0A%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0APlease%20provide%20the%20following%20details%3A%0A-%20Name%3A%0A-%20Phone%3A%0A-%20Preferred%20Date%3A%0A-%20Service%20Required%3A%0A%0AThank%20you." target="_blank" rel="noopener noreferrer">Book an Appointment</Link>
            </Button>
          </div>
        </SlideUp>
      </div>
    </section>
  );
};

export default WhoWeServe;
