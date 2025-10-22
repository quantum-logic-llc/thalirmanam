import React from 'react'
import Link from 'next/link'
import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import SectionDescription from '@/components/ui/sectionDescription'

const servicesData = [
    {
        id: 1,
        title: "Attention Deficit Hyperactive Disorder (ADHD)",
        path: "/services/adhd"
    },
    {
        id: 2,
        title: "Autism Spectrum Disorder (ASD)",
        path: "/services/autism-spectrum-disorder"
    },
    {
        id: 3,
        title: "Behavioural Disorders",
        path: "/services/behavioural-disorders"
    },
    {
        id: 4,
        title: "Cerebral Palsy (CP)",
        path: "/services/cerebral-palsy"
    },
    {
        id: 5,
        title: "Developmental Delays",
        path: "/services/developmental-delays"
    },
    {
        id: 6,
        title: "Learning Disabilities",
        path: "/services/learning-disabilities"
    },
    {
        id: 7,
        title: "Intellectual Disability",
        path: "/services/intellectual-disability"
    },
    {
        id: 8,
        title: "School Readiness",
        path: "/services/school-readiness"
    },
    {
        id: 9,
        title: "Adolescent Health and Well-being",
        path: "/services/adolescent-health"
    },
    {
        id: 10,
        title: "Developmental Supportive Care – Antenatal Sessions",
        path: "/services/antenatal-sessions"
    },
    {
        id: 11,
        title: "Teen Transition Clinic for Adolescents with Special Need",
        path: "/services/teen-transition-clinic"
    }
]

const ServicesGrid = () => {
    return (
        <section className="pt-15 pb-15">
            <div className="container">
                <div className="text-center mb-12">
                    <SectionName className="text-primary-foreground">Our Services</SectionName>
                    <Title size="3.5xl" className="mb-5">Comprehensive Care for Every Child</Title>
                    <SectionDescription className="max-w-2xl mx-auto">
                        We provide specialized services to support children with various developmental needs and challenges
                    </SectionDescription>
                </div>
                
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {servicesData.map(({ id, title, path }) => (
                        <Link key={id} href={path} className="group">
                            <div className="bg-background border border-gray-200 rounded-lg p-6 h-full transition-all duration-300 hover:shadow-lg hover:border-primary group-hover:bg-primary group-hover:text-white">
                                <h3 className="text-lg font-semibold text-foreground group-hover:text-white transition-colors duration-300">
                                    {title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesGrid