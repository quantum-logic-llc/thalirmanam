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
      className="relative w-full h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] flex items-center overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 ">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-top"
          priority
        />
        {/* Simple gradient overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-4 gap-6 items-center">

          {/* Left Side - Text Content */}
          <div className="lg:col-span-4 space-y-6 sm:space-y-8">

            {/* Badge */}
            {/* <TextReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                Thalir Manam Center
              </div>
            </TextReveal> */}

            {/* Main Title */}
            <TextReveal delay={0.2}>
              <div className="space-y-3">
                <h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-green-600 leading-tight"
                    style={{
                      textShadow: `
                        -2px -2px 0 #fff,
                        2px -2px 0 #fff,
                        -2px 2px 0 #fff,
                        2px 2px 0 #fff,
                        -2px 0 0 #fff,
                        2px 0 0 #fff,
                        0 -2px 0 #fff,
                        0 2px 0 #fff,
                        0 0 8px rgba(255, 255, 255, 0.8),
                        0 0 16px rgba(255, 255, 255, 0.5)
                      `
                    }}>
                  {title}
                </h1>
                <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-white leading-tight"
                    style={{
                      textShadow: `
                        -1.5px -1.5px 0 #000,
                        1.5px -1.5px 0 #000,
                        -1.5px 1.5px 0 #000,
                        1.5px 1.5px 0 #000,
                        -1.5px 0 0 #000,
                        1.5px 0 0 #000,
                        0 -1.5px 0 #000,
                        0 1.5px 0 #000,
                        0 0 10px rgba(0, 0, 0, 0.7)
                      `
                    }}>
                  {subtitle}
                </h2>
              </div>
            </TextReveal>

            {/* Description */}
            <TextReveal delay={0.4}>
              <p className="text-base sm:text-lg md:text-xl text-white font-semibold leading-relaxed max-w-2xl"
                 style={{
                   textShadow: `
                     -1px -1px 0 rgba(0, 0, 0, 0.8),
                     1px -1px 0 rgba(0, 0, 0, 0.8),
                     -1px 1px 0 rgba(0, 0, 0, 0.8),
                     1px 1px 0 rgba(0, 0, 0, 0.8),
                     0 0 8px rgba(0, 0, 0, 0.9),
                     0 0 16px rgba(0, 0, 0, 0.5)
                   `
                 }}>
                {description.split(new RegExp(`(${highlights.join('|')})`, 'gi')).map((part, index) => {
                  if (highlights.some(h => h.toLowerCase() === part.toLowerCase())) {
                    return (
                      <span key={index} className="text-green-300 font-bold"
                            style={{
                              textShadow: `
                                -1px -1px 0 rgba(0, 0, 0, 0.9),
                                1px -1px 0 rgba(0, 0, 0, 0.9),
                                -1px 1px 0 rgba(0, 0, 0, 0.9),
                                1px 1px 0 rgba(0, 0, 0, 0.9),
                                0 0 10px rgba(0, 0, 0, 1),
                                0 0 20px rgba(0, 100, 0, 0.4)
                              `
                            }}>
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
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/contact-us">Book Consultation</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-2 border-white hover:bg-white/20 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </SlideUp>

            {/* Trust Badges */}
            {/* <SlideUp delay={0.8}>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-white">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Expert Team</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Proven Results</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Family Centered</span>
                </div>
              </div>
            </SlideUp> */}
          </div>

          {/* Right Side - Empty space for image to show through */}
          <div className="lg:col-span-1 hidden lg:block"></div>

        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
