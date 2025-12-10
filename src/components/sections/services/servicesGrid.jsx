'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import SectionDescription from '@/components/ui/sectionDescription'
import { Button } from '@/components/ui/button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import services from '@/lib/fackdata/servicesDataOne'

// Import service images
import adhdImage from '@/assets/images/services/adhd2.png'
import autismImage from '@/assets/images/services/Asd.png'
import behavioralImage from '@/assets/images/services/behavioral-disorders2.png'
import cerebralPalsyImage from '@/assets/images/services/cerebral-disorders1.png'
import developmentalDelaysImage from '@/assets/images/services/developmental-delays2.png'
import learningDisabilitiesImage from '@/assets/images/services/learning-disabilities2.png'
import intellectualDisabilityImage from '@/assets/images/services/disorder.png'
import schoolReadinessImage from '@/assets/images/services/schoolchild.png'
import adolescentHealthImage from '@/assets/images/services/service9.png'
import antenatalSessionsImage from '@/assets/images/services/service13.png'
import teenTransitionImage from '@/assets/images/services/service11.png'
import { title } from 'process'

const servicesData = [
   
    {
        id: 1,
        title: "Early Intervention Programs",
        description: "Tailored therapy for infants and children.",
        path: "/services/adhd",
        image: adhdImage,
        color: "from-purple-500 to-purple-600",
    },
    {
        id: 2,
        title: "Skills Bridge Program",
        description: "Targeted interventions to close developmental and life-skill gaps.",
        path: "/services/skills-bridge-program",
        image: adolescentHealthImage,
        color: "from-cyan-500 to-cyan-600",
    },
    {
        id: 7,
        title: "Multidisciplinary Care",
        description: "Collaborative planning with psychologists, therapists, educators, and medical specialists",
        path: "/services/multidisciplinary-care",
        image: antenatalSessionsImage,
        color: "from-amber-500 to-amber-600",
    },
    {
        id: 8,
        title: "Learning Disabilities",
        description: "Support for children with difficulties in reading, writing, math, reasoning, listening, and speaking - not related to intelligence or motivation.",
        image: intellectualDisabilityImage,
        color: "from-red-500 to-red-600",
    },
    {   id: 9,
        title: "intellectual-disability",
        description: "Assessment and support when there are limits to a person's ability to learn at an expected level and function in daily life.",
        image: schoolReadinessImage,
        color: "from-indigo-500 to-indigo-600",
    },
    {
        id: 10,
        title: "Cerebral Palsy",
        description: "Therapies and interventions to improve movement, posture, and overall quality of life for children with cerebral palsy.",
        image: cerebralPalsyImage,
        color: "from-pink-500 to-pink-600",
    },
    {
        id: 11,
        title: "Behavioral Disorders",
        description: "Strategies and therapies to manage behaviors associated with conditions like Oppositional Defiant Disorder (ODD) and Conduct Disorder (CD).",
        image: behavioralImage,
        color: "from-yellow-500 to-yellow-600",
    },
    {
        id: 12,
        title: "ADHD Management",
        description: "Comprehensive support for children with Attention Deficit Hyperactivity Disorder (ADHD) including behavioral therapy and parent training.",
        image: adhdImage,
        color: "from-lime-500 to-lime-600",
    },
    {
        id: 3,
        title: "Neurodevelopmental Support",
        description: "Executive functioning, social skills, and emotional regulation for children and teens.",
        path: "/services/neurodevelopmental-support",
        image: autismImage,
        color: "from-green-500 to-green-600",
    },
    {
        id: 4,
        title: "Learning Support & Educational Planning",
        description: "Personalized strategies for academic success.",
        path: "/services/learning-support",
        image: learningDisabilitiesImage,
        color: "from-orange-500 to-orange-600",
    },
    {
        id: 5,
        title: "Teen & Adolescent Transition Clinic",
        description: "Preparing teens for school, vocational, and life transitions.",
        path: "/services/teen-adolescent-transition",
        image: teenTransitionImage,
        color: "from-teal-500 to-teal-600",
    },
    
    {
        id: 7,
        title: "Multidisciplinary Care",
        description: "Collaborative planning with psychologists, therapists, educators, and medical specialists",
        path: "/services/multidisciplinary-care",
        image: antenatalSessionsImage,
        color: "from-amber-500 to-amber-600",
    }
]

