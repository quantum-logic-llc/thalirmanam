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
        <section className="pt-15 pb-15">
            <div className="container">
                <div className="text-center mb-12">
                    <SectionName className="text-primary-foreground">Our Services</SectionName>
                    <Title size="3.5xl" className="mb-5">Comprehensive Developmental Care</Title>
                    <SectionDescription className="max-w-3xl mx-auto">
                        At Thalir Manam, we offer evidence-based therapeutic services and interventions designed to support children with diverse developmental needs. Our multidisciplinary approach ensures personalized care for every child.
                    </SectionDescription>
                </div>
                
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    {servicesData.map(({ id, title, description, path }) => (
                        <Link key={id} href={path} className="group">
                            <div className="bg-white border border-gray-200 rounded-xl p-6 h-full transition-all duration-300 hover:shadow-xl hover:border-primary group-hover:bg-primary group-hover:text-white">
                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300 mb-3">
                                    {title}
                                </h3>
                                <p className="text-gray-600 group-hover:text-gray-100 transition-colors duration-300 text-sm leading-relaxed">
                                    {description}
                                </p>
                                <div className="mt-4 text-primary group-hover:text-white transition-colors duration-300">
                                    <span className="text-sm font-medium">Learn More →</span>
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