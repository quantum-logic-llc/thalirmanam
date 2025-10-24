import React from 'react'
import SectionName from '../ui/sectionName'
import Title from '../ui/title'
import Image from 'next/image';
import ServiceCardTwo from './services/serviceCardTwo'
import pencil_rocket from "@/assets/images/shapes/pencil-rocket.png"
import { servicesDataTwo } from '@/lib/fackdata/servicesDataTwo'

const Programs = () => {
  return (
    <section className="lg:pt-15 pt-10 lg:pb-15 pb-10 relative">
    <div className="container">
        <div className="text-center flex flex-col items-center">
            <SectionName className={"text-green-foreground"}>Our Programs</SectionName>
            <Title size={"3.5xl"} className={"lg:max-w-[630px]"}>Specialized Programs for Every Child</Title>
        </div>
        <div className="lg:pt-15 pt-5">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                {
                    servicesDataTwo.slice(0, 3).map(({icon, id, service_details, service_name}) => (
                        <div key={id} className="w-full h-full flex">
                            <div className="w-100">
                                <ServiceCardTwo icon={icon} service_name={service_name} service_details={service_details} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>

    <div className="absolute top-2 right-11 z-[-1] lg:max-w-full max-w-38 md:block hidden animate-left-right">
        <Image src={pencil_rocket} alt="pencil" width={144} height={144} className="w-full h-auto" />
    </div>

</section>
  )
}

export default Programs