const ServicesGrid = () => {
    return (
        <section className="pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
            <div className="container relative z-10">
                <div className="text-center mb-8 sm:mb-10 md:mb-12 px-3 sm:px-4">
                    <h2 className="text-[#f28cb3] text-xl sm:text-2xl md:text-[26px] font-bold uppercase mb-2 sm:mb-3">Our Services</h2>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-bold capitalize mb-3 sm:mb-4 mt-2">
                        We offer comprehensive, individualized support:
                    </h3>
                    <SectionDescription className="max-w-3xl mx-auto text-gray-700 text-sm sm:text-sm md:text-base">
                        At Thalir Manam, we offer evidence-based therapeutic services and interventions designed to support children with diverse developmental needs. Our multidisciplinary approach ensures personalized care for every child.
                    </SectionDescription>
                </div>

                <style jsx global>{`
                    .services-carousel .swiper-button-next,
                    .services-carousel .swiper-button-prev {
                        background: white;
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                        transition: all 0.3s ease;
                    }

                    .services-carousel .swiper-button-next:hover,
                    .services-carousel .swiper-button-prev:hover {
                        background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
                        transform: scale(1.1);
                        box-shadow: 0 6px 25px rgba(59, 130, 246, 0.4);
                    }

                    .services-carousel .swiper-button-next:after,
                    .services-carousel .swiper-button-prev:after {
                        font-size: 20px;
                        font-weight: bold;
                        color: #3B82F6;
                    }

                    .services-carousel .swiper-button-next:hover:after,
                    .services-carousel .swiper-button-prev:hover:after {
                        color: white;
                    }

                    .services-carousel .swiper-pagination-bullet {
                        width: 12px;
                        height: 12px;
                        background: #CBD5E1;
                        opacity: 1;
                        transition: all 0.3s ease;
                    }

                    .services-carousel .swiper-pagination-bullet-active {
                        background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
                        width: 32px;
                        border-radius: 6px;
                    }

                    .services-carousel .swiper-slide {
                        height: auto;
                        padding-bottom: 8px;
                    }

                    @media (max-width: 768px) {
                        .services-carousel .swiper-button-next,
                        .services-carousel .swiper-button-prev {
                            width: 40px;
                            height: 40px;
                        }

                        .services-carousel .swiper-button-next:after,
                        .services-carousel .swiper-button-prev:after {
                            font-size: 16px;
                        }
                    }
                `}</style>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{
                        clickable: true,
                        dynamicBullets: true
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    loop={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 25,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    className="services-carousel pb-12 sm:pb-14 md:pb-16 px-1 sm:px-2"
                >
                    {servicesData.map(({ id, title, description, path, image, color, icon }) => (
                        <SwiperSlide key={id}>
                            {/* <Link href={`/services/${id}`} className="group block h-full"> */}
                                <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden h-full transition-all duration-500 hover:shadow-2xl shadow-lg border border-gray-100 hover:border-transparent relative">

                                    {/* Image Header */}
                                    <div className="relative w-full h-48 sm:h-70 md:h-56 overflow-hidden bg-gradient-to-br from-primary/10 to-orange-100">
                                        <Image
                                            src={image}
                                            alt={title}
                                            fill
                                            className="object-cover  transition-transform duration-700"
                                            priority
                                            unoptimized
                                        />
                                    </div>

                                    {/* Card Content */}

                                    <div className="p-4 sm:p-5 md:p-7 relative z-20">
                                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 transition-colors duration-300 mb-3 sm:mb-4 leading-tight min-h-[48px] sm:min-h-[56px] md:min-h-[60px]">
                                            {title}
                                        </h3>
                                        <p className="text-gray-600 transition-colors duration-300 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-5 md:mb-6 line-clamp-3">
                                            {description}
                                        </p>

                                        {/* CTA Button */}
                                        {/* <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-200 group-hover:border-white/30 transition-colors duration-300">
                                            <span className="text-primary text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors">
                                              Read More
                                            </span>
                                            <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-primary/10 group-hover:bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:translate-x-2">
                                                <span className="text-primary text-lg sm:text-xl font-bold transition-colors">→</span>
                                            </div>
                                        </div> */}
                                    </div>

                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden z-30">
                                        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                                    </div>
                                </div>
                            {/* </Link> */}
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* View All Services Button */}
                <div className="text-center mt-8 sm:mt-10 md:mt-12 px-3 sm:px-4">
                    <Button asChild size="lg" variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold px-8 py-6 rounded-full transition-all duration-300">
                        <Link href="/services">View All Services</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default ServicesGrid
