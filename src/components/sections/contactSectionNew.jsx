"use client"
import React, { useState } from 'react';
import Input from '../ui/input'
import { FaEnvelope, FaLocationDot, FaPhone, FaUser, FaClock, FaWhatsapp, FaPaperPlane, FaCalendar } from 'react-icons/fa6'
import { Button } from '../ui/button'
import SlideUp from '@/lib/animations/slideUp';
import SlideLeft from '@/lib/animations/slideLeft';
import Image from 'next/image';

const ContactSectionNew = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        subject: '',
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
                    subject: '',
                    message: '',
                });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    const contactCards = [
        {
            icon: <FaPhone className="text-3xl" />,
            title: "Call Us",
            subtitle: "Mon-Fri 9AM-6PM, Sat 9AM-2PM",
            content: "+91 89253 36967",
            link: "tel:+918925336967",
            gradient: "from-blue-500 to-blue-600",
            delay: 2
        },
        {
            icon: <FaEnvelope className="text-3xl" />,
            title: "Email Us",
            subtitle: "We'll respond within 24 hours",
            content: "thalirmanam5@gmail.com",
            link: "mailto:thalirmanam5@gmail.com",
            gradient: "from-purple-500 to-purple-600",
            delay: 3
        },
        {
            icon: <FaWhatsapp className="text-3xl" />,
            title: "WhatsApp",
            subtitle: "Quick response via WhatsApp",
            content: "+91 89253 36967",
            link: "https://wa.me/918925336967",
            gradient: "from-green-500 to-green-600",
            delay: 4
        }
    ];

    return (
        <section className="relative lg:py-24 py-16 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-green/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

            <div className="container relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <SlideUp>
                        <span className="inline-block px-6 py-2 bg-primary/10 text-primary font-bold text-sm uppercase tracking-wider rounded-full mb-4">
                            Get in Touch
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                            We'd Love to Hear From You
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Have questions about our services? Want to schedule a consultation?
                            Reach out to us and we'll get back to you as soon as possible.
                        </p>
                    </SlideUp>
                </div>

                {/* Contact Cards */}
                <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mb-16">
                    {contactCards.map((card, index) => (
                        <SlideUp key={index} delay={card.delay}>
                            <a
                                href={card.link}
                                className="group block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 transform hover:-translate-y-2"
                            >
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    {card.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-800">{card.title}</h3>
                                <p className="text-sm text-muted-foreground mb-3">{card.subtitle}</p>
                                <p className="text-primary font-semibold group-hover:underline">{card.content}</p>
                            </a>
                        </SlideUp>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
                    {/* Left Side - Contact Form */}
                    <SlideUp delay={5}>
                        <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border-2 border-warm/20">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <FaPaperPlane className="text-primary text-xl" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-800">Send Us a Message</h3>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Full Name */}
                                <div className="relative">
                                    <label htmlFor="fullName" className="block text-sm font-semibold mb-2 text-gray-700">
                                        Your Name <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                                            <FaUser />
                                        </span>
                                        <Input
                                            type="text"
                                            placeholder="Enter your full name"
                                            id="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            className="text-[#686868] placeholder:text-[#A0A0A0] border-2 border-[#E5E5E5] py-6 pl-12 pr-5 focus:border-primary transition-colors rounded-xl"
                                        />
                                    </div>
                                </div>

                                {/* Email and Phone */}
                                <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                                    <div className="relative">
                                        <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                                                <FaEnvelope />
                                            </span>
                                            <Input
                                                type="email"
                                                placeholder="your@email.com"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="text-[#686868] placeholder:text-[#A0A0A0] border-2 border-[#E5E5E5] py-6 pl-12 pr-5 focus:border-primary transition-colors rounded-xl"
                                            />
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <label htmlFor="phoneNumber" className="block text-sm font-semibold mb-2 text-gray-700">
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                                                <FaPhone />
                                            </span>
                                            <Input
                                                type="tel"
                                                placeholder="+91 00000 00000"
                                                id="phoneNumber"
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                                required
                                                className="text-[#686868] placeholder:text-[#A0A0A0] border-2 border-[#E5E5E5] py-6 pl-12 pr-5 focus:border-primary transition-colors rounded-xl"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Subject */}
                                <div className="relative">
                                    <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-gray-700">
                                        Subject <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder="What is this regarding?"
                                        id="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="text-[#686868] placeholder:text-[#A0A0A0] border-2 border-[#E5E5E5] py-6 px-5 focus:border-primary transition-colors rounded-xl"
                                    />
                                </div>

                                {/* Message */}
                                <div className="relative">
                                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700">
                                        Your Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder="Tell us more about how we can help you..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full min-h-36 rounded-xl border-2 text-[#686868] placeholder:text-[#A0A0A0] border-[#E5E5E5] px-5 py-4 outline-none focus:border-primary transition-colors resize-none"
                                    ></textarea>
                                </div>

                                <Button
                                    variant="pill"
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-primary to-primary/90 border-primary hover:from-primary/90 hover:to-primary text-white text-lg py-7 font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
                                    disabled={status === 'sending'}
                                >
                                    {status === 'sending' ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <span className="animate-spin">⏳</span> Sending...
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center gap-2">
                                            <FaPaperPlane /> Send Message
                                        </span>
                                    )}
                                </Button>

                                {status === 'success' && (
                                    <div className="bg-green-50 border-2 border-green-500 text-green-700 px-6 py-4 rounded-xl text-center animate-pulse">
                                        <p className="font-semibold">✓ Message Sent Successfully!</p>
                                        <p className="text-sm mt-1">We'll get back to you within 24 hours.</p>
                                    </div>
                                )}
                                {status === 'error' && (
                                    <div className="bg-red-50 border-2 border-red-500 text-red-700 px-6 py-4 rounded-xl text-center">
                                        <p className="font-semibold">✗ Failed to Send Message</p>
                                        <p className="text-sm mt-1">Please try again or call us directly.</p>
                                    </div>
                                )}
                            </form>
                        </div>
                    </SlideUp>

                    {/* Right Side - Location & Info */}
                    <div className="space-y-8">
                        {/* Location Card */}
                        <SlideLeft delay={6}>
                            <div className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white rounded-3xl p-8 shadow-2xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                                        <FaLocationDot className="text-2xl" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Visit Our Center</h3>
                                </div>
                                <p className="text-lg leading-relaxed mb-6 text-white/90">
                                    No. 13, Kundrathur Main Rd, MS Nagar, Porur, Chennai, Tamil Nadu 600125
                                </p>
                                <a
                                    href="https://maps.google.com/?q=No.+13,+Kundrathur+Main+Rd,+MS+Nagar,+Porur,+Chennai,+Tamil+Nadu+600125"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors"
                                >
                                    <FaLocationDot /> Get Directions
                                </a>
                            </div>
                        </SlideLeft>

                        {/* Operating Hours */}
                        <SlideLeft delay={7}>
                            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-warm/30">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center">
                                        <FaClock className="text-green text-2xl" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">Operating Hours</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center p-4 bg-warm/10 rounded-xl">
                                        <span className="font-semibold text-gray-700">Monday - Friday</span>
                                        <span className="text-primary font-bold">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center p-4 bg-warm/10 rounded-xl">
                                        <span className="font-semibold text-gray-700">Saturday</span>
                                        <span className="text-primary font-bold">9:00 AM - 2:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl">
                                        <span className="font-semibold text-gray-700">Sunday</span>
                                        <span className="text-red-600 font-bold">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </SlideLeft>

                        {/* Quick Actions */}
                        <SlideLeft delay={8}>
                            <div className="bg-gradient-to-br from-green/10 to-green/5 rounded-3xl p-8 border-2 border-green/20">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h3>
                                <div className="space-y-3">
                                    <a
                                        href="mailto:thalirmanam5@gmail.com?subject=Appointment%20Request&body=Hello%2C%0A%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0APlease%20provide%20the%20following%20details%3A%0A-%20Name%3A%0A-%20Phone%3A%0A-%20Preferred%20Date%3A%0A-%20Service%20Required%3A%0A%0AThank%20you."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 group"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                            <FaCalendar className="text-xl" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-bold text-gray-800">Book Appointment</p>
                                            <p className="text-sm text-muted-foreground">Schedule your visit</p>
                                        </div>
                                        <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
                                    </a>
                                    <a
                                        href="https://wa.me/918925336967"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 group"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center group-hover:bg-green group-hover:text-white transition-colors">
                                            <FaWhatsapp className="text-xl" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-bold text-gray-800">WhatsApp Us</p>
                                            <p className="text-sm text-muted-foreground">Quick chat support</p>
                                        </div>
                                        <span className="text-green group-hover:translate-x-1 transition-transform">→</span>
                                    </a>
                                </div>
                            </div>
                        </SlideLeft>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSectionNew;
