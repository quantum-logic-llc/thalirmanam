import React from 'react'
import { Button } from '@/components/ui/button'
import { FaDownload, FaBook, FaVideo, FaFileAlt } from "react-icons/fa";
import Title from '@/components/ui/title';
import SectionName from '@/components/ui/sectionName';

const ResourcesForParents = () => {
    const resources = [
        {
            icon: <FaBook className="text-2xl text-green-600" />,
            title: "Parental Handout For Language Stimulation",
            description: "Practical techniques to enhance your child's language development",
            type: "PDF Guide",
            link: "/downloads/language-stimulation-handout.pdf"
        },
        {
            icon: <FaFileAlt className="text-2xl text-blue-600" />,
            title: "Disability Certification",
            description: "Information and forms for disability certification process",
            type: "Document",
            link: "/downloads/disability-certification.pdf"
        },
        {
            icon: <FaBook className="text-2xl text-purple-600" />,
            title: "Guide to Parents and Carers of Down Syndrome",
            description: "Comprehensive guide for supporting children with Down Syndrome",
            type: "Guide",
            link: "/downloads/down-syndrome-guide.pdf"
        },
        {
            icon: <FaFileAlt className="text-2xl text-orange-600" />,
            title: "Applying for ESIC card",
            description: "Step-by-step process for ESIC card application",
            type: "Application Guide",
            link: "/downloads/esic-card-application.pdf"
        },
        {
            icon: <FaFileAlt className="text-2xl text-red-600" />,
            title: "Applying for Unique Disability ID (UDID)",
            description: "Complete guide for UDID registration and benefits",
            type: "Application Guide",
            link: "/downloads/udid-application.pdf"
        },
        {
            icon: <FaBook className="text-2xl text-teal-600" />,
            title: "NIEPMD on independent living for children with disabilities",
            description: "Resources for promoting independence in children with disabilities",
            type: "Resource Guide",
            link: "/downloads/niepmd-independent-living.pdf"
        },
        {
            icon: <FaFileAlt className="text-2xl text-indigo-600" />,
            title: "Developmental milestones checklist",
            description: "Track your child's developmental progress with this comprehensive checklist",
            type: "Checklist",
            link: "/downloads/developmental-milestones-checklist.pdf"
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
            <div className="container">
                <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-100">
                    <div className="text-center mb-12">
                        <SectionName className={'text-green-600'}>Parent Support</SectionName>
                        <Title size={"3.5xl"} className="mb-4">Resources for Parents</Title>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Access valuable resources, guides, and tools to support your child&apos;s development journey at home.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {resources.map((resource, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                                        {resource.icon}
                                    </div>
                                    <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
                                        {resource.type}
                                    </span>
                                </div>
                                <h3 className="font-bold text-lg mb-2">{resource.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                                <Button variant="outline" size="sm" className="w-full" asChild>
                                    <a href={resource.link} download>
                                        <FaDownload className="mr-2" /> Download
                                    </a>
                                </Button>
                            </div>
                        ))}
                    </div>
                    
                    <div className="text-center">
                        <Button className="bg-green-600 hover:bg-green-700 text-white">
                            View All Resources
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ResourcesForParents