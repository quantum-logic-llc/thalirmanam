import SectionName from '@/components/ui/sectionName'
import Title from '@/components/ui/title'
import { teamData } from '@/lib/fackdata/teamData'
import React from 'react'
import TeamCard from './teamCard'
import baby from '@/assets/images/team/baby.png'
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
              <div className="lg:col-span-2 bg-gradient-to-br from-primary to-blue-600 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image src={baby.src || baby} alt="Baby" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Dr. Naveena Karthik</h3>
                  <p className="text-blue-100 text-lg">Developmental & Behavioural Paediatrician</p>
                </div>
              </div>
              
              <div className="lg:col-span-3 p-8 lg:p-12">
                <div className="space-y-8">
                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Professional Qualifications</h4>
                    <p className="text-gray-600 leading-relaxed">MBBS, MD (Paediatrics), Fellowship in Developmental & Behavioural Paediatrics</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Experience & Expertise</h4>
                    <p className="text-gray-600 leading-relaxed">Specialized in developmental and behavioral pediatrics with extensive experience in assessment, diagnosis, and intervention for children with neurodevelopmental conditions.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Areas of Specialization</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-blue-800">Autism Spectrum Disorders</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-green-800">ADHD Management</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-purple-800">Learning Disabilities</p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-orange-800">Cerebral Palsy Care</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="text-lg font-bold text-gray-800 mb-3">Our Approach</h4>
                    <p className="text-gray-600 leading-relaxed italic">&quot;Every child is unique and deserves personalized care. I believe in early intervention, family-centered treatment, and evidence-based therapies to help each child reach their full potential.&quot;</p>
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