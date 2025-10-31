
"use client"
import React, { useState } from 'react';
import Input from '../ui/input'
import { FaEnvelope, FaLocationDot, FaPhone, FaUser } from 'react-icons/fa6'
import { Button } from '../ui/button'
import SlideUp from '@/lib/animations/slideUp';
import SlideLeft from '@/lib/animations/slideLeft';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        location: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    fullName: '',
                    email: '',
                    phoneNumber: '',
                    location: '',
                    message: '',
                });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section className="lg:py-24 py-16">
            <div className="container">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-16">
                    {/* Left Side - Contact Info */}
                    <div className="flex flex-col gap-y-8">
                        <SlideUp>
                            <div className="mb-4">
                                <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">Get in Touch</h2>
                                <p className="text-lg text-muted-foreground">We are here to help you. Fill out the form or use the contact details below.</p>
                            </div>
                        </SlideUp>
                        <div className="space-y-8">
                            <SlideUp delay={0.2}>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full flex justify-center items-center bg-primary/10 text-primary text-2xl">
                                        <FaLocationDot />
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-xl mb-1">Our Location</h5>
                                        <p className="text-muted-foreground text-base">No. 13, Kundrathur Main Rd, MS Nagar, Porur, Chennai, Tamil Nadu 600125</p>
                                    </div>
                                </div>
                            </SlideUp>
                            <SlideUp delay={0.4}>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full flex justify-center items-center bg-primary/10 text-primary text-2xl">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-xl mb-1">Email Us</h5>
                                        <p className="text-muted-foreground text-base">
                                            <a href="mailto:drnaveena94@gmail.com" className="hover:text-primary transition-colors">
                                                drnaveena94@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </SlideUp>
                            <SlideUp delay={0.6}>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full flex justify-center items-center bg-primary/10 text-primary text-2xl">
                                        <FaPhone />
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-xl mb-1">Call Us</h5>
                                        <p className="text-muted-foreground text-base">
                                            <a href="tel:+918925914920" className="hover:text-primary transition-colors">+91 89259 14920</a>
                                        </p>
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <SlideLeft>
                        <div className="bg-background shadow-2xl rounded-2xl lg:p-10 p-8 border border-warm/20 h-full">
                            <h3 className="text-3xl font-bold mb-8 text-center">Send Us a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="relative">
                                    <label htmlFor="fullName" className="block text-sm font-semibold mb-2">Full Name</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                                            <FaUser />
                                        </span>
                                        <Input
                                            type="text"
                                            placeholder="Enter your full name"
                                            id="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
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
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="text-[#686868] placeholder:text-[#A0A0A0] border-[#E5E5E5] py-6 pl-12 pr-5 focus:border-primary transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <label htmlFor="phoneNumber" className="block text-sm font-semibold mb-2">Phone Number</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                                                <FaPhone />
                                            </span>
                                            <Input
                                                type="tel"
                                                placeholder="+91 00000 00000"
                                                id="phoneNumber"
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
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
                                            value={formData.location}
                                            onChange={handleChange}
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
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full min-h-40 rounded-xl border-2 text-[#686868] placeholder:text-[#A0A0A0] border-[#E5E5E5] px-5 py-4 outline-none focus:border-primary transition-colors resize-none"
                                    ></textarea>
                                </div>

                                <Button
                                    variant="pill"
                                    type="submit"
                                    className="w-full bg-primary border-primary hover:bg-primary/90 hover:text-cream-foreground text-lg py-6 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                                    disabled={status === 'sending'}
                                >
                                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                                </Button>
                                {status === 'success' && <p className="text-green-500 text-center">Message sent successfully!</p>}
                                {status === 'error' && <p className="text-red-500 text-center">Failed to send message. Please try again.</p>}
                            </form>
                        </div>
                    </SlideLeft>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;
