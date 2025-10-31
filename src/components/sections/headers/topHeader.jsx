import React from 'react'
import Link from 'next/link'
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import SocalIcons from '@/components/ui/socalIcons';

const TopHeader = () => {
    return (
        <div id="top-header" className="bg-destructive sm:block hidden">
            <div className="container">
                <div className="flex lg:flex-row flex-col justify-between items-center gap-2 py-[13px]">
                    <div>
                        <ul className="flex gap-7.5">
                            <li className='text-cream-foreground flex items-center gap-4'>
                                <FaPhone /> <a href="tel:+91 8925336967">+91 8925336967</a>
                            </li>
                            <li className='text-cream-foreground flex items-center gap-4'>
                                <FaEnvelope /> <a href="mailto:thalirmanam5@gmail.com">thalirmanam5@gmail.com</a>
                            </li>
                            <li className='text-cream-foreground flex items-center gap-4'>
                                <FaLocationDot /> <span>Mon - Sat: 9 AM to 3 PM</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <SocalIcons className={"text-xs"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader