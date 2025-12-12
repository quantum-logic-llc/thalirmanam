'use client'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { testimonialData } from '@/lib/fackdata/testimonialData'
import quotation from "@/assets/images/testimonial/quotation.png"
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
        <section className="lg:pt-15 lg:pb-0 pt-10 pb-0 testimonial" style={{ backgroundColor: '#ffffff' }}>
            <div className="container">
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <h2 className="text-[#f28cb3] text-2xl sm:text-[28px] md:text-[32px] font-bold uppercase mb-3 sm:mb-4">Feedback</h2>
                    <h3 className="text-gray-800 text-2xl sm:text-3xl md:text-[36px] font-bold capitalize mb-3 sm:mb-4">What Parents Say About Us</h3>
                    <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">We are proud of the positive feedback we receive from parents. Here are some of their stories.</p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation]}
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current
                            swiper.params.navigation.nextEl = nextRef.current
                        }}
                        className='w-full testimonial-swiper'
                    >
                        {
                            testimonialData.map(({ id, name, position, rating, review, src }) => (
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
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Testimonial

const Card = ({ name, src,position, review, rating, prevRef, nextRef, onPrev, onNext }) => {
    return (
        <div className="py-10 px-20 pb-0">
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-1000 blur-lg group-hover:blur-xl"></div>

                <div className="relative bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border border-gray-100 group-hover:border-orange-100 overflow-visible">
                    
                    {/* <div className="absolute top-0 left-0 h-1 w-20 bg-gradient-to-r from-orange-500 to-pink-500 rounded-r-full"></div> */}

                    <div className="absolute -top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                        <Image src={quotation} alt="quotation" width={80} height={80} />
                    </div>

                    <div className="flex items-center gap-4 mb-6 relative z-10">
                        <div className="relative flex-shrink-0">
                            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
                            {/* <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-3 border-white bg-white shadow-md">
                                <Image src={src} alt={name} fill className="object-cover" />
                            </div> */}
                        </div>

                        <div className="flex-1 min-w-0">
                            <h5 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                                {name}
                            </h5>
                            <p className="text-sm sm:text-base text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                                {position}
                            </p>
                        </div>
                    </div>

                    <div className="h-0.5 bg-gradient-to-r from-orange-200 to-pink-200 mb-6 group-hover:from-orange-400 group-hover:to-pink-400 transition-all duration-500"></div>

                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 group-hover:text-gray-900 transition-colors duration-300 italic">
                        &ldquo;{review}&rdquo;
                    </p>

                    <div className="mb-4">
                        <Rating star={rating} />
                    </div>

                    {/* Middle Left - Previous Button - Clickable */}
                    <button
                        ref={prevRef}
                        onClick={onPrev}
                        type="button"
                        aria-label="Previous testimonial"
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 hover:-translate-x-2 cursor-pointer"
                    >
                        <FaChevronLeft className="text-base sm:text-lg" />
                    </button>

                    {/* Middle Right - Next Button - Clickable */}
                    <button
                        ref={nextRef}
                        onClick={onNext}
                        type="button"
                        aria-label="Next testimonial"
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 hover:translate-x-2 cursor-pointer"
                    >
                        <FaChevronRight className="text-base sm:text-lg" />
                    </button>
                </div>
            </div>
        </div>
    )
}
