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
        <section className="lg:pt-15 pt-10 lg:pb-15 pb-10 overflow-hidden" style={{ backgroundColor: '#eff6ff' }}>
            <div className="container">
                <div className={cn("grid lg:grid-cols-[45%_55%] grid-cols-1 items-center lg:gap-x-16 gap-y-8 px-3 sm:px-4", gridClass)}>
                    <div className='flex lg:justify-end justify-center px-4'>
                        <SlideUp>
                            <div className="relative max-w-md w-full">
                                <div className="overflow-hidden rounded-3xl border-4 border-white shadow-2xl hover:shadow-3xl transition-all duration-300 relative z-10">
                                    <Image
                                        src={aboutus}
                                        alt="Thalir Manam Child Development Centre"
                                        width={450}
                                        height={550}
                                        className="object-cover w-full h-auto"
                                    />
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10"></div>
                                <div className="absolute top-0 left-0 w-24 h-24 bg-blue-200/40 rounded-full blur-2xl -z-10"></div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- right side start --> */}
                    <div className={`${isAboutpage ? "max-w-3xl" : "lg:max-w-[600px]"} lg:pt-0 pt-4`}>
                        <SlideUp delay={2}>
                            <h2 className="text-orange-500 font-bold uppercase mb-3 sm:mb-4" style={{ fontSize: '34px' }}>About Us</h2>
                        </SlideUp>
                        <SlideUp delay={3}>
                            <Title size={"3.5xl"} className={"pb-5 text-gray-800"} style={{ fontSize: '36px' }}>
                                Nurturing Health, Shaping Futures
                            </Title>
                        </SlideUp>

                        <SlideUp delay={4}>
                            <div className="max-w-2xl">
                                <SectionDescription className="mb-5 text-base lg:text-lg leading-relaxed">
                                    <strong className="text-gray-800">Thalir Manam Child Development Centre</strong> is dedicated to providing comprehensive developmental and behavioral pediatric services with expertise, innovation, and compassion.
                                </SectionDescription>
                            </div>
                        </SlideUp>

                        <SlideUp delay={5}>
                            <div className="max-w-2xl">
                                <SectionDescription className="mb-5 text-base lg:text-lg leading-relaxed">
                                    Under the expert guidance of <strong className="text-gray-800">Dr. Naveena Karthik</strong>, we offer specialized care for children with developmental and behavioral challenges including Autism Spectrum Disorders, ADHD, Learning Disabilities, Cerebral Palsy, and various neurodevelopmental conditions.
                                </SectionDescription>
                            </div>
                        </SlideUp>

                        {isAboutpage && (
                            <>
                                <SlideUp delay={6}>
                                    <div className="max-w-2xl">
                                        <SectionDescription className="mb-6 text-base lg:text-lg leading-relaxed">
                                            Our multidisciplinary approach combines clinical expertise with compassionate care, creating individualized treatment plans that address each child&apos;s unique strengths and challenges. We ensure comprehensive support for both children and their families throughout their developmental journey.
                                        </SectionDescription>
                                    </div>
                                </SlideUp>

                                {/* Key Highlights */}
                                <SlideUp delay={7}>
                                    <div className="mb-8 space-y-3 max-w-2xl">
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
                            <div className='flex flex-col sm:flex-row gap-4 lg:mt-10 mt-7'>
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
                    {/* <!-- right side end --> */}
                </div>
            </div>
        </section>
    )
}

export default AboutOne