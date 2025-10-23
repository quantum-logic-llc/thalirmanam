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
    <section className="lg:py-15 py-10">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <SectionName>Frequently Asked Questions</SectionName>
            <Title size={"3.5xl"}>Answers to Your Questions</Title>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" defaultValue="one" collapsible>
              {
                faqData.map(({ans, id, question}) => {
                  return (
                    <AccordionItem key={id} value={id} className="rounded-md border-2 border-[#F2F2F2] lg:pl-7.5 pl-5 pr-5 py-[15px] mb-7.5 last:mb-0">
                      <AccordionTrigger className="font-bold lg:text-xl text-[17px] lg:leading-[130%] leading-[120%] hover:no-underline">{question}</AccordionTrigger>
                      <AccordionContent className="text-base text-foreground">
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