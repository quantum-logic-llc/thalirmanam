'use client'

import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { testimonialData } from '@/lib/fackdata/testimonialData'
import quotation from '@/assets/images/testimonial/quotation.png'
import Rating from '../ui/rating'
import Image from 'next/image'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import 'swiper/css'
import 'swiper/css/navigation'

const Testimonial = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const swiperRef = useRef(null)

  const handlePrev = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  const handleNext = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }

  return (
    <section className="pt-8 pb-4 sm:pt-10 sm:pb-6 lg:pt-14 lg:pb-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-10 md:mb-12">
          <h2 className="text-[#f28cb3] text-xl sm:text-2xl md:text-[28px] font-bold uppercase mb-2 sm:mb-3">
            Feedback
          </h2>
          <h3 className="text-gray-800 text-xl sm:text-3xl md:text-[32px] font-bold capitalize mb-2 sm:mb-3">
            What Parents Say About Us
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
            We are proud of the positive feedback we receive from parents. Here are some of their stories.
          </p>
        </div>

        {/* Slider */}
        <div className="relative max-w-4xl mx-auto">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
            }}
            className="w-full testimonial-swiper"
          >
            {testimonialData.map(({ id, name, position, rating, review, src }) => (
              <SwiperSlide key={id}>
                <Card
                  name={name}
                  position={position}
                  src={src}
                  rating={rating}
                  review={review}
                  prevRef={prevRef}
                  nextRef={nextRef}
                  onPrev={handlePrev}
                  onNext={handleNext}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Testimonial

const Card = ({
  name,
  src,
  position,
  review,
  rating,
  prevRef,
  nextRef,
  onPrev,
  onNext,
}) => {
  return (
    <div className="px-3 sm:px-6 md:px-10 pb-2">
      <div className="relative group">
        {/* Glow background */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-700 blur-lg group-hover:blur-xl" />

        <div className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-md group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] border border-gray-100 group-hover:border-orange-100 overflow-visible">
          {/* Quotation icon */}
          <div className="absolute -top-6 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
            <Image src={quotation} alt="quotation" width={60} height={60} />
          </div>

          {/* Header */}
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 relative z-10">
            {/* Optional avatar */}
            {/* 
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur" />
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white bg-white shadow-md">
                <Image src={src} alt={name} fill className="object-cover" />
              </div>
            </div>
            */}

            <div className="flex-1 min-w-0">
              <h5 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 truncate">
                {name}
              </h5>
              <p className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                {position}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-0.5 bg-gradient-to-r from-orange-200 to-pink-200 mb-4 sm:mb-6 group-hover:from-orange-400 group-hover:to-pink-400 transition-all duration-500" />

          {/* Review */}
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-900 transition-colors duration-300 italic">
            &ldquo;{review}&rdquo;
          </p>

          {/* Rating */}
          <div className="mb-4">
            <Rating star={rating} />
          </div>

          {/* Prev button */}
          <button
            ref={prevRef}
            onClick={onPrev}
            type="button"
            aria-label="Previous testimonial"
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 sm:-translate-x-1/2 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <FaChevronLeft className="text-sm sm:text-base" />
          </button>

          {/* Next button */}
          <button
            ref={nextRef}
            onClick={onNext}
            type="button"
            aria-label="Next testimonial"
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 translate-x-1/2 sm:translate-x-1/2 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <FaChevronRight className="text-sm sm:text-base" />
          </button>
        </div>
      </div>
    </div>
  )
}
