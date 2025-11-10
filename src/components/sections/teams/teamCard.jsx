import SocalIcons from '@/components/ui/socalIcons'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const TeamCard = ({src, name, position}) => {
    return (
        <div className="bg-background shadow-3xl border-2 border-transparent hover:border-green transition-all duration-500 flex justify-center lg:p-10 p-7 rounded-tl-[50px] rounded-br-[50px] rounded-tr-[10px] rounded-bl-[10px] max-w-[410px] mx-auto group/team">
            <div>
                <div>
                    <Image src={src} alt="team-1" width={300} height={600} className=" object-cover"/>
                </div>
                <div className="pt-7.5">
                    <h4 className="leading-[141%]"><Link href="#" className="text-2xl font-medium">{name}</Link></h4>
                    <p className="pt-1">Marketing Coordinator</p>
                    <SocalIcons prentClass={"gap-5 pt-7.5"} className={"w-9 h-9 bg-warm text-muted-foreground hover:text-cream-foreground"}/>
                </div>
            </div>
        </div>
    )
}

export default TeamCard