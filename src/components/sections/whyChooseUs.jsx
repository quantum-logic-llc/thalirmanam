import React from 'react'
import SectionName from '../ui/sectionName'
import Title from '../ui/title'
import SlideUp from '@/lib/animations/slideUp'
import { whyChooseUsData } from '@/lib/fackdata/whyChooseUsData'
import { FaUserDoctor, FaPeopleGroup, FaLightbulb, FaHeart } from 'react-icons/fa6'

const WhyChooseUs = () => {
    return (
        <section className="lg:py-15 py-10 relative overflow-hidden" style={{ backgroundColor: '#eff6ff' }}>
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-50/30 rounded-full blur-3xl"></div>

            <div className="container relative z-10">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-10 md:mb-12 px-3 sm:px-4">
                    <SlideUp>
                        <h2 className="text-orange-500 text-2xl sm:text-[28px] md:text-[32px] font-bold uppercase mb-3 sm:mb-4">Why Choose?</h2>
                    </SlideUp>
                    <SlideUp delay={2}>
                        <h3 className="text-gray-800 text-2xl sm:text-3xl md:text-[36px] font-bold capitalize mt-2.5">
                            Thalir Manam
                        </h3>
                    </SlideUp>
                </div>

                {/* Features Grid */}
                <div className="lg:pt-10 pt-5 px-3 sm:px-4">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 sm:gap-6 md:gap-8">
                        {whyChooseUsData.map((item) => (
                            <FeatureCard
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                icon={item.icon}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs

const FeatureCard = ({ id, title, icon }) => {
    // Icon component mapping with beautiful SVG icons
    const renderIcon = () => {
        const iconContainerClasses = "w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mb-4 sm:mb-5 md:mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
        const iconClasses = "w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white"

        switch (icon) {
            case 'doctor':
                return (
                    <div className={iconContainerClasses}>
                        <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                    </div>
                )
            case 'team':
                return (
                    <div className={iconContainerClasses}>
                        <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                )
            case 'learning':
                return (
                    <div className={iconContainerClasses}>
                        <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                )
            case 'personalized':
                return (
                    <div className={iconContainerClasses}>
                        <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                )
            default:
                return (
                    <div className={iconContainerClasses}>
                        <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                )
        }
    }

    return (
        <SlideUp delay={id + 2}>
            <div className="group relative h-full">
                {/* Card */}
                <div className="bg-white border-2 border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-center justify-start relative overflow-hidden group-hover:border-orange-300 group-hover:-translate-y-2">
                    {/* Background Gradient Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Decorative circles */}
                    <div className="absolute -top-8 -right-8 sm:-top-10 sm:-right-10 w-24 h-24 sm:w-32 sm:h-32 bg-orange-500/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="absolute -bottom-8 -left-8 sm:-bottom-10 sm:-left-10 w-24 h-24 sm:w-32 sm:h-32 bg-green-500/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

                    {/* Icon */}
                    <div className="relative z-10 flex items-center justify-center mb-4 sm:mb-5 md:mb-6">
                        {renderIcon()}
                    </div>

                    {/* Title */}
                    <h3 className="relative z-10 text-sm sm:text-base md:text-lg font-bold text-gray-800 leading-snug transition-colors duration-500 group-hover:text-gray-900">
                        {title}
                    </h3>

                    {/* Decorative bottom bar */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-green-500 group-hover:w-full transition-all duration-500"></div>
                </div>
            </div>
        </SlideUp>
    )
}
