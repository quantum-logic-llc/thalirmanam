import React from 'react'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'
import Car from '@/assets/icons/car'
import Toys from '@/assets/icons/toys'
import Feeder from '@/assets/icons/feeder'
import Book from '@/assets/icons/book'
import Mat from '@/assets/icons/mat'
import BabyBody from '@/assets/icons/baby-body'
import Chalkboard from '@/assets/icons/chalkboard'
import AutismSupport from '@/assets/icons/autism-support'
import SlideUp from '@/lib/animations/slideUp'

const ServiceCardTwo = ({ icon, service_name, service_details, index = 0 }) => {
    const RenderComponent = ({ item }) => {
        switch (item) {
            case 'car':
                return <Car />
            case 'chalkboard':
                return <Chalkboard />
            case 'autism-support':
                return <AutismSupport />
            case 'toys':
                return <Toys />
            case 'feeder':
                return <Feeder />
            case 'book':
                return <Book height='60' width='60' />
            case 'mat':
                return <Mat height='60' width='60' />
            case 'baby-body':
                return <BabyBody height='60' width='60' />
            default:
                break;
        }
    }

    return (
        <SlideUp delay={2 + index * 0.1}>
            <div className="relative rounded-2xl bg-white border-2 border-[#F2F2F2] lg:p-10 p-6 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:border-green-foreground/30 hover:-translate-y-2 group/card w-full min-h-[420px] flex flex-col justify-between overflow-hidden">
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-foreground/0 via-transparent to-warm-foreground/0 group-hover/card:from-green-foreground/5 group-hover/card:to-warm-foreground/5 transition-all duration-500 pointer-events-none"></div>

                {/* Icon container with enhanced styling */}
                <div className="relative md:max-w-[88px] max-w-[70px] w-full max-h-[88px] flex justify-center items-center rounded-xl border-2 border-[#F2F2F2] bg-cream-foreground/30 sm:p-[14px] p-2.5 static lg:absolute -left-11 top-1/2 lg:-translate-y-1/2 transition-all duration-500 text-green-foreground group-hover/card:bg-green group-hover/card:text-cream-foreground group-hover/card:border-green group-hover/card:scale-110 group-hover/card:shadow-lg z-10">
                    <RenderComponent item={icon} />
                </div>

                {/* Content section */}
                <div className="lg:pl-11 mt-4 lg:mt-0 relative z-10 flex flex-col flex-grow">
                    <h4 className="mb-3">
                        <Link href="/service-details" className="font-bold lg:text-2xl text-xl text-gray-800 group-hover/card:text-green-foreground transition-all duration-500 leading-snug hover:underline decoration-2 underline-offset-4">
                            {service_name}
                        </Link>
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base flex-grow">
                        {service_details}
                    </p>

                    {/* Enhanced Read More button */}
                    <Link href="/service-details" className="inline-flex items-center gap-2.5 mt-6 group/btn self-start">
                        <span className="font-semibold text-gray-700 group-hover/btn:text-green-foreground transition-all duration-300">
                            Learn More
                        </span>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-foreground/10 text-green-foreground group-hover/btn:bg-green-foreground group-hover/btn:text-white transition-all duration-300 group-hover/btn:translate-x-1">
                            <FaArrowRight className="text-sm" />
                        </span>
                    </Link>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-foreground/10 to-transparent rounded-bl-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
            </div>
        </SlideUp>
    )

}

export default ServiceCardTwo