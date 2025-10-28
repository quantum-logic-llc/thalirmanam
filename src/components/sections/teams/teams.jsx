import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import { teamData } from '@/lib/fackdata/teamData'
import React from 'react'
import TeamCard from './teamCard'
import Dr from '@/assets/images/team/Dr.png'
import Image from 'next/image'

const Teams = () => {
  return (
    <section className="lg:py-20 py-16 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-orange-500 text-[32px] font-bold uppercase mb-4">Meet Our Expert</h2>
          <h3 className="text-gray-800 text-[36px] font-bold capitalize mb-4">Leading Specialist In Child Development</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">Dedicated to providing exceptional care and support for children with developmental needs</p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-start">

            {/* Left Column - Doctor Profile Card */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 hover:shadow-2xl transition-all duration-500">
                {/* Image Section */}
                <div className="relative h-[500px] bg-gradient-to-br from-orange-50 to-green-50 overflow-hidden">
                  <Image
                    src={Dr}
                    alt="Dr. Naveena Karthik"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>

                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-10">
                    Our Founder
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-8">
                  <h4 className="text-3xl font-bold text-gray-800 mb-2">Dr. Naveena Karthik</h4>
                  <p className="text-orange-500 text-lg font-semibold mb-4">Developmental & Behavioural Paediatrician</p>

                  {/* Divider */}
                  <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-full mb-6"></div>

                  {/* Qualifications */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 text-sm leading-relaxed">MBBS, DCH (Child Health)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 text-sm leading-relaxed">PG Diploma in Developmental Neurology (CDC Trivandrum)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 text-sm leading-relaxed">Fellowship in Paediatric Neuro-disability (UK)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 text-sm leading-relaxed">Certification in Adolescent Mental Health</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Expertise & Approach */}
            <div className="space-y-6">

              {/* Experience Card */}
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border-2 border-orange-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center shadow-md">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800">Experience & Expertise</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">Specialized in developmental and behavioral pediatrics with extensive experience in assessment, diagnosis, and intervention for children with neurodevelopmental conditions.</p>
              </div>

              {/* Specialization Grid */}
              <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border-2 border-green-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center shadow-md">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800">Areas of Specialization</h4>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all duration-300">
                    <p className="text-sm font-bold text-gray-800">Autism Spectrum Disorders</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all duration-300">
                    <p className="text-sm font-bold text-gray-800">ADHD Management</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all duration-300">
                    <p className="text-sm font-bold text-gray-800">Learning Disabilities</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all duration-300">
                    <p className="text-sm font-bold text-gray-800">Cerebral Palsy Care</p>
                  </div>
                </div>
              </div>

              {/* Approach Quote */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                <div className="relative z-10">
                  <svg className="w-10 h-10 text-white/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-lg leading-relaxed font-medium mb-2">Every child is unique and deserves personalized care. I believe in early intervention, family-centered treatment, and evidence-based therapies to help each child reach their full potential.</p>
                  <p className="text-white/90 font-semibold">- Dr. Naveena Karthik</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Teams
