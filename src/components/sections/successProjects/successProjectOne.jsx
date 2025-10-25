import React from 'react'
import SectionName from '../../ui/sectionName'
import Title from '../../ui/title'
import { Button } from '../../ui/button'
import Link from 'next/link'
import Kindergarden from '@/assets/icons/kindergarden'
import Book from '@/assets/icons/book'
import Blocks from '@/assets/icons/blocks'
import Chalkboard from '@/assets/icons/chalkboard'
import CardOne from './cardOne'
import SectionDescription from '@/components/ui/sectionDescription'

const SuccessProjectOne = () => {
    return (
        <section className="lg:pt-15 pt-10 lg:pb-15 pb-10">
            <div className="container">
                <div className="grid xl:grid-cols-2 lg:grid-cols-[40%_auto] grid-cols-1 gap-7.5">

                    <div className="lg:max-w-[600px]">
                        <SectionName className={"text-primary-foreground"}>Our Services</SectionName>
                        <Title size={"3.5xl"} className={"lg:max-w-[410px] pb-5"}>Comprehensive Services for Your Child&apos;s Needs</Title>
                        <SectionDescription> We offer a wide range of services to address the unique needs of each child. Our services include speech and language therapy, behavioral therapy, swallowing disorders, sleep disorders, neurodevelopmental assessments, and psychometric evaluations.</SectionDescription>
                        <Button asChild variant="outline" className="mt-10">
                            <Link href={"/contact-us"}>Book An Appointement</Link>
                        </Button>
                    </div>

                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5">
                        <CardOne icon={<Kindergarden />} color={"bg-primary"} number={"10+"} title={"Years of Experience"} />
                        <CardOne icon={<Book />} color={"bg-destructive"} number={"1000+"} title={"Children Helped"} />
                        <CardOne icon={<Blocks />} color={"bg-green"} number={"10+"} title={"Therapists"} />
                        <CardOne icon={<Chalkboard />} color={"bg-secondary"} number={"95%"} title={"Positive Outcomes"} />

                    </div>

                </div>
            </div>
        </section>
    )
}

export default SuccessProjectOne
