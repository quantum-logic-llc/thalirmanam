'use client'
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import TextReveal from "@/lib/animations/textReveal";
import SlideUp from "@/lib/animations/slideUp";
import { heroCarouselData } from "@/lib/fackdata/heroCarouselData";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const HeroCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade, Pagination]}
        slidesPerView={1}
        loop={true}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="hero-carousel-custom"
      >
        {heroCarouselData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <HeroSlide slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Simple Navigation Controls */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        <button
          ref={prevRef}
          className="bg-white/90 hover:bg-white text-green-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="text-sm" />
        </button>

        <button
          ref={nextRef}
          className="bg-white/90 hover:bg-white text-green-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <FaChevronRight className="text-sm" />
        </button>
      </div>
    </section>
  );
};

const HeroSlide = ({ slide }) => {
  const { title, subtitle, description, image, bgColor, highlights } = slide;

  return (
    <div
      className="relative w-full h-[85vh] flex items-center overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* Background Image - Clean and bright for kids */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
          priority
        />
        {/* Subtle gradient overlay for right side text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-end items-center min-h-[70vh]">

          {/* Right Side - Text Content with Card Background */}
          <div className="w-full lg:w-1/2 xl:w-5/12 px-5">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border-l-8 border-orange-500 min-h-[520px] flex flex-col justify-center space-y-6">

            {/* Main Title */}
            <TextReveal delay={0.2}>
              <div className="space-y-3">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-black leading-tight">
                  {title}
                </h1>
                <h2 className="text-1xl sm:text-2xl md:text-2xl lg:text-2xl font-semibold text-green-600 leading-snug">
                  {subtitle}
                </h2>
              </div>
            </TextReveal>

            {/* Colorful divider */}
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg"></div>
              <div className="h-1.5 w-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-lg"></div>
              <div className="h-1.5 w-8 bg-black rounded-full shadow-lg"></div>
            </div>

            {/* Description */}
            <TextReveal delay={0.4}>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
                {description.split(new RegExp(`(${highlights.join('|')})`, 'gi')).map((part, index) => {
                  if (highlights.some(h => h.toLowerCase() === part.toLowerCase())) {
                    return (
                      <span
                        key={index}
                        className="text-orange-600 font-bold"
                      >
                        {part}
                      </span>
                    );
                  }
                  return part;
                })}
              </p>
            </TextReveal>

            {/* CTA Buttons */}
            <SlideUp delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-8 py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Link href="/contact-us">Book Consultation</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-8 py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </SlideUp>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
