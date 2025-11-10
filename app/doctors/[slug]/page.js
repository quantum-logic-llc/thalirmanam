import Image from 'next/image';
import Dr from '@/assets/images/team/Dr.png';
import { CheckCircleIcon, PhoneIcon, EnvelopeIcon, CalendarDaysIcon } from '@heroicons/react/24/solid';
import { AcademicCapIcon, StarIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';

const doctors = [
  {
    slug: 'dr-naveena-karthik',
    image: Dr,
    name: 'Dr. Naveena Karthik',
    profession: 'Developmental & Behavioural Paediatrician',
    qualifications: [
      'MBBS, DCH (Child Health)',
      'PG Diploma in Developmental Neurology (CDC Trivandrum)',
      'Fellowship in Paediatric Neuro-disability (UK)',
      'Certification in Adolescent Mental Health',
    ],
    experience: 'With over 15 years of experience, Dr. Karthik is a leading expert in developmental and behavioral pediatrics. She is dedicated to providing comprehensive assessment, diagnosis, and intervention for children with a wide range of neurodevelopmental conditions.',
    specializations: [
      'Autism Spectrum Disorders',
      'ADHD Management',
      'Learning Disabilities',
      'Cerebral Palsy Care',
      'Developmental Delays',
      'Genetic Disorders',
    ],
    quote: 'Every child is unique and deserves personalized care. I believe in early intervention, family-centered treatment, and evidence-based therapies to help each child reach their full potential.',
  },
  {
    slug: 'dr-jane-doe',
    image: Dr, // Replace with actual image
    name: 'Dr. Jane Doe',
    profession: 'Child Psychologist',
    qualifications: [
      'PhD in Clinical Psychology',
      'MA in Child Development',
      'Certified Play Therapist',
    ],
    experience: 'Dr. Doe specializes in psychological assessments and therapeutic interventions for children and adolescents facing emotional, behavioral, and learning challenges. She employs a compassionate, evidence-based approach to foster resilience and emotional well-being.',
    specializations: [
      'Anxiety & Depression',
      'Behavioral Disorders',
      'Trauma-Informed Care',
      'Psychoeducational Assessments',
    ],
    quote: 'My goal is to create a safe and supportive space where children can explore their feelings, build coping skills, and thrive.',
  },
  {
    slug: 'dr-john-smith',
    image: Dr, // Replace with actual image
    name: 'Dr. John Smith',
    profession: 'Speech-Language Pathologist',
    qualifications: [
      'M.S. in Speech-Language Pathology',
      'Certificate of Clinical Competence (CCC-SLP)',
    ],
    experience: 'John Smith has extensive experience working with children with a variety of communication disorders. He is skilled in diagnosing and treating speech sound disorders, language delays, fluency disorders, and social communication difficulties.',
    specializations: [
      'Articulation & Phonology',
      'Early Intervention',
      'Stuttering & Fluency',
      'Augmentative & Alternative Communication (AAC)',
    ],
    quote: 'Helping a child find their voice is one of the most rewarding experiences. Communication is the key to connection and learning.',
  },
];

export async function generateStaticParams() {
  return doctors.map((doctor) => ({
    slug: doctor.slug,
  }));
}

const DoctorDetailsPage = ({ params }) => {
  const doctor = doctors.find((doc) => doc.slug === params.slug);

  if (!doctor) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold text-red-500">Doctor not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section - With Doctor Image */}
      <div className="relative h-[500px] lg:h-[600px] overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="absolute inset-0 container mx-auto px-4">
          <div className="h-full flex items-center justify-between gap-12">
            {/* Left Side - Doctor Image */}
            <div className="hidden lg:block w-1/2 h-full relative">
              <div className="absolute bottom-0 left-0 w-full h-5/6">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full lg:w-1/2 relative z-10">
              <div className="inline-flex items-center gap-2 bg-indigo-600/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-indigo-400/30 shadow-lg">
                <CheckCircleIcon className="w-5 h-5 text-emerald-300" />
                <span className="text-white text-sm font-medium">Verified Healthcare Professional</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight">
                {doctor.name}
              </h1>

              <p className="text-xl lg:text-2xl text-indigo-700 font-semibold mb-8">
                {doctor.profession}
              </p>

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <CalendarDaysIcon className="w-5 h-5" />
                  Book Appointment
                </a>
                <a
                  href="tel:+919487006777"
                  className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-all border-2 border-indigo-200 shadow-md hover:shadow-lg"
                >
                  <PhoneIcon className="w-5 h-5" />
                  +91 94870 06777
                </a>
                <a
                  href="mailto:thalirmanam@gmail.com"
                  className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-all border-2 border-indigo-200 shadow-md hover:shadow-lg"
                >
                  <EnvelopeIcon className="w-5 h-5" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 lg:h-20">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Main Content - Single Column */}
      <div className="container mx-auto px-4 -mt-10 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto space-y-6">

          {/* Quote Card - Elevated */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 hover:shadow-2xl transition-shadow duration-300 border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-700 text-lg lg:text-xl leading-relaxed italic font-light">
                  {doctor.quote}
                </p>
              </div>
            </div>
          </div>

          {/* About Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-slate-100">
            <div className="h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                  <ClipboardDocumentCheckIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-800">About</h2>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed">
                {doctor.experience}
              </p>
            </div>
          </div>

          {/* Qualifications Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-slate-100">
            <div className="h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center">
                  <AcademicCapIcon className="w-6 h-6 text-emerald-600" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-800">Qualifications</h2>
              </div>
              <div className="space-y-4">
                {doctor.qualifications.map((q, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-5 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-md">
                      <CheckCircleIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium text-base pt-0.5 leading-relaxed">{q}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Specializations Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-slate-100">
            <div className="h-2 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500"></div>
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <StarIcon className="w-6 h-6 text-violet-600" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-800">Areas of Expertise</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {doctor.specializations.map((s, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 px-6 py-4 rounded-xl hover:border-violet-300 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 to-purple-500/0 group-hover:from-violet-500/5 group-hover:to-purple-500/5 transition-all duration-300"></div>
                    <div className="relative flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-slate-700 font-semibold text-base">{s}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative p-8 lg:p-12 text-center">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>

              <div className="relative">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                  Take the first step toward comprehensive care. Schedule your consultation with {doctor.name} today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="/contact-us"
                    className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-8 py-4 rounded-xl text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <CalendarDaysIcon className="w-6 h-6" />
                    Schedule Appointment
                  </a>
                  <a
                    href="tel:+919487006777"
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-xl text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                  >
                    <PhoneIcon className="w-6 h-6" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DoctorDetailsPage;