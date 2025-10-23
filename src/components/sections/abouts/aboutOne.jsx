import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Title from '@/components/ui/title'
import about_img_1 from "@/assets/images/about/sharp-1.png"
import { Button } from '@/components/ui/button'
import SectionName from '@/components/ui/sectionName'
import { cn } from '@/lib/utils'
import SlideUp from '@/lib/animations/slideUp'
import SectionDescription from '@/components/ui/sectionDescription'

const AboutOne = ({ gridClass, isAboutpage }) => {
    // 'gridClass' and 'isAboutpage' props come frome about-us and home-1 page
    return (
        <section className="lg:pt-15 pt-10 lg:pb-15 pb-10">
            <div className="container">
                <div className={cn("grid lg:grid-cols-[60%_40%] grid-cols-1 items-center", gridClass)}>
                    <div>
                        <SlideUp>
                            <Image src={about_img_1} alt="about-bg" width={320} height={417} className="object-cover" />
                        </SlideUp>
                    </div>
                    {/* <!-- right side start --> */}
                    <div className={`${isAboutpage ? "" : "lg:max-w-[430px]"} pt-7.5`}>
                        <SectionName>About Us</SectionName>
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