import React from 'react'
import Link from 'next/link'
import Title from '@/components/ui/title'
import about_img_1 from "@/assets/images/about/about-1.png"
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
                            <img src={about_img_1.src || about_img_1} alt="about-bg" className="w-[320px] h-[417px] object-cover" />
                        </SlideUp>
                    </div>
                    {/* <!-- right side start --> */}
                    <div className={`${isAboutpage ? "" : "lg:max-w-[439px]"} pt-7.5`}>
                        <SectionName>About Us</SectionName>
                        <Title size={"3.5xl"} className={"pb-5"}>About Thalir Manam</Title>
                        <SectionDescription className="mb-4">
                            Thalir Manam is a premier child development center dedicated to nurturing the potential of every child. Led by Dr. Naveena Karthik, a renowned Developmental & Behavioural Paediatrician, we specialize in comprehensive assessment, diagnosis, and intervention for children with various developmental needs.
                        </SectionDescription>
                        <SectionDescription className="mb-4">
                            Our center provides evidence-based therapeutic services for children with Autism Spectrum Disorder, ADHD, Learning Disabilities, Cerebral Palsy, and other developmental challenges. We believe in early intervention and family-centered care to help children reach their full potential.
                        </SectionDescription>
                        {isAboutpage && (
                            <SectionDescription className="mb-4">
                                At Thalir Manam, we combine clinical expertise with compassionate care, creating individualized treatment plans that address each child's unique strengths and challenges. Our multidisciplinary approach ensures comprehensive support for both children and their families throughout their developmental journey.
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