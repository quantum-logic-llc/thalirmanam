import React from 'react'
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6'
import Link from 'next/link'
import Logo from '@/components/ui/logo'
import SocalIcons from '@/components/ui/socalIcons'
import CopyRight from './copyRight'
import ScrollUp from './scrollUp'
import SlideUp from '@/lib/animations/slideUp'

const FooterOne = () => {
    return (
        <footer className="pt-[70px] relative">
            <div className="container">
                {/* Top Section - Newsletter and Resources */}
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mb-12">
                    {/* Resources for Parents Container */}
                    <SlideUp delay={2}>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs mr-3">📚</span>
                                Resources for Parents
                            </h3>
                            <ul className="space-y-2.5">
                                <li><Link href="/downloads/language-stimulation-handout.pdf" className="flex items-center text-sm text-gray-700 hover:text-primary transition-all duration-300 group"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span><span className="mr-1">📄</span>Parental Handout For Language Stimulation</Link></li>
                                <li><Link href="/downloads/disability-certification.pdf" className="flex items-center text-sm text-gray-700 hover:text-primary transition-all duration-300 group"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span><span className="mr-1">📄</span>Disability Certification</Link></li>
                                <li><Link href="/downloads/down-syndrome-guide.pdf" className="flex items-center text-sm text-gray-700 hover:text-primary transition-all duration-300 group"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span><span className="mr-1">📄</span>Guide to Parents and Carers of Down Syndrome</Link></li>
                                <li><Link href="/resources/esic-card-application" className="flex items-center text-sm text-gray-700 hover:text-primary transition-all duration-300 group"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 group-hover:scale-125 transition-transform"></span>Applying for ESIC card</Link></li>
                                <li><Link href="/resources/udid-application" className="flex items-center text-sm text-gray-700 hover:text-primary transition-all duration-300 group"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 group-hover:scale-125 transition-transform"></span>Applying for Unique Disability ID (UDID)</Link></li>
                                <li><Link href="/resources/niepmd-independent-living" className="flex items-center text-sm text-gray-700 hover:text-primary transition-all duration-300 group"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 group-hover:scale-125 transition-transform"></span>NIEPMD on independent living for children with disabilities</Link></li>
                                <li><Link href="/resources/developmental-milestones-checklist" className="flex items-center text-sm text-gray-700 hover:text-primary transition-all duration-300 group"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 group-hover:scale-125 transition-transform"></span>Developmental milestones checklist</Link></li>
                            </ul>
                        </div>
                    </SlideUp>

                    {/* Newsletter Container */}
                    <SlideUp delay={3}>
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs mr-3">📧</span>
                                Newsletter Archives
                            </h3>
                            <div className="space-y-3 mb-6">
                                <Link href="https://www.kauveryhospital.com/news-events/k-way-newsletter-may-2025/" target="_blank" className="flex items-center text-sm text-gray-700 hover:text-green-600 transition-all duration-300 group">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                                    <span className="font-medium mr-1">May 2025:</span> K-Way Newsletter
                                </Link>
                                <Link href="https://www.kauveryhospital.com/news-events/parenting-my-child-with-autism-a-journey-of-strength-advocacy-and-resilience/" target="_blank" className="flex items-center text-sm text-gray-700 hover:text-green-600 transition-all duration-300 group">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                                    <span className="font-medium mr-1">April 2025:</span> Parenting with Autism
                                </Link>
                                <Link href="https://www.kauveryhospital.com/news-events/a-healthy-mother-a-healthy-child/" target="_blank" className="flex items-center text-sm text-gray-700 hover:text-green-600 transition-all duration-300 group">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                                    <span className="font-medium mr-1">March 2025:</span> Healthy Mother & Child
                                </Link>
                                <Link href="https://www.kauveryhospital.com/news-events/building-emotional-intelligence-for-a-stronger-resilient-future/" target="_blank" className="flex items-center text-sm text-gray-700 hover:text-green-600 transition-all duration-300 group">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                                    <span className="font-medium mr-1">January 2025:</span> Emotional Intelligence
                                </Link>
                            </div>
                            <form className="space-y-3 border-t border-green-200 pt-4">
                                <p className="text-xs text-gray-600 mb-2">Subscribe for future updates:</p>
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="w-full px-3 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-200 transition-all duration-300"
                                />
                                <button 
                                    type="submit" 
                                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2.5 text-sm rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
                                >
                                    Subscribe Now
                                </button>
                            </form>
                        </div>
                    </SlideUp>
                </div>

                {/* Bottom Section - Main Footer Content */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between gap-7.5">
                    <SlideUp delay={4}>
                        <Logo />
                        <p className="pt-4">Thalir Manam is a child development center dedicated to providing comprehensive care and support for children with developmental and behavioral challenges.</p>
                        <SocalIcons prentClass={"gap-5 pt-7.5"} className={"w-9 h-9 bg-warm text-muted-foreground hover:text-cream-foreground hover:bg-green"} />
                    </SlideUp>

                    <SlideUp delay={5}>
                        <h3 className="text-2xl font-semibold">Pages</h3>
                        <ul className="flex flex-col gap-[15px] pt-5 min-w-[203px]">
                            <li><Link href="/about-us" className="text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary-foreground">About Us</Link></li>
                            <li><Link href="/services" className="text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary-foreground">Services</Link></li>
                            <li><Link href="/appointments" className="text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary-foreground">Appointments</Link></li>
                            <li><Link href="/parents-corner" className="text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary-foreground">Parent's Corner</Link></li>
                            <li><Link href="/contact-us" className="text-[#686868] transition-all duration-500 hover:ml-1 hover:text-primary-foreground">Contact Us</Link></li>
                        </ul>
                    </SlideUp>

                    <SlideUp delay={6}>
                        <h3 className="text-2xl font-semibold">Contact</h3>
                        <ul className="flex flex-col gap-[15px] pt-5">
                            <li>
                                <p className="text-[#686868] flex items-center gap-4">
                                    <span className="w-11 h-11 rounded-full border border-gray-200 flex justify-center items-center text-green-foreground"><FaLocationDot /></span> <span className="max-w-[168px]">Chennai, India</span>
                                </p>
                            </li>
                            <li>
                                <p className="text-[#686868] flex items-center gap-4">
                                    <span className="w-11 h-11 rounded-full border border-gray-200 flex justify-center items-center text-green-foreground"><FaEnvelope /></span> <a href="mailto:naveenak5@gmail.com">naveenak5@gmail.com</a>
                                </p>
                            </li>
                            <li>
                                <p className="text-[#686868] flex items-center gap-4">
                                    <span className="w-11 h-11 rounded-full border border-gray-200 flex justify-center items-center text-green-foreground"><FaPhone /></span> <a href="tel:+918925914920">+91 89259 14920</a>
                                </p>
                            </li>
                        </ul>
                    </SlideUp>
                </div>
                <CopyRight />
            </div>
            <ScrollUp />
        </footer>
    )
}

export default FooterOne