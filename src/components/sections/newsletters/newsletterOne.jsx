import React from 'react'
import sutdent_img from "@/assets/images/newsletter/student.png"
import { Button } from '@/components/ui/button'
import { FaArrowRight } from "react-icons/fa6";
import Input from '@/components/ui/input';
import Title from '@/components/ui/title';
import SectionName from '@/components/ui/sectionName';

const NewsletterOne = () => {
    return (
        <section className="bg-[linear-gradient(180deg,_rgba(238,255,200,0.00)_0%,_#E9FFB6_100%)] overflow-x-hidden">
            <div className="bg-bottom bg-no-repeat bg-contain bg-newsletter-banner">
                <div className="container">
                    <div className="flex lg:flex-row flex-col lg:items-center justify-between gap-7.5">
                        <div className="lg:max-w-[530px] order-0 lg:order-1">
                            <SectionName className={'text-muted-foreground'}>Stay Informed</SectionName>
                            <Title size={"3.5xl"}>Subscribe to Our Newsletter</Title>
                            <div className="relative lg:mt-10 mt-5">
                                <Input type={"email"} placeholder="Enter Your Email" />
                                <Button className="absolute right-[10px] top-1/2 -translate-y-1/2 text-cream-foreground">Submit  <FaArrowRight /></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsletterOne