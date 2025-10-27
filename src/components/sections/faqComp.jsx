'use client'
import React from 'react'
import faq_banner from "@/assets/images/faq/banner-1.png"
import SectionName from '../ui/sectionName'
import Title from '../ui/title'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqData } from '@/lib/fackdata/faqData'


const FaqComp = () => {
  return (
    <section className="lg:py-15 py-10 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <SectionName className="text-purple-600">Frequently Asked Questions</SectionName>
            <Title size={"3.5xl"} className="mb-4">Answers to Your Questions</Title>
            <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our services and child development</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" defaultValue="one" collapsible>
              {
                faqData.map(({ans, id, question}) => {
                  return (
                    <AccordionItem key={id} value={id} className="bg-white rounded-xl border-2 border-gray-100 lg:pl-7.5 pl-5 pr-5 py-4 mb-4 last:mb-0 shadow-sm hover:shadow-md transition-shadow">
                      <AccordionTrigger className="font-bold lg:text-xl text-[17px] lg:leading-[130%] leading-[120%] hover:no-underline text-left">{question}</AccordionTrigger>
                      <AccordionContent className="text-base text-foreground pt-2">
                        {ans}
                      </AccordionContent>
                    </AccordionItem>
                  )
                })
              }
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqComp