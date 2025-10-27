import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import SectionDescription from '@/components/ui/sectionDescription'

// Import service images
import adhdImage from '@/assets/images/services/adhd.png'
import autismImage from '@/assets/images/services/autism.png'
import behavioralImage from '@/assets/images/services/behavioral-disorders.png'
import cerebralPalsyImage from '@/assets/images/services/cerebral-palsy.png'
import developmentalDelaysImage from '@/assets/images/services/developmental-delays.png'
import learningDisabilitiesImage from '@/assets/images/services/learning-disabilities.png'
import intellectualDisabilityImage from '@/assets/images/services/intellectual-disability.png'
import schoolReadinessImage from '@/assets/images/services/school-readiness.png'
import adolescentHealthImage from '@/assets/images/services/adolescent-health.png'
import antenatalSessionsImage from '@/assets/images/services/antenatal-sessions.png'
import teenTransitionImage from '@/assets/images/services/teen-transition.png'

const servicesData = [
    {
        id: 1,
        title: "Attention Deficit Hyperactive Disorder (ADHD)",
        description: "Comprehensive assessment and management of ADHD with behavioral interventions, parent training, and individualized treatment plans.",
        path: "/services/adhd",
        image: adhdImage
    },
    {
        id: 2,
        title: "Autism Spectrum Disorder (ASD)",
        description: "Early detection, diagnosis, and evidence-based interventions including behavioral therapy, social skills training, and family support.",
        path: "/services/autism-spectrum-disorder",
        image: autismImage
    },
    {
        id: 3,
        title: "Behavioural Disorders",
        description: "Specialized treatment for conduct disorders, oppositional defiant disorder, and other behavioral challenges in children.",
        path: "/services/behavioural-disorders",
        image: behavioralImage
    },
    {
        id: 4,
        title: "Cerebral Palsy (CP)",
        description: "Multidisciplinary approach to manage motor disabilities, improve function, and enhance quality of life for children with CP.",
        path: "/services/cerebral-palsy",
        image: cerebralPalsyImage
    },
    {
        id: 5,
        title: "Developmental Delays",
        description: "Early identification and intervention for delays in speech, motor skills, cognitive development, and social-emotional growth.",
        path: "/services/developmental-delays",
        image: developmentalDelaysImage
    },
    {
        id: 6,
        title: "Learning Disabilities",
        description: "Assessment and support for children with dyslexia, dyscalculia, dysgraphia, and other specific learning difficulties.",
        path: "/services/learning-disabilities",
        image: learningDisabilitiesImage
    },
    {
        id: 7,
        title: "Intellectual Disability",
        description: "Comprehensive care and support services to help children with intellectual disabilities reach their maximum potential.",
        path: "/services/intellectual-disability",
        image: intellectualDisabilityImage
    },
    {
        id: 8,
        title: "School Readiness",
        description: "Preparing children for academic success through developmental assessments and pre-academic skill building programs.",
        path: "/services/school-readiness",
        image: schoolReadinessImage
    },
    {
        id: 9,
        title: "Adolescent Health and Well-being",
        description: "Supporting teenagers with developmental challenges through transition planning and mental health services.",
        path: "/services/adolescent-health",
        image: adolescentHealthImage
    },
    {
        id: 10,
        title: "Developmental Supportive Care – Antenatal Sessions",
        description: "Prenatal counseling and support for expectant parents to promote healthy child development from birth.",
        path: "/services/antenatal-sessions",
        image: antenatalSessionsImage
    },
    {
        id: 11,
        title: "Teen Transition Clinic for Adolescents with Special Need",
        description: "Specialized support for adolescents transitioning to adulthood, focusing on independence and life skills.",
        path: "/services/teen-transition-clinic",
        image: teenTransitionImage
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
                    {servicesData.map(({ id, title, description, path, image }) => (
                        <Link key={id} href={path} className="group">
                            <div className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden h-full transition-all duration-300 hover:shadow-2xl hover:border-primary hover:-translate-y-1">
                                {/* Image Header */}
                                <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-orange-100">
                                    <Image
                                        src={image}
                                        alt={title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                        unoptimized
                                    />
                                </div>

                                {/* Card Content */}
                                <div className="p-6 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-orange-400 group-hover:text-white transition-all duration-300">
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
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesGrid