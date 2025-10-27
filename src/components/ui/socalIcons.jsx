import React from 'react'
import Link from 'next/link';
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { cn } from '@/lib/utils';

const icons = [
    {
        id: 1,
        link: "https://www.facebook.com/people/Thalir-Manam/100083365155092/",
        icon: <FaFacebookF />
    },
    {
        id: 2,
        link: "https://www.youtube.com/@Thalirmanam",
        icon: <FaYoutube />
    },
    {
        id: 3,
        link: "https://www.instagram.com/Drnaveena_thalir",
        icon: <FaInstagram />
    },
    {
        id: 4,
        link: "https://www.linkedin.com/in/dr-naveena-karthik-1b902421/?originalSubdomain=in",
        icon: <FaLinkedinIn />
    },
]
const SocalIcons = ({className, prentClass}) => {
    return (
        <ul className={cn("flex items-center gap-[14px]", prentClass)}>
            {
                icons.map(({ icon, id, link }) => {
                    return (
                        <li key={id}>
                            <Link href={link} className={cn('rounded-md w-6 h-6 flex items-center justify-center border border-white border-opacity-20 text-cream-foreground hover:bg-primary transition-all duration-500', className)}>
                                {icon}
                            </Link>
                        </li>
                    )
                })
            }

        </ul>
    )
}

export default SocalIcons