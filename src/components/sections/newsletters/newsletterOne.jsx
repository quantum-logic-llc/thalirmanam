import React from 'react'
import { Button } from '@/components/ui/button'
import { FaArrowRight, FaEnvelope } from "react-icons/fa6";
import Input from '@/components/ui/input';
import Title from '@/components/ui/title';
import SectionName from '@/components/ui/sectionName';

const NewsletterOne = () => {
    return (
        <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
            <div className="container">
                <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-100">
                    <div className="text-center max-w-2xl mx-auto">
                        <div className="flex justify-center mb-4">
                            <div className="bg-blue-100 p-3 rounded-full">
                                <FaEnvelope className="text-blue-600 text-2xl" />
                            </div>
                        </div>
                        <SectionName className={'text-blue-600'}>Stay Connected</SectionName>
                        <Title size={"3.5xl"} className="mb-4">Subscribe to Our Newsletter</Title>
                        <p className="text-gray-600 mb-8">Get the latest updates on child development, therapy tips, and upcoming programs delivered to your inbox.</p>
                        <div className="relative max-w-md mx-auto mb-6">
                            <Input type={"email"} placeholder="Enter Your Email Address" className="pr-32 w-full py-3" />
                            <Button size="lg" className="absolute right-[5px] top-1/2 -translate-y-1/2 text-white bg-blue-500 hover:bg-blue-700 py-2 px-6 h-auto flex items-center gap-2">
                                Subscribe <FaArrowRight />
                            </Button>
                        </div>
                        <div className="text-center">
                            <Button variant="outline" asChild>
                                <a href="/newsletter">View Newsletter Archive</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsletterOne