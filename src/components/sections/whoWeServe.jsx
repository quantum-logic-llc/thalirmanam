import React from "react";
import Link from "next/link";
import Image from "next/image";
import Title from "@/components/ui/title";
import { Button } from "@/components/ui/button";
import SectionName from "@/components/ui/sectionName";
import SectionDescription from "@/components/ui/sectionDescription";
import SlideUp from "@/lib/animations/slideUp";
import boy from "@/assets/images/about/boy.png";

const servicesWeServe = [
  {
    id: 1,
    title: "Attention Deficit Hyperactive Disorder (ADHD)",
  },
  {
    id: 2,
    title: "Autism Spectrum Disorder (ASD)",
  },
  {
    id: 3,
    title: "Behavioural Disorders",
  },
  {
    id: 4,
    title: "Cerebral Palsy (CP)",
  },
  {
    id: 5,
    title: "Developmental Delays",
  },
  {
    id: 6,
    title: "Learning Disabilities",
  },
  {
    id: 7,
    title: "Intellectual Disability",
  },
  {
    id: 8,
    title: "School Readiness",
  },
  {
    id: 9,
    title: "Adolescent Health and Well-being",
  },
  {
    id: 10,
    title: "Developmental Supportive Care",
  },
  {
    id: 11,
    title: "Antenatal Sessions",
  },
  {
    id: 12,
    title: "Teen Transition Clinic for Adolescents with Special Needs",
  },
];

const WhoWeServe = () => {
  return (
    <section className="whoWeServe lg:py-15 py-10 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <SlideUp>
            <h2 className="text-orange-500 text-[32px] font-bold uppercase mb-4">Who Do We Serve?</h2>
          </SlideUp>
          <SlideUp delay={2}>
            <h3 className="text-gray-800 text-[36px] font-bold capitalize mt-2.5 mb-4">
              Specialized Care For Every Child
            </h3>
          </SlideUp>
          <SlideUp delay={3}>
            <SectionDescription className="max-w-3xl mx-auto text-gray-600">
              We provide comprehensive developmental support for children with
              various conditions and special needs
            </SectionDescription>
          </SlideUp>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left Side - Service Points */}
          <SlideUp delay={4}>
            <div className="space-y-4">
              {servicesWeServe.map((service) => (
                <div key={service.id} className="flex items-start gap-4 group">
                  {/* Checkmark Badge */}
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    ✓
                  </div>
                  {/* Service Title */}
                  <div className="flex-1 pt-1">
                    <h3 className="font-semibold text-gray-800 text-base leading-snug group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </SlideUp>

          {/* Right Side - Image */}
          <SlideUp delay={5}>
            <div className="relative ">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[280px] sm:h-[320px] md:h-[550px]">
                <Image
                  src={boy}
                  alt="Thalir Manam Child Development Center"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-25 bg-primary/10 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-20 bg-blue-100 rounded-full blur-2xl -z-10"></div>
            </div>
          </SlideUp>
        </div>

        {/* CTA Button Section */}
        <SlideUp delay={6}>
          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Link href="/contact-us">Book an Appointment</Link>
            </Button>
          </div>
        </SlideUp>
      </div>
    </section>
  );
};

export default WhoWeServe;
