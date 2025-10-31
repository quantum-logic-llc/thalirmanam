import SlideUp from '@/lib/animations/slideUp'
import React from 'react'
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6'

const ContactAddress = () => {
    return (
        <div className="lg:py-20 py-12 bg-warm/20">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-3">Visit Us</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Multiple ways to reach out - we&rsquo;re here to help your family
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    <SlideUp delay={2}>
                        <div className="bg-background rounded-2xl shadow-xl pt-8 pb-10 px-8 text-center flex flex-col items-center hover:shadow-2xl transition-all duration-300 border border-warm/30 group hover:-translate-y-2">
                            <div className="w-20 h-20 rounded-full flex justify-center items-center bg-gradient-to-br from-green to-green/80 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <span className="text-cream-foreground text-3xl"><FaLocationDot /> </span>
                            </div>
                            <h5 className="font-bold text-2xl mt-6 pb-3">Our Location</h5>
                            <p className="text-muted-foreground leading-relaxed">No. 13, Kundrathur Main Rd, MS Nagar, Porur, Chennai, Tamil Nadu 600125</p>
                        </div>
                    </SlideUp>

                    <SlideUp delay={3}>
                        <div className="bg-background rounded-2xl shadow-xl pt-8 pb-10 px-8 text-center flex flex-col items-center hover:shadow-2xl transition-all duration-300 border border-warm/30 group hover:-translate-y-2">
                            <div className="w-20 h-20 rounded-full flex justify-center items-center bg-gradient-to-br from-green to-green/80 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <span className="text-cream-foreground text-3xl"><FaEnvelope /> </span>
                            </div>
                            <h5 className="font-bold text-2xl mt-6 pb-3">Email Us</h5>
                            <p className="text-muted-foreground">
                                <a href="mailto:drnaveena94@gmail.com" className="hover:text-primary transition-colors font-medium">
                                    drnaveena94@gmail.com
                                </a>
                            </p>
                        </div>
                    </SlideUp>

                    <SlideUp delay={4}>
                        <div className="bg-background rounded-2xl shadow-xl pt-8 pb-10 px-8 text-center flex flex-col items-center hover:shadow-2xl transition-all duration-300 border border-warm/30 group hover:-translate-y-2 md:col-span-2 lg:col-span-1">
                            <div className="w-20 h-20 rounded-full flex justify-center items-center bg-gradient-to-br from-green to-green/80 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <span className="text-cream-foreground text-3xl"><FaPhone /> </span>
                            </div>
                            <h5 className="font-bold text-2xl mt-6 pb-3">Call Us</h5>
                            <div className="text-muted-foreground space-y-1">
                                <p>
                                    <a href="tel:+918925914920" className="hover:text-primary transition-colors font-medium">+91 89259 14920</a>
                                </p>
                                <p>
                                    <a href="tel:+919176196546" className="hover:text-primary transition-colors font-medium">+91 91761 96546</a>
                                </p>
                                <p>
                                    <a href="tel:9555404040" className="hover:text-primary transition-colors font-medium">9555 404040</a>
                                </p>
                                <p>
                                    <a href="tel:+919094736522" className="hover:text-primary transition-colors font-medium">+91 90947 36522</a>
                                </p>
                            </div>
                        </div>
                    </SlideUp>

                </div>
            </div>
        </div>
    )
}

export default ContactAddress