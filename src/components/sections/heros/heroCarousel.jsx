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
      className="relative w-full h-[100vh] flex items-center overflow-hidden"
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

          {/* Right Side - Text Content (no box, just soft shadows) */}
          <div className="w-full lg:w-1/2 xl:w-5/12 space-y-6 sm:space-y-8 px-5">

            {/* Main Title with soft shadow */}
            <TextReveal delay={0.2}>
              <div className="space-y-4">
                <h1
                  className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-bold text-black-600 leading-tight whitespace-nowrap"
                  style={{
                    textShadow: `
                      0 2px 10px rgba(0, 0, 0, 0.3),
                      0 4px 20px rgba(0, 0, 0, 0.2),
                      0 8px 40px rgba(0, 0, 0, 0.15)
                    `
                  }}
                >
                  {title}
                </h1>
                <h2
                  className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-yellow-300 leading-snug"
                  style={{
                    textShadow: `
                      0 2px 8px rgba(0, 0, 0, 0.4),
                      0 4px 16px rgba(0, 0, 0, 0.2)
                    `
                  }}
                >
                  {subtitle}
                </h2>
              </div>
            </TextReveal>

            {/* Colorful divider */}
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full shadow-lg"></div>
              <div className="h-1.5 w-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-lg"></div>
              <div className="h-1.5 w-8 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full shadow-lg"></div>
            </div>

            {/* Description with soft shadow */}
            <TextReveal delay={0.4}>
              <p
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-black font-medium leading-relaxed"
              >
                {description.split(new RegExp(`(${highlights.join('|')})`, 'gi')).map((part, index) => {
                  if (highlights.some(h => h.toLowerCase() === part.toLowerCase())) {
                    return (
                      <span
                        key={index}
                        className="text-green-300 font-bold"
                        style={{
                          textShadow: `
                            0 2px 10px rgba(0, 0, 0, 0.5),
                            0 0 20px rgba(34, 197, 94, 0.4)
                          `
                        }}
                      >
                        {part}
                      </span>
                    );
                  }
                  return part;
                })}
              </p>
            </TextReveal>

            {/* CTA Buttons with playful design */}
            <SlideUp delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-8 py-6 text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/30"
                >
                  <Link href="/contact-us">Book Consultation</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-800 font-bold px-8 py-6 text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/30"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </SlideUp>

            {/* Trust Badges - colorful and fun */}
            {/* <SlideUp delay={0.8}>
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="flex items-center gap-2 bg-green-500/90 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-bold text-white text-sm">Expert Team</span>
                </div>
                <div className="flex items-center gap-2 bg-yellow-400/90 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-lg">
                  <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-bold text-gray-800 text-sm">Proven Results</span>
                </div>
                <div className="flex items-center gap-2 bg-pink-500/90 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-bold text-white text-sm">Family Centered</span>
                </div>
              </div>
            </SlideUp> */}

          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
