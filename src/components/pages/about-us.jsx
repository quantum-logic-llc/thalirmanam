import React from 'react'
import Image from 'next/image'
import bg from '@/assets/images/team/bg.png'
import AboutOne from '@/components/sections/abouts/aboutOne'
import VisionMission from '@/components/sections/visionMission'
import Testimonial from '@/components/sections/testimonial'
import SlideUp from '@/lib/animations/slideUp'
import { Button } from '../ui/button'
import { FaHeart, FaUsers, FaLightbulb, FaStar } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import Link from 'next/link'
import SectionDescription from '@/components/ui/sectionDescription'
import Dr from '@/assets/images/team/drnaveena.png'

const founder = {
  slug: 'dr-naveena-karthik',
  image: Dr,
  name: 'Dr. Naveena K',
  profession: 'Developmental and Behavioural Pediatrics',
  quote: 'Every child is unique and deserves personalized care to reach their full potential.',
}
const background ={
  image:bg,
  alt:"about bg"
}

const AboutUs = () => {
  const features = [
    {
      icon: FaHeart,
      title: 'Compassionate Care',
      description: 'Individualized attention with empathy and understanding',
      color: 'pink',
    },
    {
      icon: FaUsers,
      title: 'Expert Team',
      description: 'Highly qualified developmental specialists',
      color: 'green',
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'Evidence-based therapeutic interventions',
      color: 'blue',
    },
    {
      icon: FaStar,
      title: 'Proven Results',
      description: 'Track record of successful outcomes',
      color: 'purple',
    },
  ]

  const achievements = [
    'Over 10+ Years of Excellence',
    'Expert Team of Specialists',
    'Evidence-Based Approaches',
    'Family-Centered Care',
    'Comprehensive Support Services',
  ]

  return (
    <>
      <main>
        {/* Hero Banner Section */}
        <AboutOne isAboutpage={true} />

        {/* Vision & Mission Section */}
        <VisionMission />

        {/* What Makes Us Special */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: '#eff6ff' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SlideUp>
                <div className="text-center mb-12 lg:mb-16">
                  <h2 className="text-[#73BE48] text-2xl lg:text-3xl font-bold uppercase mb-4">
                    What Makes Us Special
                  </h2>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Excellence in Every Aspect
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-green-500 mx-auto" />
                </div>
              </SlideUp>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <SlideUp key={index} delay={index * 2}>
                    <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                      <div
                        className={`w-24 h-24 bg-gradient-to-br from-${feature.color}-100 to-${feature.color}-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl`}
                      >
                        <feature.icon className={`text-${feature.color}-600 text-4xl`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </SlideUp>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Tight Spacing */}
        <div className="-mt-12 relative z-5">
          <Testimonial />
        </div>
                <div className="my-20"></div>


       {/* Founder Profile */}
<div className="py-20 pt-5 bg-gradient-to-b from-blue-50 via-white to-pink-50">
  <div className="max-w-6xl mx-auto px-4 lg:px-0 rounded-3xl bg-white/70 shadow-xl ring-1 ring-gray-100 backdrop-blur">
    {/* Section label */}
 
    {/* Top: 2-column layout (text left, image right) */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12 px-6 pb-6 pt-4">
      {/* Text Column – Left */}
      <div className="order-2 lg:order-1 space-y-5">
        <div>
          <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
            {founder.name}
          </h3>
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-green-700 bg-green-50 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            Director
          </p>
          <p className="mt-2 text-lg text-gray-700 font-medium">
            {founder.profession}
          </p>
        </div>

        <div className="relative">
          <div className="absolute -left-3 top-0 h-full w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 rounded-full" />
          <div className="pl-5 py-4 bg-pink-50/90 rounded-2xl shadow-sm">
            <p className="text-gray-700 text-lg italic">
              &ldquo;{founder.quote}&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Image Column – Right */}
      <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
        <div className="relative group">
          {/* Glow border */}
    <div className="absolute -inset-0.5 bg-gradient-to-br from-pink-200 to-blue-200 rounded-3xl opacity-0 group-hover:opacity-40 blur-lg transition-all duration-500"></div>
 
     {/* Image Container */}
     <div className=" relative
   w-72 h-80                 
   rounded-2xl overflow-hidden
   border-4 border-white
   shadow-2xl
   transition-all duration-500
   bg-white">
       <Image
         src={founder.image}
         alt={founder.name}
         fill
         className=""
         priority
       />
     </div>
 
     {/* Corner Badge */}
     <div className="absolute -top-4 -right-4 bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-full p-2 shadow-lg text-center">
 
                 <div className="text-xs font-bold">Pediatrics</div>
 
     </div>
       {/* Floating Badge */}
                 <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-xl border-2 border-pink-500 text-center  ">
 
                   <div className="text-2xl font-bold text-pink-600">5+</div>
                   <div className="text-xs font-semibold text-gray-600">Years Experience</div>
                 </div>
               </div> 
  
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-dashed border-gray-200 mx-6" />

    {/* Bottom: 1-column layout for detailed bio */}
    <div className="px-6 pb-8 pt-6 space-y-4 text-gray-600 leading-relaxed">
      <p>
        “Every child travels a developmental journey from early childhood through adolescence into
        adulthood. This journey needs ongoing guidance, careful monitoring, and consistent support to help
        each child reach their potential and develop functional independence. We walk alongside children and
        families at every step — from baby steps to bold strides.”
      </p>
      <p>
        Dr. Naveena K is a Developmental and Behavioural Paediatrician with over six years of experience
        supporting children and adolescents with developmental, behavioural, and neurodevelopmental
        challenges.
      </p>
      <p>
        She completed her MBBS from Sri Ramachandra Medical College and underwent paediatric training in the
        UK, followed by a Postgraduate Diploma in Developmental Neurology (PGDDN) from CDC, Trivandrum. She
        also holds a Post-Diploma in Family Counselling, and an Advanced Diploma in Special Education from
        Singapore, where she volunteered with early intervention centres and worked closely with children
        and adolescents across developmental stages.
      </p>
      <p>
        Naveena K worked for three years as a Junior Consultant at a private neurodevelopmental centre in
        Chennai, gaining hands-on experience in assessing and managing children with Autism, ADHD, learning
        difficulties, Cerebral Palsy, and other developmental and behavioural concerns.
      </p>
      <p>
        She has completed advanced training in Paediatric Neurodisability from Sheffield, UK, and
        specialised mental health training for children and adolescents, and she is trained in key
        assessment tools including DASII, Bayley-III, 3di, and SCOPE Profile, along with adolescent
        life-skills programs.
      </p>
      <p>
        She is the founder of Thalirmanam Neurodevelopmental Centre for Children and Adolescents—“Thalirmanam”
        means “Tender Minds” in Tamil.
      </p>
      <p>
        At Thalirmanam, her philosophy is “from baby steps to bold strides”: nurturing children and families
        through every small developmental step, helping them grow confident, strong, and independent.
      </p>
      <p>
        She also works as a visiting consultant at Kauvery Hospital Vadapalani, Hamsa Kids Kauvery
        Kovilambakkam, MIOT International, and A4 Hospital.
      </p>
      <p>
        Her practice is family-centred, focusing on supporting children’s growth, promoting emotional
        wellbeing, and guiding families through every stage of development, including adolescent transition
        care.
      </p>
    </div>
  </div>
</div>

       {/* Contact CTA with Background Image */}
        <section className="relative w-full overflow-hidden py-12 mt-12">
          {/* Background image */}
          <div className="absolute inset-0 -z-10">
            <Image
              src={background.image}  // put your real image path here
              alt={background.alt}
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 flex flex-col items-center text-center gap-4">
            <h1 className="text-white text-2xl lg:text-3xl font-bold max-w-3xl">
              Noticing developmental concerns in your child or teenager?
            </h1>

            <p className="text-white/90 max-w-3xl text-base lg:text-lg leading-relaxed">
              Noticing delays or changes in your child or teenager’s growth, learning, behavior, or emotions?
              Early support and guidance can make a meaningful difference in their development and well-being.
            </p>

            <Button
              asChild
              size="lg"
              className="mt-2 bg-green-600 hover:bg-green-700 text-white font-semibold text-base sm:text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact-us" className="inline-flex items-center gap-3">
                <FaPhone className="text-lg sm:text-xl" />
                <span>Click to contact with us.</span>
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}

export default AboutUs
