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
        <footer className="pt-[70px] pb-8 relative" style={{ backgroundColor: '#eff6ff' }}>
            <div className="container">
                {/* Main Footer Content */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between gap-10 lg:gap-12">
                    <SlideUp delay={2}>
                        <Logo width={150} height={40} />
                        <p className="pt-4 text-gray-600 leading-relaxed">Thalir Manam is a neuro development center dedicated to providing comprehensive care and support for children with developmental and behavioral challenges.</p>
                        <SocalIcons prentClass={"gap-5 pt-7.5"} className={"w-10 h-10 bg-white border border-gray-200 text-gray-600 hover:text-white hover:bg-green hover:border-green shadow-sm transition-all duration-300"} />
                    </SlideUp>

                    <SlideUp delay={3}>
                        <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
                        <ul className="flex flex-col gap-4 min-w-[203px]">
                            <li><Link href="/about-us" className="text-gray-600 transition-all duration-300 hover:ml-2 hover:text-primary font-medium flex items-center group"><span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>About Us</Link></li>
                            <li><Link href="/" className="text-gray-600 transition-all duration-300 hover:ml-2 hover:text-primary font-medium flex items-center group"><span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>Services</Link></li>
                            <li><Link href="/appointments" className="text-gray-600 transition-all duration-300 hover:ml-2 hover:text-primary font-medium flex items-center group"><span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>Appointments</Link></li>
                            <li><Link href="/" className="text-gray-600 transition-all duration-300 hover:ml-2 hover:text-primary font-medium flex items-center group"><span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>Parent&apos;s Corner</Link></li>
                            <li><Link href="/contact-us" className="text-gray-600 transition-all duration-300 hover:ml-2 hover:text-primary font-medium flex items-center group"><span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>Contact Us</Link></li>
                        </ul>
                    </SlideUp>

                    <SlideUp delay={4}>
                        <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                        <ul className="flex flex-col gap-5">
                            <li>
                                <div className="flex items-start gap-4 group">
                                    <span className="w-12 h-12 rounded-full bg-white border border-gray-200 flex justify-center items-center text-green-foreground flex-shrink-0 group-hover:bg-green group-hover:text-white transition-all duration-300 shadow-sm">
                                        <FaLocationDot className="text-lg" />
                                    </span>
                                    <div>
                                        <p className="font-medium text-gray-800">Location</p>
                                        <p className="text-gray-600 text-sm">2nd floor, 13, Kundrathur Main Rd, MS Nagar, Porur, Chennai, Tamil Nadu 600125</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-start gap-4 group">
                                    <span className="w-12 h-12 rounded-full bg-white border border-gray-200 flex justify-center items-center text-green-foreground flex-shrink-0 group-hover:bg-green group-hover:text-white transition-all duration-300 shadow-sm">
                                        <FaEnvelope className="text-lg" />
                                    </span>
                                    <div>
                                        <p className="font-medium text-gray-800">Email</p>
                                        <a href="mailto:thalirmanam5@gmail.com" className="text-gray-600 text-sm hover:text-primary transition-colors">thalirmanam5@gmail.com</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-start gap-4 group">
                                    <span className="w-12 h-12 rounded-full bg-white border border-gray-200 flex justify-center items-center text-green-foreground flex-shrink-0 group-hover:bg-green group-hover:text-white transition-all duration-300 shadow-sm">
                                        <FaPhone className="text-lg" />
                                    </span>
                                    <div>
                                        <p className="font-medium text-gray-800">Phone</p>
                                        <a href="tel:+91 8925336967" className="text-gray-600 text-sm hover:text-primary transition-colors">+91 8925336967</a>
                                    </div>
                                </div>
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