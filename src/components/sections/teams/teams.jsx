import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import { teamData } from '@/lib/fackdata/teamData'
import React from 'react'
import TeamCard from './teamCard'
import Dr from '@/assets/images/team/Dr.png'
import Image from 'next/image'

const Teams = () => {
  return (
    <section className="lg:py-20 py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container">
        <div className="text-center mb-16">
          <SectionName>Meet Our Expert</SectionName>
          <Title size={"3.5xl"} className={"mb-4"}>Leading Specialist in Child Development</Title>
          <p className="text-gray-600 max-w-2xl mx-auto">Dedicated to providing exceptional care and support for children with developmental needs</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-5 grid-cols-1">
              <div className="lg:col-span-2 relative bg-gradient-to-br from-primary to-blue-600 overflow-hidden">
                <div className="absolute inset-0">
                  <Image src={Dr} alt="Dr. Naveena Karthik" fill className="object-cover object-center opacity-30" />
                </div>
                <div className="relative h-full flex flex-col items-center justify-center p-8 bg-gradient-to-t from-primary/95 via-primary/80 to-transparent min-h-[500px]">
                  <div className="w-56 h-56 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    <Image src={Dr} alt="Dr. Naveena Karthik" width={224} height={224} className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                    <p className="text-white/90 text-sm font-semibold uppercase tracking-wider mb-2">Our Founder</p>
                    <h3 className="text-3xl font-bold text-white mb-3">Dr. Naveena Karthik</h3>
                    <p className="text-blue-50 text-lg font-medium">Developmental & Behavioural Paediatrician</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-transparent p-6 rounded-xl border-l-4 border-primary">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <span className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mr-3">📋</span>
                      Professional Qualifications
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-base">Dr. Naveena Karthik MBBS , DCH (Child Health) PG Diploma in Developmental Neurology (CDC Trivandrum) Fellowship in Paediatric Neuro-disability (UK) Certification in Adolescent Mental Health.</p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-transparent p-6 rounded-xl border-l-4 border-green-600">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <span className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white mr-3">⭐</span>
                      Experience & Expertise
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-base">Specialized in developmental and behavioral pediatrics with extensive experience in assessment, diagnosis, and intervention for children with neurodevelopmental conditions.</p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-transparent p-6 rounded-xl border-l-4 border-purple-600">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <span className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white mr-3">🎯</span>
                      Areas of Specialization
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-blue-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-sm font-semibold text-blue-900">Autism Spectrum Disorders</p>
                      </div>
                      <div className="bg-green-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-sm font-semibold text-green-900">ADHD Management</p>
                      </div>
                      <div className="bg-purple-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-sm font-semibold text-purple-900">Learning Disabilities</p>
                      </div>
                      <div className="bg-orange-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-sm font-semibold text-orange-900">Cerebral Palsy Care</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl border-2 border-orange-200 shadow-sm">
                    <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                      <span className="text-2xl mr-2">💭</span>
                      Our Approach
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-base italic">&quot;Every child is unique and deserves personalized care. I believe in early intervention, family-centered treatment, and evidence-based therapies to help each child reach their full potential.&quot;</p>
                  </div>
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
