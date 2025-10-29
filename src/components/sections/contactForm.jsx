import React from 'react'
import contactpage from "@/assets/images/contact/contactpage.png"
import Input from '../ui/input'
import { FaEnvelope, FaLocationDot, FaPhone, FaUser } from 'react-icons/fa6'
import { Button } from '../ui/button'
import Image from 'next/image';

const ContactForm = () => {
    return (
        <section className="lg:py-20 py-12 bg-gradient-to-b from-warm/30 to-transparent">
            <div className="container">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center">
                    {/* Left Side - Image & Info */}
                    <div className="lg:order-1 order-2">
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src={contactpage.src || contactpage}
                                    alt="Professional healthcare team ready to help"
                                    width={600}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-primary px-8 py-6 rounded-2xl shadow-xl animate-left-right">
                                <div className="text-center">
                                    <h4 className="text-4xl font-bold text-cream-foreground leading-tight font-nunito">500+</h4>
                                    <p className="text-lg font-semibold text-cream-foreground mt-1">Families Helped</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="lg:order-2 order-1">
                        <div className="mb-8">
                            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">Let's Connect</h2>
                            <p className="text-lg text-muted-foreground">We're here to answer your questions and support your child's journey to success.</p>
                        </div>

                        <div className="bg-background shadow-xl rounded-2xl lg:p-10 p-6 border border-warm/20">
                            <form action="#" className="space-y-6">
                                <div className="relative">
                                    <label htmlFor="name" className="block text-sm font-semibold mb-2">Full Name</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                                            <FaUser />
                                        </span>
                                        <Input
                                            type="text"
                                            placeholder="Enter your full name"
                                            id="name"
                                            className="text-[#686868] placeholder:text-[#A0A0A0] border-[#E5E5E5] py-6 pl-12 pr-5 focus:border-primary transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                                    <div className="relative">
                                        <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                                                <FaEnvelope />
                                            </span>
                                            <Input
                                                type="email"
                                                placeholder="your@email.com"
                                                id="email"
                                                className="text-[#686868] placeholder:text-[#A0A0A0] border-[#E5E5E5] py-6 pl-12 pr-5 focus:border-primary transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone Number</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                                                <FaPhone />
                                            </span>
                                            <Input
                                                type="tel"
                                                placeholder="+91 00000 00000"
                                                id="phone"
                                                className="text-[#686868] placeholder:text-[#A0A0A0] border-[#E5E5E5] py-6 pl-12 pr-5 focus:border-primary transition-colors"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="relative">
                                    <label htmlFor="location" className="block text-sm font-semibold mb-2">Location (Optional)</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                                            <FaLocationDot />
                                        </span>
                                        <Input
                                            type="text"
                                            placeholder="Your city or area"
                                            id="location"
                                            className="text-[#686868] placeholder:text-[#A0A0A0] border-[#E5E5E5] py-6 pl-12 pr-5 focus:border-primary transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="relative">
                                    <label htmlFor="message" className="block text-sm font-semibold mb-2">Your Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder="Tell us how we can help your child..."
                                        className="w-full min-h-40 rounded-xl border-2 text-[#686868] placeholder:text-[#A0A0A0] border-[#E5E5E5] px-5 py-4 outline-none focus:border-primary transition-colors resize-none"
                                    ></textarea>
                                </div>

                                <Button
                                    variant="pill"
                                    className="w-full bg-primary border-primary hover:bg-primary/90 hover:text-cream-foreground text-lg py-6 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm