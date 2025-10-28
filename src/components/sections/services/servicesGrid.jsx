'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import SectionDescription from '@/components/ui/sectionDescription'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

// Import service images
import adhdImage from '@/assets/images/services/adhd.png'
import autismImage from '@/assets/images/services/autism.png'
import behavioralImage from '@/assets/images/services/behavioral-disorders.png'
import cerebralPalsyImage from '@/assets/images/services/cerebral-palsy.png'
import developmentalDelaysImage from '@/assets/images/services/developmental-delays.png'
import learningDisabilitiesImage from '@/assets/images/services/learning-disabilities.png'
import intellectualDisabilityImage from '@/assets/images/services/intellectual-disability.png'
import schoolReadinessImage from '@/assets/images/services/school-readiness.png'
import adolescentHealthImage from '@/assets/images/services/adolescent-health.png'
import antenatalSessionsImage from '@/assets/images/services/antenatal-sessions.png'
import teenTransitionImage from '@/assets/images/services/teen-transition.png'

const servicesData = [
    {
        id: 1,
        title: "Attention Deficit Hyperactive Disorder (ADHD)",
        description: "Comprehensive assessment and management of ADHD with behavioral interventions, parent training, and individualized treatment plans.",
        path: "/services/adhd",
        image: adhdImage,
        color: "from-blue-500 to-blue-600",
        icon: "🎯"
    },
    {
        id: 2,
        title: "Autism Spectrum Disorder (ASD)",
        description: "Early detection, diagnosis, and evidence-based interventions including behavioral therapy, social skills training, and family support.",
        path: "/services/autism-spectrum-disorder",
        image: autismImage,
        color: "from-purple-500 to-purple-600",
        icon: "🧩"
    },
    {
        id: 3,
        title: "Behavioural Disorders",
        description: "Specialized treatment for conduct disorders, oppositional defiant disorder, and other behavioral challenges in children.",
        path: "/services/behavioural-disorders",
        image: behavioralImage,
        color: "from-red-500 to-red-600",
        icon: "🎭"
    },
    {
        id: 4,
        title: "Cerebral Palsy (CP)",
        description: "Multidisciplinary approach to manage motor disabilities, improve function, and enhance quality of life for children with CP.",
        path: "/services/cerebral-palsy",
        image: cerebralPalsyImage,
        color: "from-green-500 to-green-600",
        icon: "🦾"
    },
    {
        id: 5,
        title: "Developmental Delays",
        description: "Early identification and intervention for delays in speech, motor skills, cognitive development, and social-emotional growth.",
        path: "/services/developmental-delays",
        image: developmentalDelaysImage,
        color: "from-pink-500 to-pink-600",
        icon: "📈"
    },
    {
        id: 6,
        title: "Learning Disabilities",
        description: "Assessment and support for children with dyslexia, dyscalculia, dysgraphia, and other specific learning difficulties.",
        path: "/services/learning-disabilities",
        image: learningDisabilitiesImage,
        color: "from-orange-500 to-orange-600",
        icon: "📚"
    },
    {
        id: 7,
        title: "Intellectual Disability",
        description: "Comprehensive care and support services to help children with intellectual disabilities reach their maximum potential.",
        path: "/services/intellectual-disability",
        image: intellectualDisabilityImage,
        color: "from-indigo-500 to-indigo-600",
        icon: "🧠"
    },
    {
        id: 8,
        title: "School Readiness",
        description: "Preparing children for academic success through developmental assessments and pre-academic skill building programs.",
        path: "/services/school-readiness",
        image: schoolReadinessImage,
        color: "from-cyan-500 to-cyan-600",
        icon: "🎒"
    },
    {
        id: 9,
        title: "Adolescent Health and Well-being",
        description: "Supporting teenagers with developmental challenges through transition planning and mental health services.",
        path: "/services/adolescent-health",
        image: adolescentHealthImage,
        color: "from-teal-500 to-teal-600",
        icon: "🌱"
    },
    {
        id: 10,
        title: "Developmental Supportive Care – Antenatal Sessions",
        description: "Prenatal counseling and support for expectant parents to promote healthy child development from birth.",
        path: "/services/antenatal-sessions",
        image: antenatalSessionsImage,
        color: "from-amber-500 to-amber-600",
        icon: "🤰"
    },
    {
        id: 11,
        title: "Teen Transition Clinic for Adolescents with Special Need",
        description: "Specialized support for adolescents transitioning to adulthood, focusing on independence and life skills.",
        path: "/services/teen-transition-clinic",
        image: teenTransitionImage,
        color: "from-emerald-500 to-emerald-600",
        icon: "🚀"
    }
]

const ServicesGrid = () => {
    return (
        <section className="pt-20 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <SectionName className="text-primary-foreground bg-primary/10 px-6 py-2 rounded-full inline-block">Our Services</SectionName>
                    <Title size="3.5xl" className="mb-6 mt-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                        Comprehensive Developmental Care
                    </Title>
                    <SectionDescription className="max-w-3xl mx-auto text-gray-600 text-lg">
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
                    spaceBetween={30}
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
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 25,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    className="services-carousel pb-16 px-2"
                >
                    {servicesData.map(({ id, title, description, path, image, color, icon }) => (
                        <SwiperSlide key={id}>
                            <Link href={path} className="group block h-full">
                                <div className="bg-white rounded-3xl overflow-hidden h-full transition-all duration-500 hover:shadow-2xl shadow-lg border border-gray-100 hover:border-transparent relative">
                                    {/* Gradient Overlay on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-95 transition-opacity duration-500 z-10`}></div>

                                    {/* Image Header */}
                                    <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-primary/10 to-orange-100">
                                        <Image
                                            src={image}
                                            alt={title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-3"
                                            unoptimized
                                        />
                                        {/* Icon Badge */}
                                        <div className="absolute top-4 right-4 w-14 h-14 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 z-20">
                                            {icon}
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-7 relative z-20">
                                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300 mb-4 leading-tight min-h-[60px]">
                                            {title}
                                        </h3>
                                        <p className="text-gray-600 group-hover:text-white/95 transition-colors duration-300 text-base leading-relaxed mb-6 line-clamp-3">
                                            {description}
                                        </p>

                                        {/* CTA Button */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-200 group-hover:border-white/30 transition-colors duration-300">
                                            <span className="text-primary group-hover:text-white text-sm font-bold uppercase tracking-wider transition-colors">
                                              Read More
                                            </span>
                                            <div className="w-10 h-10 rounded-full bg-primary/10 group-hover:bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:translate-x-2">
                                                <span className="text-primary group-hover:text-white text-xl font-bold transition-colors">→</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden z-30">
                                        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* View All Services Button */}
                <div className="text-center mt-12">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:from-blue-600 hover:to-primary"
                    >
                        <span>View All Services</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ServicesGrid
