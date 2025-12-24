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
  const {
    title,
    subtitle,
    tagline,
    description,
    image,
    bgColor,
    highlights = [],
    type,
  } = slide;

  // IMAGE ONLY SLIDE
  if (type === "image-only") {
    return (
      <div
        className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: bgColor || "#ffffff" }}
      >
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={title || "Thalir Manam banner"}
            fill
            className="object-contain object-center"
            priority
          />
        </div>
      </div>
    );
  }

  // DEFAULT SLIDE WITH CONTENT
  return (
    <div
      className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] flex items-center overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-end items-center min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh]">
          <div className="w-full lg:w-1/2 xl:w-5/12 px-3 sm:px-5">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 border-l-4 sm:border-l-8 border-orange-500 min-h-[350px] sm:min-h-[420px] md:min-h-[520px] flex flex-col justify-center space-y-4 sm:space-y-6">
              {/* Title */}
              <TextReveal delay={0.2}>
                <div className="space-y-3">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#91ec76] leading-tight break-words">
                    {title}
                  </h1>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black leading-snug break-words">
                    {subtitle}
                  </h2>
                  {tagline && (
                    <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-600 leading-snug italic break-words">
                      {tagline}
                    </h3>
                  )}
                </div>
              </TextReveal>

              {/* Divider */}
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-16 bg-[#91ec76] rounded-full shadow-lg"></div>
                <div className="h-1.5 w-12 bg-[#8ccdee] rounded-full shadow-lg"></div>
                <div className="h-1.5 w-8 bg-[#f28cb3] rounded-full shadow-lg"></div>
              </div>

              {/* Description with highlights (guard for highlights) */}
              {description && (
                <TextReveal delay={0.4}>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium leading-relaxed break-words">
                    {(highlights.length
                      ? description.split(
                          new RegExp(`(${highlights.join("|")})`, "gi")
                        )
                      : [description]
                    ).map((part, index) => {
                      const match = highlights.find(
                        (h) => h.toLowerCase() === part.toLowerCase()
                      );
                      if (match) {
                        return (
                          <span
                            key={index}
                            className="text-[#f28cb3] font-bold"
                          >
                            {part}
                          </span>
                        );
                      }
                      return <span key={index}>{part}</span>;
                    })}
                  </p>
                </TextReveal>
              )}

              {/* CTAs */}
              <SlideUp delay={0.6}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#8ccdee] hover:bg-[#72b8e0] text-white font-bold px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base md:text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <Link href="/contact-us">Book Consultation</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#f28cb3] hover:bg-[#e0729e] text-white font-bold px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base md:text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
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
