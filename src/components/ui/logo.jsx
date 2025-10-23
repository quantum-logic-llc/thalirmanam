import React from 'react'
import Link from 'next/link'
import logo from "@/assets/images/about/logo23123.png"
import { cn } from '@/lib/utils'
import Image from 'next/image'

const Logo = ({ className }) => {
  return (
    <Link href="/" className="flex items-center gap-1">
      <Image src={logo.src || logo} alt="img" className="h-16 w-auto" />
      <span className={cn("font-bold text-4xl", className)}></span>
    </Link>
  )
}

export default Logo