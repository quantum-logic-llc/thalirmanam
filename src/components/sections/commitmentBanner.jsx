import React from 'react'
import Image from 'next/image'
import bannerImg from '@/assets/images/banner/about4.png'

const CommitmentBanner = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Full viewport width container */}
      <div className="relative w-screen h-[500px] left-1/2 right-1/2 -mx-[50vw]">
        {/* Background Image with Blur */}
        <div className="absolute inset-0">
          <Image
            src={bannerImg}
            alt="Child development background"
            fill
            className="object-cover"
            priority={false}
            unoptimized
          />
          {/* Blur overlay */}
          <div className="absolute inset-0 backdrop-blur-[1px] bg-black/10"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          

          {/* Main Overlay Text */}
          <p className="text-white text-4xl md:text-5xl lg:text-6xl font-black tracking-tight drop-shadow-2xl">
            Baby Steps to Bold Strides
          </p>

          {/* Decorative underline */}
          <div className="mt-6 w-24 h-1 bg-green-foreground rounded-full shadow-lg"></div>
        </div>

        {/* Additional gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/20"></div>
      </div>
    </section>
  )
}

export default CommitmentBanner
