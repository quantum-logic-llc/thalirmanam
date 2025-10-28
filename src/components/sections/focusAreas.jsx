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
                <div className="text-center flex flex-col items-center mb-12">
                    <SlideUp>
                        <h2 className="text-orange-500 text-[32px] font-bold uppercase mb-4">Focus Areas</h2>
                    </SlideUp>
                    <SlideUp delay={2}>
                        <h3 className="text-gray-800 text-[36px] font-bold capitalize mt-2.5 max-w-4xl">
                            What Does Thalir Manam NDC Offer?
                        </h3>
                    </SlideUp>
                </div>

                {/* Cards Grid */}
                <div className="lg:pt-10 pt-5">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7.5">
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
            <div className="border border-[#F2F2F2] bg-background rounded-[10px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-[280px] w-full overflow-hidden bg-gradient-to-br from-cream-foreground/40 to-green-foreground/5">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-4 text-gray-800 leading-tight">
                        {title}
                    </h3>

                    {/* Bullet Points */}
                    <ul className="space-y-3 flex-1">
                        {points.map((point, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                                <span className="text-gray-600 text-sm leading-relaxed">
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
