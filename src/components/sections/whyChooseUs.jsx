import React from 'react'
import SectionName from '../ui/sectionName'
import Title from '../ui/title'
import SlideUp from '@/lib/animations/slideUp'
import { whyChooseUsData } from '@/lib/fackdata/whyChooseUsData'
import { FaUserDoctor, FaPeopleGroup, FaLightbulb, FaHeart } from 'react-icons/fa6'

const WhyChooseUs = () => {
    return (
        <section className="lg:py-15 py-10 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-50/30 rounded-full blur-3xl"></div>

            <div className="container relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <SlideUp>
                        <SectionName className="text-primary-foreground">WHY CHOOSE US?</SectionName>
                    </SlideUp>
                    <SlideUp delay={2}>
                        <Title size="3.5xl" className="mt-2.5">
                            Why Thalir Manam?
                        </Title>
                    </SlideUp>
                </div>

                {/* Features Grid */}
                <div className="lg:pt-10 pt-5">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
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
    // Icon component mapping
    const renderIcon = () => {
        const iconClasses = "w-16 h-16 mb-6 text-primary transition-colors duration-500"

        switch (icon) {
            case 'doctor':
                return <FaUserDoctor className={iconClasses} />
            case 'team':
                return <FaPeopleGroup className={iconClasses} />
            case 'learning':
                return <FaLightbulb className={iconClasses} />
            case 'personalized':
                return <FaHeart className={iconClasses} />
            default:
                return <FaHeart className={iconClasses} />
        }
    }

    return (
        <SlideUp delay={id + 2}>
            <div className="group relative h-full">
                {/* Card */}
                <div className="bg-white border-2 border-primary/10 rounded-2xl p-8 text-center shadow-md hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-center justify-start relative overflow-hidden group-hover:border-primary/30">
                    {/* Background Gradient Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                    {/* Decorative Wave Pattern */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Icon */}
                    <div className="flex items-center justify-center mb-6">
                        {renderIcon()}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-800 leading-snug transition-colors duration-500">
                        {title}
                    </h3>

                    {/* Decorative Element */}
                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-primary/5 rounded-tl-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>

                {/* Wavemark Decorative Element */}
                <div className="absolute -top-2 -left-2 text-primary/10 group-hover:text-primary/20 transition-colors duration-500 text-4xl font-black">
                    〽
                </div>
            </div>
        </SlideUp>
    )
}
