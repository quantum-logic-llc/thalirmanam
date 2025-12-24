'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Title from '@/components/ui/title'
import aboutus from '@/assets/images/about/aboutus.png'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import SectionDescription from '@/components/ui/sectionDescription'
import {
  FaCheckCircle,
  FaCalendarCheck,
  FaChevronDown,
  FaUserMd,
  FaFlask,
  FaPeopleGroup,
  FaHandsHelping,
} from 'react-icons/fa'

const devPaedsItems = [
  {
    title: 'What is a Developmental Assessment?',
    content:
      `A developmental assessment is a structured evaluation of a child’s growth, learning, behaviour, communication, social skills, and daily functioning. It helps us understand how a child is developing across different areas and identify any delays or differences early.`,
  },
  {
    title: 'Who is a Developmental Paediatrician?',
    content:
      `A developmental paediatrician is a doctor specialized in assessing, monitoring, and supporting children and adolescents with developmental, behavioural, or learning differences. They guide families through evaluation, interventions, and long-term developmental planning`,
  },
  {
    title: 'Developmental Screening and Surveillance',
    content:
      `Developmental Surveillance: Continuous monitoring of milestones and behaviour at regular checkpoints from infancy to adolescence                                                                                  Developmental Screening: Structured questionnaires or tools used at key ages to detect delays or differences early.`,
  },
  {
    title: 'What Happens During a Developmental Assessment?',
    content:
      `Review medical history, previous investigations, therapy reports, and school records Observe and assess motor, speech, language, social, cognitive, and daily living skills Identify areas of strength and concern Plan interventions, therapies, or referrals tailored to the child Map the child’s unique developmental trajectory for ongoing monitoring and prognosis`,
  },
  {
    title: 'What Parents Should Do Before an Assessment? ',
    content:
        'Bring all previous reports and investigations – medical, lab, therapy, and school records Share daily observations – play, communication, behaviour, learning, and self-care skills Note milestones and any areas of regression List current therapies, interventions, or medications',
  },
  {
    title: 'Why This Matters',
    content:
'Providing a complete set of reports and observations allows the developmental paediatrician to understand your child’s unique developmental trajectory.                                                                                      This comprehensive picture is crucial to: Identify delays or differences early Guide timely, targeted interventions Track progress over time Plan realistic goals and support independence Make informed predictions about future development A thorough and structured developmental assessment ensures children receive the right support at the right time, helping them reach their full potential ',
 },
]
 
const highlights = [
  'Over 10+ Years of Excellence in Pediatric Care',
  'A dedicated team of developmental specialists',
  'Evidence-based, child-focused interventions',
  'Strong multidisciplinary collaboration',
  'A truly family-centred approach',
]

const highlightIcons = [
  FaUserMd,
  FaPeopleGroup,
  FaFlask,
  FaCheckCircle,
  FaHandsHelping,
]

