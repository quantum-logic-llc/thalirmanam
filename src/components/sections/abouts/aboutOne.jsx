import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Title from '@/components/ui/title'
import aboutus from "@/assets/images/about/aboutus.png"
import { Button } from '@/components/ui/button'
import SectionName from '@/components/ui/sectionName'
import { cn } from '@/lib/utils'
import SlideUp from '@/lib/animations/slideUp'
import SectionDescription from '@/components/ui/sectionDescription'
import { FaCheckCircle, FaCalendarCheck } from 'react-icons/fa'

const AboutOne = ({ gridClass, isAboutpage }) => {
    // 'gridClass' and 'isAboutpage' props come from about-us and home-1 page

    const highlights = [
        "Over 10+ Years of Excellence in Pediatric Care",
        "Expert Team of Developmental Specialists",
        "Evidence-Based Treatment Approaches",
        "Multidisciplinary Collaboration",
        "Family-Centered Methodology"
    ]

    return (
        <section className="overflow-hidden relative" style={{ backgroundColor: '#eff6ff' }}>
            {/* Full Width Image with Curve */}
            <div className="w-full relative">
                <div className="relative overflow-hidden rounded-b-[50px] lg:rounded-b-[100px]">
                    <Image
                        src={aboutus}
                        alt="Thalir Manam Neurodevelopmental centre"
                        width={1920}
                        height={800}
                        className="object-cover w-full h-[500px] lg:h-[700px]"
                        priority
                    />
                </div>
                {/* Wave Shape at Bottom */}
                <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden">
                    <svg
                        viewBox="0 0 1440 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-[80px] lg:h-[120px]"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
                            fill="#eff6ff"
                        />
                    </svg>
                </div>
            </div>

            {/* Content Section */}
            <div className="lg:pt-15 pt-10 lg:pb-15 pb-10">
                <div className="container">
                    <div className={cn("grid lg:grid-cols-1 grid-cols-1 px-3 sm:px-4", gridClass)}>
                        {/* Content */}
                        <div className={`${isAboutpage ? "max-w-4xl" : "lg:max-w-3xl"} mx-auto`}>
                            <SlideUp delay={2}>
                                <h2 className="text-orange-500 font-bold uppercase mb-3 sm:mb-4 text-center" style={{ fontSize: '34px' }}>About Us</h2>
                            </SlideUp>
                            <SlideUp delay={3}>
                                <Title size={"3.5xl"} className={"pb-5 text-gray-800 text-center"} style={{ fontSize: '36px' }}>
                                 Nurturing development and shaping futures
                                </Title>
                            </SlideUp>

                            <SlideUp delay={4}>
                                <div className="max-w-3xl mx-auto">
                                    <SectionDescription className="mb-5 text-base lg:text-lg leading-relaxed text-center">
                                        <strong className="text-gray-800">Thalir Manam Neurodevelopmental centre</strong> is dedicated to providing comprehensive developmental and behavioral pediatric services with expertise, innovation, and compassion.
                                    </SectionDescription>
                                </div>
                            </SlideUp>

                            <SlideUp delay={5}>
                                <div className="max-w-3xl mx-auto">
                                    <SectionDescription className="mb-5 text-base lg:text-lg leading-relaxed text-center">
                                        Under the expert guidance of <strong className="text-gray-800">Dr. Naveena Karthik</strong>, we offer specialized care for children with developmental and behavioral challenges including Autism Spectrum Disorders, ADHD, Learning Disabilities, Cerebral Palsy, and various neurodevelopmental conditions.
                                    </SectionDescription>
                                </div>
                            </SlideUp>

                            {isAboutpage && (
                                <>
                                    <SlideUp delay={6}>
                                        <div className="max-w-3xl mx-auto">
                                            <SectionDescription className="mb-6 text-base lg:text-lg leading-relaxed text-center">
                                                Our multidisciplinary approach combines clinical expertise with compassionate care, creating individualized treatment plans that address each child&apos;s unique strengths and challenges. We ensure comprehensive support for both children and their families throughout their developmental journey.
                                            </SectionDescription>
                                        </div>
                                    </SlideUp>

                                    {/* Key Highlights */}
                                    <SlideUp delay={7}>
                                        <div className="mb-8 space-y-3 max-w-2xl mx-auto">
                                            {highlights.map((highlight, index) => (
                                                <div key={index} className="flex items-start gap-3 group">
                                                    <FaCheckCircle className="text-green-600 text-lg mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                                    <span className="text-gray-700 text-sm lg:text-base font-medium">{highlight}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </SlideUp>
                                </>
                            )}

                            <SlideUp delay={8}>
                                <div className='flex flex-col sm:flex-row gap-4 lg:mt-10 mt-7 justify-center'>
                                    <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                        <Link href="mailto:thalirmanam5@gmail.com?subject=Appointment%20Request&body=Hello%2C%0A%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0APlease%20provide%20the%20following%20details%3A%0A-%20Name%3A%0A-%20Phone%3A%0A-%20Preferred%20Date%3A%0A-%20Service%20Required%3A%0A%0AThank%20you." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                                            <FaCalendarCheck />
                                            <span>Book Appointment</span>
                                        </Link>
                                    </Button>
                                    <Button asChild size="lg" variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold px-8 py-6 rounded-full transition-all duration-300">
                                        <Link href="/services">Our Services</Link>
                                    </Button>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutOne