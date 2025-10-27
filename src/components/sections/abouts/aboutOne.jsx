import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Title from '@/components/ui/title'
import heroimg from "@/assets/images/about/heroimg.png"
import { Button } from '@/components/ui/button'
import SectionName from '@/components/ui/sectionName'
import { cn } from '@/lib/utils'
import SlideUp from '@/lib/animations/slideUp'
import SectionDescription from '@/components/ui/sectionDescription'

const AboutOne = ({ gridClass, isAboutpage }) => {
    // 'gridClass' and 'isAboutpage' props come from about-us and home-1 page
    return (
        <section className="lg:pt-15 pt-10 lg:pb-15 pb-10 bg-gradient-to-br from-white to-blue-50">
            <div className="container">
                <div className={cn("grid lg:grid-cols-[40%_60%] grid-cols-1 items-center lg:gap-x-12 gap-y-8", gridClass)}>
                    <div className='flex lg:justify-end justify-center'>
                        <SlideUp>
                            <div className="overflow-hidden rounded-[50px] border-2 border-blue-400 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                <Image
                                    src={heroimg}
                                    alt="about-bg"
                                    width={320}
                                    height={417}
                                    className="object-cover w-full h-auto"
                                />
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- right side start --> */}
                    <div className={`${isAboutpage ? "" : "lg:max-w-[530px]"} lg:pt-0 pt-4`}>
                        <SectionName className="text-blue-600">About Us</SectionName>
                        <Title size={"3.5xl"} className={"pb-5"}>About Thalir Manam</Title>
                        <SectionDescription className="mb-4">
                            Thalir Manam Child Development Centre is dedicated to providing comprehensive developmental and behavioral pediatric services. Under the expert guidance of Dr. Naveena Karthik, we offer specialized care for children with developmental and behavioral challenges.
                        </SectionDescription>
                        <SectionDescription className="mb-4">
                            We provide evidence-based assessment, diagnosis, and intervention services for Autism Spectrum Disorders, ADHD, Learning Disabilities, Intellectual Disabilities, and various neurodevelopmental conditions. Our approach focuses on early intervention and family-centered care.
                        </SectionDescription>
                        {isAboutpage && (
                            <SectionDescription className="mb-4">
                                At Thalir Manam, we combine clinical expertise with compassionate care, creating individualized treatment plans that address each child&apos;s unique strengths and challenges. Our multidisciplinary approach ensures comprehensive support for both children and their families throughout their developmental journey.
                            </SectionDescription>
                        )}
                        <div className='lg:mt-10 mt-7'>
                            <Button asChild variant="outline">
                                <Link href="/contact-us">Get a Consultation</Link>
                            </Button>
                        </div>

                    </div>
                    {/* <!-- right side end --> */}
                </div>
            </div>
        </section>
    )
}

export default AboutOne