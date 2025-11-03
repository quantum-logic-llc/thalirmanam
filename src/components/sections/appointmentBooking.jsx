"use client"
import React, { useState } from 'react';
import Input from '../ui/input'
import { FaCalendar, FaClock, FaEnvelope, FaPhone, FaUser, FaChild, FaNotesMedical } from 'react-icons/fa6'
import { Button } from '../ui/button'
import SlideUp from '@/lib/animations/slideUp';
import SlideLeft from '@/lib/animations/slideLeft';
import emailjs from '@emailjs/browser';

const AppointmentBooking = () => {
    const [formData, setFormData] = useState({
        parentName: '',
        childName: '',
        childAge: '',
        email: '',
        phoneNumber: '',
        preferredDate: '',
        preferredTime: '',
        serviceType: '',
        concerns: '',
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
            // EmailJS configuration - these should be set in .env.local
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_APPOINTMENT_TEMPLATE_ID;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

            // Check if EmailJS is configured
            if (!serviceId || !templateId || !publicKey) {
                console.error('EmailJS not configured. Please set up environment variables.');
                // Fallback to mailto link
                const mailtoLink = `mailto:thalirmanam5@gmail.com?subject=${encodeURIComponent('Appointment Request')}&body=${encodeURIComponent(
                    `Parent Name: ${formData.parentName}\nChild Name: ${formData.childName}\nChild Age: ${formData.childAge}\nEmail: ${formData.email}\nPhone: ${formData.phoneNumber}\nPreferred Date: ${formData.preferredDate}\nPreferred Time: ${formData.preferredTime}\nService Type: ${formData.serviceType}\n\nConcerns:\n${formData.concerns}`
                )}`;
                window.location.href = mailtoLink;
                setStatus('success');
                setFormData({
                    parentName: '',
                    childName: '',
                    childAge: '',
                    email: '',
                    phoneNumber: '',
                    preferredDate: '',
                    preferredTime: '',
                    serviceType: '',
                    concerns: '',
                });
                return;
            }

            // Prepare template parameters
            const templateParams = {
                parent_name: formData.parentName,
                child_name: formData.childName,
                child_age: formData.childAge,
                from_email: formData.email,
                phone_number: formData.phoneNumber,
                preferred_date: formData.preferredDate,
                preferred_time: formData.preferredTime,
                service_type: formData.serviceType,
                concerns: formData.concerns || 'No additional concerns mentioned',
                to_email: 'thalirmanam5@gmail.com'
            };

            // Send email using EmailJS
            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            setStatus('success');
            setFormData({
                parentName: '',
                childName: '',
                childAge: '',
                email: '',
                phoneNumber: '',
                preferredDate: '',
                preferredTime: '',
                serviceType: '',
                concerns: '',
            });
        } catch (error) {
            console.error('Error booking appointment:', error);
            setStatus('error');
        }
    };

    const serviceTypes = [
        'Speech Therapy',
        'Occupational Therapy',
        'Behavioral Therapy',
        'Autism Spectrum Disorder (ASD)',
        'ADHD Assessment',
        'Developmental Assessment',
        'Learning Disabilities',
        'School Readiness',
        'Other'
    ];

    const timeSlots = [
        '9:00 AM - 10:00 AM',
        '10:00 AM - 11:00 AM',
        '11:00 AM - 12:00 PM',
        '12:00 PM - 1:00 PM',
        '2:00 PM - 3:00 PM',
        '3:00 PM - 4:00 PM',
        '4:00 PM - 5:00 PM',
        '5:00 PM - 6:00 PM'
    ];

    return (
        <section className="lg:py-20 py-16 bg-gradient-to-b from-warm/10 via-white to-green/5">
            <div className="container">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <SlideUp>
                        <div className="inline-block mb-4">
                            <span className="text-primary font-bold text-lg uppercase tracking-wider">Book an Appointment</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">Schedule Your Visit</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Take the first step towards your child's development. Our team of specialists is ready to support your family's journey.
                        </p>
                    </SlideUp>
                </div>

                <div className="grid lg:grid-cols-[1fr_400px] grid-cols-1 gap-12 items-start">
                    {/* Left Side - Booking Form */}
                    <SlideUp delay={2}>
                        <div className="bg-white shadow-2xl rounded-3xl lg:p-12 p-8 border-2 border-warm/30">
                            <h3 className="text-2xl font-bold mb-8 text-primary">Appointment Details</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Parent Name */}
                                <div className="relative">
                                    <label htmlFor="parentName" className="block text-sm font-semibold mb-2 text-gray-700">Parent/Guardian Name <span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                                            <FaUser />
                                        </span>
                                        <Input
                                            type="text"
                                            placeholder="Enter parent's name"
                                            id="parentName"
                                            value={formData.parentName}
                                            onChange={handleChange}
                                            required
                                            className="text-[#686868] placeholder:text-[#A0A0A0] border-2 border-[#E5E5E5] py-6 pl-12 pr-5 focus:border-primary transition-colors rounded-xl"
                                        />
                                    </div>
                                </div>

                                {/* Child Name and Age */}
                                <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                                    <div className="relative">
                                        <label htmlFor="childName" className="block text-sm font-semibold mb-2 text-gray-700">Child's Name <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                                                <FaChild />
                                            </span>
                                            <Input
                                                type="text"
                                                placeholder="Child's name"
                                                id="childName"
                                                value={formData.childName}
                                                onChange={handleChange}
                                                required
                                                className="text-[#686868] placeholder:text-[#A0A0A0] border-2 border-[#E5E5E5] py-6 pl-12 pr-5 focus:border-primary transition-colors rounded-xl"
                                            />
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <label htmlFor="childAge" className="block text-sm font-semibold mb-2 text-gray-700">Child's Age <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <Input
                                                type="number"
                                                placeholder="Age in years"
                                                id="childAge"
                                                value={formData.childAge}
                                                onChange={handleChange}
                                                required
                                                min="0"
                                                max="18"
                                                className="text-[#686868] placeholder:text-[#A0A0A0] border-2 border-[#E5E5E5] py-6 px-5 focus:border-primary transition-colors rounded-xl"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Email and Phone */}
                                <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                                    <div className="relative">
                                        <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700">Email Address <span className="text-red-500">*</span></label>
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
                                        <label htmlFor="phoneNumber" className="block text-sm font-semibold mb-2 text-gray-700">Phone Number <span className="text-red-500">*</span></label>
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

                                {/* Service Type */}
                                <div className="relative">
                                    <label htmlFor="serviceType" className="block text-sm font-semibold mb-2 text-gray-700">Service/Therapy Type <span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                                            <FaNotesMedical />
                                        </span>
                                        <select
                                            id="serviceType"
                                            value={formData.serviceType}
                                            onChange={handleChange}
                                            required
                                            className="w-full text-[#686868] border-2 border-[#E5E5E5] py-6 pl-12 pr-5 focus:border-primary transition-colors rounded-xl outline-none bg-white"
                                        >
                                            <option value="">Select a service</option>
                                            {serviceTypes.map((service, index) => (
                                                <option key={index} value={service}>{service}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Date and Time */}
                                <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                                    <div className="relative">
                                        <label htmlFor="preferredDate" className="block text-sm font-semibold mb-2 text-gray-700">Preferred Date <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                                                <FaCalendar />
                                            </span>
                                            <Input
                                                type="date"
                                                id="preferredDate"
                                                value={formData.preferredDate}
                                                onChange={handleChange}
                                                required
                                                min={new Date().toISOString().split('T')[0]}
                                                className="text-[#686868] border-2 border-[#E5E5E5] py-6 pl-12 pr-5 focus:border-primary transition-colors rounded-xl"
                                            />
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <label htmlFor="preferredTime" className="block text-sm font-semibold mb-2 text-gray-700">Preferred Time <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                                                <FaClock />
                                            </span>
                                            <select
                                                id="preferredTime"
                                                value={formData.preferredTime}
                                                onChange={handleChange}
                                                required
                                                className="w-full text-[#686868] border-2 border-[#E5E5E5] py-6 pl-12 pr-5 focus:border-primary transition-colors rounded-xl outline-none bg-white"
                                            >
                                                <option value="">Select time slot</option>
                                                {timeSlots.map((time, index) => (
                                                    <option key={index} value={time}>{time}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Concerns */}
                                <div className="relative">
                                    <label htmlFor="concerns" className="block text-sm font-semibold mb-2 text-gray-700">Additional Concerns or Notes</label>
                                    <textarea
                                        name="concerns"
                                        id="concerns"
                                        placeholder="Please share any specific concerns about your child's development or behavior..."
                                        value={formData.concerns}
                                        onChange={handleChange}
                                        className="w-full min-h-32 rounded-xl border-2 text-[#686868] placeholder:text-[#A0A0A0] border-[#E5E5E5] px-5 py-4 outline-none focus:border-primary transition-colors resize-none"
                                    ></textarea>
                                </div>

                                <Button
                                    variant="pill"
                                    type="submit"
                                    className="w-full bg-primary border-primary hover:bg-primary/90 hover:text-cream-foreground text-lg py-7 font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
                                    disabled={status === 'sending'}
                                >
                                    {status === 'sending' ? 'Booking Appointment...' : 'Book Appointment'}
                                </Button>
                                {status === 'success' && (
                                    <div className="bg-green-50 border-2 border-green-500 text-green-700 px-6 py-4 rounded-xl text-center">
                                        <p className="font-semibold">Appointment Request Sent Successfully!</p>
                                        <p className="text-sm mt-1">We will contact you shortly to confirm your appointment.</p>
                                    </div>
                                )}
                                {status === 'error' && (
                                    <div className="bg-red-50 border-2 border-red-500 text-red-700 px-6 py-4 rounded-xl text-center">
                                        <p className="font-semibold">Failed to book appointment.</p>
                                        <p className="text-sm mt-1">Please try again or call us directly.</p>
                                    </div>
                                )}
                            </form>
                        </div>
                    </SlideUp>

                    {/* Right Side - Information Cards */}
                    <div className="space-y-6">
                        <SlideLeft delay={3}>
                            <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-3xl p-8 shadow-xl">
                                <div className="text-5xl mb-4">📅</div>
                                <h4 className="text-2xl font-bold mb-3">Why Book with Us?</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="text-xl">✓</span>
                                        <span>Expert team of child development specialists</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-xl">✓</span>
                                        <span>Personalized therapy programs</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-xl">✓</span>
                                        <span>Child-friendly environment</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-xl">✓</span>
                                        <span>Flexible scheduling options</span>
                                    </li>
                                </ul>
                            </div>
                        </SlideLeft>

                        <SlideLeft delay={4}>
                            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-warm/30">
                                <div className="text-4xl mb-4">🕐</div>
                                <h4 className="text-xl font-bold mb-4 text-gray-800">Operating Hours</h4>
                                <div className="space-y-3 text-gray-700">
                                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                        <span className="font-semibold">Monday - Friday</span>
                                        <span className="text-primary font-bold">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                        <span className="font-semibold">Saturday</span>
                                        <span className="text-primary font-bold">9:00 AM - 2:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold">Sunday</span>
                                        <span className="text-red-600 font-bold">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </SlideLeft>

                        <SlideLeft delay={5}>
                            <div className="bg-green/10 rounded-3xl p-8 shadow-xl border-2 border-green/30">
                                <div className="text-4xl mb-4">📞</div>
                                <h4 className="text-xl font-bold mb-4 text-gray-800">Need Immediate Help?</h4>
                                <p className="text-gray-600 mb-4">Contact us directly for urgent appointments or queries</p>
                                <div className="space-y-3">
                                    <a href="tel:+918925336967" className="flex items-center gap-3 text-primary font-semibold hover:text-primary/80 transition-colors">
                                        <FaPhone className="text-xl" />
                                        <span>+91 89253 36967</span>
                                    </a>
                                    <a href="mailto:thalirmanam5@gmail.com" className="flex items-center gap-3 text-primary font-semibold hover:text-primary/80 transition-colors">
                                        <FaEnvelope className="text-xl" />
                                        <span>thalirmanam5@gmail.com</span>
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

export default AppointmentBooking;
