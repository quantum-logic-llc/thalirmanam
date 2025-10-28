'use client'
import React, { useRef } from 'react'
import SectionName from '../ui/sectionName'
import Title from '../ui/title'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ServiceCardTwo from './services/serviceCardTwo'
import pencil_rocket from "@/assets/images/shapes/pencil-rocket.png"
import { servicesDataTwo } from '@/lib/fackdata/servicesDataTwo'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

const Programs = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="lg:pt-20 pt-12 lg:pb-20 pb-12 relative overflow-hidden bg-gradient-to-b from-white via-cream-foreground/5 to-white">
    {/* Decorative background shapes */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-green-foreground/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-warm-foreground/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

    <div className="container relative z-10">
        {/* Header Section */}
        <div className="text-center flex flex-col items-center mb-12 lg:mb-16">
            <SectionName className={"text-green-foreground"}>Our Programs</SectionName>
            <Title size={"3.5xl"} className={"lg:max-w-[700px] mt-3"}>Specialized Programs for Every Child</Title>
            <p className="text-muted-foreground mt-4 max-w-2xl text-base lg:text-lg">
                Comprehensive developmental support tailored to each child's unique needs and potential
            </p>
        </div>

        {/* Programs Carousel */}
        <div className="relative">
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 pointer-events-none">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <button
                            ref={prevRef}
                            className="pointer-events-auto w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white border-2 border-green-foreground/20 hover:bg-green-foreground hover:border-green-foreground text-green-foreground hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed -ml-6 lg:-ml-8"
                            aria-label="Previous slide"
                        >
                            <FaChevronLeft className="text-lg group-hover:scale-110 transition-transform" />
                        </button>
                        <button
                            ref={nextRef}
                            className="pointer-events-auto w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white border-2 border-green-foreground/20 hover:bg-green-foreground hover:border-green-foreground text-green-foreground hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed -mr-6 lg:-mr-8"
                            aria-label="Next slide"
                        >
                            <FaChevronRight className="text-lg group-hover:scale-110 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Swiper Carousel */}
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
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
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                modules={[Navigation, Pagination, Autoplay]}
                className="programs-swiper !pb-12"
            >
                {
                    servicesDataTwo.map(({icon, id, service_details, service_name}, index) => (
                        <SwiperSlide key={id}>
                            <ServiceCardTwo
                                icon={icon}
                                service_name={service_name}
                                service_details={service_details}
                                index={index}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 lg:mt-16">
            <p className="text-muted-foreground text-sm lg:text-base mb-4">
                Every child deserves the right support to reach their full potential
            </p>
            <div className="inline-flex items-center gap-2 text-green-foreground font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Contact us to learn more about our programs</span>
            </div>
        </div>
    </div>

    {/* Animated decorative element */}
    <div className="absolute top-8 right-11 z-[5] lg:max-w-full max-w-38 md:block hidden animate-left-right">
        <Image src={pencil_rocket} alt="pencil" width={144} height={144} className="w-full h-auto drop-shadow-lg" />
    </div>

</section>
  )
}

export default Programs