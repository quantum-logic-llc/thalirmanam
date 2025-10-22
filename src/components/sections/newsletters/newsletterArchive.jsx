import React from 'react'
import { Button } from '@/components/ui/button'
import { FaCalendar, FaExternalLinkAlt } from "react-icons/fa";
import Title from '@/components/ui/title';
import SectionName from '@/components/ui/sectionName';

const NewsletterArchive = () => {
    const newsletters = [
        {
            month: "May 2025",
            title: "K-Way Newsletter May 2025",
            link: "https://www.kauveryhospital.com/news-events/k-way-newsletter-may-2025/"
        },
        {
            month: "April 2025",
            title: "Parenting My Child with Autism: A Journey of Strength, Advocacy and Resilience",
            link: "https://www.kauveryhospital.com/news-events/parenting-my-child-with-autism-a-journey-of-strength-advocacy-and-resilience/"
        },
        {
            month: "March 2025",
            title: "A Healthy Mother, A Healthy Child",
            link: "https://www.kauveryhospital.com/news-events/a-healthy-mother-a-healthy-child/"
        },
        {
            month: "January 2025",
            title: "Building Emotional Intelligence for a Stronger, Resilient Future",
            link: "https://www.kauveryhospital.com/news-events/building-emotional-intelligence-for-a-stronger-resilient-future/"
        }
    ];

    return (
        <section className="py-16">
            <div className="container">
                <div className="text-center mb-12">
                    <SectionName className={'text-blue-600'}>Newsletter Archive</SectionName>
                    <Title size={"3.5xl"} className="mb-4">Our Latest Newsletters</Title>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Stay updated with our latest insights on child development, therapy techniques, and parenting guidance.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {newsletters.map((newsletter, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="flex items-center mb-4">
                                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                                    <FaCalendar className="text-blue-600" />
                                </div>
                                <span className="text-blue-600 font-semibold">{newsletter.month}</span>
                            </div>
                            <h3 className="font-bold text-lg mb-4 leading-tight">{newsletter.title}</h3>
                            <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                                <a href={newsletter.link} target="_blank" rel="noopener noreferrer">
                                    Read Newsletter <FaExternalLinkAlt className="ml-2" />
                                </a>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NewsletterArchive