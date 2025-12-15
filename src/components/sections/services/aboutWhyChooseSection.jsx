import React from 'react'
import { FaCheckCircle, FaUserMd, FaFlask, FaPeopleGroup, FaHandsHelping } from 'react-icons/fa6'
import SlideUp from '@/lib/animations/slideUp'
import React, { useState } from 'react'
import Link from 'next/link'

const highlights = [
  'Over 10+ Years of Excellence in Pediatric Care',
  'Expert Team of Developmental Specialists',
  'Evidence-Based Treatment Approaches',
  'Multidisciplinary Collaboration',
  'Family-Centered Methodology',
]

const highlightIcons = [
  FaUserMd,      // Over 10+ Years of Excellence in Pediatric Care
  FaPeopleGroup, // Expert Team of Developmental Specialists
  FaFlask,       // Evidence-Based Treatment Approaches
  FaCheckCircle, // Multidisciplinary Collaboration
  FaHandsHelping // Family-Centered Methodology
]

const WhyChooseSection = () => {
  return (
    <section className="w-full bg-white lg:pt-10 pt-5 px-3 sm:px-4">
      <div className="max-w-5xl mx-auto">
        <SlideUp delay={7}>
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {/* Heading spans all columns */}
              <h1 className="text-xl lg:text-2xl font-bold text-gray-800 col-span-1 md:col-span-2 lg:col-span-3 text-center mb-2">
                Why Choose Thalir Manam Neurodevelopmental Centre?
              </h1>

              {/* Highlight cards */}
              {highlights.map((highlight, index) => {
                const Icon = highlightIcons[index] || FaCheckCircle
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 group bg-white rounded-2xl px-4 py-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                  >
                    <Icon className="text-green-600 text-xl mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 text-sm lg:text-base font-medium">
                      {highlight}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  )
}

export default aboutWhyChooseSection