const AccordionItem = ({ item }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 text-left group"
      >
        <span className="text-sm sm:text-base font-semibold text-gray-800 group-hover:text-orange-500 transition-colors">
          {item.title}
        </span>
        <FaChevronDown
          className={`text-xs text-gray-500 transition-transform duration-300 flex-shrink-0 ml-3 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 text-sm sm:text-base text-gray-700 border-t border-gray-100">
          <p className="leading-relaxed whitespace-pre-wrap break-words">
            {item.content}
          </p>
        </div>
      )}
    </div>
  )
}


const AboutOne = ({ gridClass, isAboutpage }) => {
  return (
    <section className="overflow-hidden relative" style={{ backgroundColor: '#eff6ff' }}>
      {/* Full Width Image with Curve */}
      <div className="w-full relative">
        <div className="relative overflow-hidden rounded-b-[50px] lg:rounded-b-[100px]">
          <Image
            src={aboutus}
            alt="Thalir Manam Neurodevelopmental centre"
            width={1920}
            height={800}
            sizes="100vw"
            className="object-cover w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px]"
            priority
          />
        </div>
        {/* Wave Shape at Bottom */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[80px] lg:h-[120px]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="#eff6ff"
            />
          </svg>
        </div>
      </div>

      {/* Content Section */}
      <div className="lg:pt-15 pt-10 lg:pb-15 pb-10">
        <div className="container">
          <div className={cn('grid lg:grid-cols-1 grid-cols-1 px-3 sm:px-4', gridClass)}>
            {/* Content */}
            <div className={`${isAboutpage ? 'max-w-4xl' : 'lg:max-w-3xl'} mx-auto`}>
              <div>
                <h2 className="text-orange-500 font-bold uppercase mb-3 sm:mb-4 text-center text-2xl sm:text-3xl lg:text-4xl">
                  About Us
                </h2>
              </div>

              <div>
                <Title size="3.5xl" className="pb-5 text-gray-800 text-center">
                  Nurturing development and shaping futures
                </Title>
              </div>

              <div className="max-w-3xl mx-auto">
                <SectionDescription className="mb-5 text-base lg:text-lg leading-relaxed text-center">
                  <strong className="text-gray-800">Thalir Manam Neurodevelopmental centre</strong> is dedicated to
                  providing comprehensive developmental and behavioural pediatric care, grounded in clinical expertise,
                  thoughtful innovation, and compassion.
                </SectionDescription>
              </div>

              <div className="max-w-3xl mx-auto">
                <SectionDescription className="mb-5 text-base lg:text-lg leading-relaxed text-center">
                  Under the guidance of <strong className="text-gray-800">Dr. Naveena Karthik</strong>, the centre
                  offers specialized care for children and adolescents with developmental and behavioural challenges,
                  including Autism Spectrum Disorder, ADHD, Learning Disabilities, Cerebral Palsy, and other
                  neurodevelopmental conditions.
                </SectionDescription>
              </div>

              {isAboutpage && (
                <>
                  <div className="max-w-3xl mx-auto">
                    <SectionDescription className="mb-6 text-base lg:text-lg leading-relaxed text-center">
                      Our approach is multidisciplinary and individualized, recognising each child’s strengths, needs,
                      and developmental trajectory. We focus on supporting families at every stage, with care plans that
                      promote emotional wellbeing, functional independence, and smooth transitions into adolescence and
                      adulthood.
                    </SectionDescription>
                  </div>

                  {/* Key Highlights */}
<div className="mb-8 max-w-3xl mx-auto">
  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">
    Why Thalir Manam
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
    {highlights.map((highlight, index) => {
      const Icon = highlightIcons[index] || FaCheckCircle
      return (
        <div
          key={index}
          className="relative flex items-start gap-3 rounded-2xl border border-green-100 bg-gradient-to-br from-white via-white to-green-50/60 px-5 py-4 shadow-sm hover:shadow-md hover:border-green-300 transition-all duration-200"
        >
          <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-700 shadow-sm">
            <Icon className="text-lg" />
          </div>
          <span className="text-gray-800 text-sm lg:text-base font-medium leading-relaxed break-words">
            {highlight}
          </span>
          <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 rounded-b-2xl bg-gradient-to-r from-green-400/60 via-emerald-400/60 to-green-500/60 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      )
    })}
  </div>
</div>


                  {/* Accordion Section */}
                  <div className="max-w-3xl mx-auto mt-12">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 text-center">
                      Developmental Paediatrics & Assessments
                    </h3>

                    <div className="space-y-3">
                      {devPaedsItems.map((item, index) => (
                        <AccordionItem key={index} item={item} />
                      ))}
                    </div>
                  </div>
                </>
              )}

              <div className="flex flex-col sm:flex-row gap-4 lg:mt-10 mt-7 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Link
                    href="mailto:thalirmanam5@gmail.com?subject=Appointment%20Request&body=Hello%2C%0A%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0APlease%20provide%20the%20following%20details%3A%0A-%20Name%3A%0A-%20Phone%3A%0A-%20Preferred%20Date%3A%0A-%20Service%20Required%3A%0A%0AThank%20you."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <FaCalendarCheck />
                    <span>Book Appointment</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold px-8 py-6 rounded-full transition-all duration-300"
                >
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutOne
