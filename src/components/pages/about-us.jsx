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


        {/* Meet Our Founder Section */}
        <div className="container mx-auto py-20 pt-5 bg-light-blue">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black-600">
              Meet Dr. Naveena K
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate about helping children and teens flourish, nurturing their strengths, and supporting
              families through every stage of development.
            </p>
          </div>

          {/* Founder Profile */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content Column - Left Side */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                    {founder.name}
                  </h3>
                  <p className="text-xl font-semibold text-green-600 mb-2">
                    Director
                  </p>
                  <p className="text-lg text-gray-700 font-medium">
                    {founder.profession}
                  </p>
                </div>

                <div className="border-l-4 border-pink-500 pl-6 py-3 bg-pink-50 rounded-r-lg">
                  <p className="text-gray-700 text-lg italic">
                    &ldquo;{founder.quote}&rdquo;
                  </p>
                </div>

                <div className="space-y-4 text-gray-600 leading-relaxed">
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

              {/* Image Column - Right Side */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative group">
                  {/* Gradient Border Animation */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl opacity-75 group-hover:opacity-100 blur transition-all duration-500 animate-pulse" />
                  {/* Inner Shadow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-pink-200 to-blue-200 rounded-3xl opacity-0 group-hover:opacity-40 blur-lg transition-all duration-500" />
                  {/* Image Container */}
                  <div
                    className="relative w-72 h-80 rounded-2xl overflow-hidden border-4 border-white shadow-2xl transition-all duration-500 bg-white"
                  >
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  {/* Corner Badge */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-full p-2 shadow-lg text-center">
                    <div className="text-xs font-bold">Pediatrics</div>
                  </div>
                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-xl border-2 border-pink-500 text-center">
                    <div className="text-2xl font-bold text-pink-600">5+</div>
                    <div className="text-xs font-semibold text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
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
