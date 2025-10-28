import React from 'react'
import Image from 'next/image'
import SectionName from '../ui/sectionName'
import Title from '../ui/title'
import SlideUp from '@/lib/animations/slideUp'
import { focusAreasData } from '@/lib/fackdata/focusAreasData'

const FocusAreas = () => {
    return (
        <section className="lg:pt-15 pt-10 lg:pb-15 pb-10 bg-cream relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-50/30 rounded-full blur-3xl"></div>

            <div className="container relative z-10">
                {/* Section Header */}
                <div className="text-center flex flex-col items-center mb-8 sm:mb-10 md:mb-12 px-3 sm:px-4">
                    <SlideUp>
                        <h2 className="text-orange-500 text-2xl sm:text-[28px] md:text-[32px] font-bold uppercase mb-3 sm:mb-4">Focus Areas</h2>
                    </SlideUp>
                    <SlideUp delay={2}>
                        <h3 className="text-gray-800 text-2xl sm:text-3xl md:text-[36px] font-bold capitalize mt-2.5 max-w-4xl">
                            What Does Thalir Manam NDC Offer?
                        </h3>
                    </SlideUp>
                </div>

                {/* Cards Grid */}
                <div className="lg:pt-10 pt-5 px-3 sm:px-4">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 sm:gap-6 md:gap-7.5">
                        {focusAreasData.map((area) => (
                            <FocusAreaCard
                                key={area.id}
                                id={area.id}
                                title={area.title}
                                image={area.image}
                                points={area.points}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FocusAreas

const FocusAreaCard = ({ id, title, image, points }) => {
    return (
        <SlideUp delay={id + 2}>
            <div className="border border-[#F2F2F2] bg-background rounded-lg sm:rounded-[10px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-[220px] sm:h-[250px] md:h-[280px] w-full overflow-hidden bg-gradient-to-br from-cream-foreground/40 to-green-foreground/5">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-gray-800 leading-tight">
                        {title}
                    </h3>

                    {/* Bullet Points */}
                    <ul className="space-y-2 sm:space-y-2.5 md:space-y-3 flex-1">
                        {points.map((point, index) => (
                            <li key={index} className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                                <span className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-1.5 sm:mt-2"></span>
                                <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                    {point}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </SlideUp>
    )
}
