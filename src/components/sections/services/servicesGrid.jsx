import React from 'react'
import Link from 'next/link'
import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import SectionDescription from '@/components/ui/sectionDescription'

const servicesData = [
    {
        id: 1,
        title: "Attention Deficit Hyperactive Disorder (ADHD)",
        description: "Comprehensive assessment and management of ADHD with behavioral interventions, parent training, and individualized treatment plans.",
        path: "/services/adhd"
    },
    {
        id: 2,
        title: "Autism Spectrum Disorder (ASD)",
        description: "Early detection, diagnosis, and evidence-based interventions including behavioral therapy, social skills training, and family support.",
        path: "/services/autism-spectrum-disorder"
    },
    {
        id: 3,
        title: "Behavioural Disorders",
        description: "Specialized treatment for conduct disorders, oppositional defiant disorder, and other behavioral challenges in children.",
        path: "/services/behavioural-disorders"
    },
    {
        id: 4,
        title: "Cerebral Palsy (CP)",
        description: "Multidisciplinary approach to manage motor disabilities, improve function, and enhance quality of life for children with CP.",
        path: "/services/cerebral-palsy"
    },
    {
        id: 5,
        title: "Developmental Delays",
        description: "Early identification and intervention for delays in speech, motor skills, cognitive development, and social-emotional growth.",
        path: "/services/developmental-delays"
    },
    {
        id: 6,
        title: "Learning Disabilities",
        description: "Assessment and support for children with dyslexia, dyscalculia, dysgraphia, and other specific learning difficulties.",
        path: "/services/learning-disabilities"
    },
    {
        id: 7,
        title: "Intellectual Disability",
        description: "Comprehensive care and support services to help children with intellectual disabilities reach their maximum potential.",
        path: "/services/intellectual-disability"
    },
    {
        id: 8,
        title: "School Readiness",
        description: "Preparing children for academic success through developmental assessments and pre-academic skill building programs.",
        path: "/services/school-readiness"
    },
    {
        id: 9,
        title: "Adolescent Health and Well-being",
        description: "Supporting teenagers with developmental challenges through transition planning and mental health services.",
        path: "/services/adolescent-health"
    },
    {
        id: 10,
        title: "Developmental Supportive Care – Antenatal Sessions",
        description: "Prenatal counseling and support for expectant parents to promote healthy child development from birth.",
        path: "/services/antenatal-sessions"
    },
    {
        id: 11,
        title: "Teen Transition Clinic for Adolescents with Special Need",
        description: "Specialized support for adolescents transitioning to adulthood, focusing on independence and life skills.",
        path: "/services/teen-transition-clinic"
    }
]

const ServicesGrid = () => {
    return (
        <section className="pt-15 pb-15 bg-gradient-to-br from-blue-50 via-white to-green-50">
            <div className="container">
                <div className="text-center mb-12">
                    <SectionName className="text-primary-foreground">Our Services</SectionName>
                    <Title size="3.5xl" className="mb-5">Comprehensive Developmental Care</Title>
                    <SectionDescription className="max-w-3xl mx-auto">
                        At Thalir Manam, we offer evidence-based therapeutic services and interventions designed to support children with diverse developmental needs. Our multidisciplinary approach ensures personalized care for every child.
                    </SectionDescription>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {servicesData.map(({ id, title, description, path }) => (
                        <Link key={id} href={path} className="group">
                            <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-2xl hover:border-primary hover:-translate-y-1 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-orange-400 group-hover:text-white">
                                <h3 className="text-lg font-bold text-gray-800 group-hover:text-white transition-colors duration-300 mb-3 leading-tight">
                                    {title}
                                </h3>
                                <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300 text-sm leading-relaxed mb-4">
                                    {description}
                                </p>
                                <div className="mt-auto pt-4 border-t border-gray-200 group-hover:border-white/20 text-primary group-hover:text-white transition-all duration-300 flex items-center justify-between">
                                    <span className="text-sm font-semibold">Read More</span>
                                    <span className="text-lg transform group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesGrid