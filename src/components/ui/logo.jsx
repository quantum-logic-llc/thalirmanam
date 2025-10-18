import React from 'react'
import Link from 'next/link'
import logo from "@/assets/images/logo.png"
import { cn } from '@/lib/utils'

const Logo = ({ className }) => {
  return (
    <Link href="/" className="flex items-center gap-1">
      <img src={logo.src || logo} alt="img" />
      <span className={cn("font-bold text-3xl", className)}>Ascent</span>
    </Link>
  )
}

export default Logo