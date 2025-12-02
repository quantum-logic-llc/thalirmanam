'use client'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import SectionName from '../ui/sectionName'
import Title from '../ui/title'
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

    return (
        <section className="lg:pt-15 lg:pb-15 pt-10 pb-10 testimonial" style={{ backgroundColor: '#ffffff' }}>
            <div className="container">
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <h2 className="text-[#f28cb3] text-2xl sm:text-[28px] md:text-[32px] font-bold uppercase mb-3 sm:mb-4">Feedback</h2>
                    <h3 className="text-gray-800 text-2xl sm:text-3xl md:text-[36px] font-bold capitalize mb-3 sm:mb-4">What Parents Say About Us</h3>
                    <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">We are proud of the positive feedback we receive from parents. Here are some of their stories.</p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <Swiper
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
                                    <Card name={name} position={position} src={src} rating={rating} review={review} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            ref={prevRef}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                        >
                            <FaChevronLeft /> Previous
                        </button>
                        <button
                            ref={nextRef}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                        >
                            Next <FaChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial

const Card = ({ name, src, position, review, rating }) => {
    return (
        <div className="py-8">
            <div className="bg-white border border-gray-200 lg:p-10 md:p-8 p-6 w-full rounded-2xl shadow-xl mx-auto">
                <div className="flex justify-between items-start relative z-10 pb-6">
                    <div className="flex items-center gap-5">
                        <div className="rounded-full overflow-hidden border-2 border-orange-200 flex-shrink-0">
                            <Image src={src} alt={name} width={80} height={80} className="object-cover" />
                        </div>
                        <div>
                            <h5 className="text-xl md:text-2xl font-bold text-gray-800">{name}</h5>
                            <p className="text-gray-600">{position}</p>
                        </div>
                    </div>
                    <div className="absolute right-0 top-0 z-[-1] opacity-20">
                        <Image src={quotation} alt="quotation" width={60} height={60} className="lg:w-auto w-12" />
                    </div>
                </div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">{review}</p>
                <Rating star={rating} />
            </div>
        </div>
    )
}