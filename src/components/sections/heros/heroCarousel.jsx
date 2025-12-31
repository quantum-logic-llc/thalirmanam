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
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
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
        autoHeight={true}
        className="hero-carousel-custom"
      >
        {heroCarouselData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <HeroSlide slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Simple Navigation Controls */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        <button
          ref={prevRef}
          className="bg-white/90 hover:bg-white text-green-600 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="text-xs sm:text-sm" />
        </button>

        <button
          ref={nextRef}
          className="bg-white/90 hover:bg-white text-green-600 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <FaChevronRight className="text-xs sm:text-sm" />
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
        className="relative w-full min-h-[260px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[480px] flex items-center justify-center overflow-hidden"
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
      className="relative w-full min-h-[320px] sm:min-h-[380px] md:min-h-[440px] lg:min-h-[520px] flex items-center overflow-hidden"
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent lg:from-transparent lg:via-transparent lg:to-black/20"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 relative z-10">
        <div className="flex justify-center lg:justify-end items-stretch">
          <div className="w-full lg:w-1/2 xl:w-5/12 px-1 sm:px-3 md:px-5">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-2xl
              p-3 sm:p-5 md:p-7 lg:p-9
              border-l-4 sm:border-l-8 border-orange-500
              flex flex-col gap-3 sm:gap-5">
              {/* Title */}
<TextReveal delay={0.2}>
  <div className="space-y-1.5 sm:space-y-2 max-w-[180px] sm:max-w-none">
    <h1
      className="
        hero-title-xs
        text-base        /* default for ≥281px */
        sm:text-2xl
        md:text-3xl
        lg:text-4xl
        font-bold
        text-[#91ec76]
        leading-snug
        break-words
      "
    >
      {title}
    </h1>

    <h2
      className="
        hero-subtitle-xs
        text-xs
        sm:text-lg
        md:text-2xl
        font-semibold
        text-black
        leading-snug
        break-words
      "
    >
      {subtitle}
    </h2>

    {tagline && (
      <h3
        className="
          hero-tagline-xs
          text-[11px]
          sm:text-sm
          md:text-base
          font-medium
          text-gray-600
          leading-snug
          italic
          break-words
        "
      >
        {tagline}
      </h3>
    )}
  </div>
</TextReveal>



              {/* Divider */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="h-1.5 w-12 sm:w-16 bg-[#91ec76] rounded-full shadow-lg"></div>
                <div className="h-1.5 w-10 sm:w-12 bg-[#8ccdee] rounded-full shadow-lg"></div>
                <div className="h-1.5 w-6 sm:w-8 bg-[#f28cb3] rounded-full shadow-lg"></div>
              </div>

              {/* Description with highlights */}
              {description && (
                <TextReveal delay={0.4}>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium leading-relaxed break-words">
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
                <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 pt-1 sm:pt-2">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#8ccdee] hover:bg-[#72b8e0] text-white font-bold px-5 sm:px-7 md:px-8 py-3 sm:py-4 text-xs sm:text-sm md:text-base rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <Link href="/contact-us">Book Consultation</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#f28cb3] hover:bg-[#e0729e] text-white font-bold px-5 sm:px-7 md:px-8 py-3 sm:py-4 text-xs sm:text-sm md:text-base rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
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
