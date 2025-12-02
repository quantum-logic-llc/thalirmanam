import PageTitle from "@/components/sections/pageTitle";
import Link from "next/link";
import HeaderOne from "@/components/sections/headers/headerOne";
import FooterOne from "@/components/sections/footers/footerOne";
import { getPageSEO } from '../../src/lib/seo-config';
import {
  DocumentTextIcon,
  DocumentCheckIcon,
  HeartIcon,
  ArrowDownTrayIcon,
  BookOpenIcon,
  UserGroupIcon,
  LightBulbIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const resources = [
  {
    id: 1,
    title: 'Language Stimulation Handouts',
    description: 'Comprehensive guide with practical activities and strategies to enhance your child\'s language development at home.',
    icon: DocumentTextIcon,
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'from-blue-50 to-indigo-50',
    url: 'https://thalirmanam.in/wp-content/uploads/2022/09/LANGUAGE-STIMULATION-HANDOUTS.pdf',
    category: 'Speech & Language'
  },
  {
    id: 2,
    title: 'Disability Certification Information',
    description: 'Essential information about disability certification process, eligibility criteria, and required documentation.',
    icon: DocumentCheckIcon,
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'from-emerald-50 to-teal-50',
    url: 'https://thalirmanam.in/wp-content/uploads/2022/09/Disability-certification-information.pdf',
    category: 'Documentation'
  },
  {
    id: 3,
    title: 'Down Syndrome Care Guide',
    description: 'A comprehensive guide for parents and carers of children with Down Syndrome, covering development milestones and care strategies.',
    icon: HeartIcon,
    color: 'from-pink-500 to-rose-600',
    bgColor: 'from-pink-50 to-rose-50',
    url: 'https://thalirmanam.in/wp-content/uploads/2022/09/A-guide-for-parents-and-carers-of-children-with-Down-Syndrome.pdf',
    category: 'Special Needs'
  }
];

const helpfulSections = [
  {
    icon: BookOpenIcon,
    title: 'Educational Resources',
    description: 'Access evidence-based guides and research materials',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50'
  },
  {
    icon: UserGroupIcon,
    title: 'Parent Community',
    description: 'Connect with other parents facing similar challenges',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: LightBulbIcon,
    title: 'Expert Tips',
    description: 'Get practical advice from our specialists',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50'
  },
  {
    icon: AcademicCapIcon,
    title: 'Learning Activities',
    description: 'Fun and engaging activities for home practice',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50'
  }
];

export default function ParentsCorner() {
  return (
    <>
      <HeaderOne />
      <PageTitle title="Parent's Corner" />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-md">
              <HeartIcon className="w-5 h-5 text-rose-500" />
              <span className="text-slate-700 font-semibold">Supporting Your Child&apos;s Journey</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              Welcome to the Parent&apos;s Corner
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              This dedicated space provides valuable resources, guides, and information to help you support your child&apos;s development.
              We understand your journey and are here to provide the tools and knowledge you need every step of the way.
            </p>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Downloadable Resources</h3>
            <p className="text-lg text-slate-600">Free guides and handouts to support your child at home</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <a
                  key={resource.id}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 hover:border-transparent hover:-translate-y-2"
                >
                  {/* Gradient Header */}
                  <div className={`h-2 bg-gradient-to-r ${resource.color}`}></div>

                  <div className="p-8">
                    {/* Category Badge */}
                    <div className="inline-block bg-slate-100 px-3 py-1 rounded-full mb-4">
                      <span className="text-xs font-semibold text-slate-600">{resource.category}</span>
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${resource.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 bg-gradient-to-br ${resource.color} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
                      {resource.title}
                    </h4>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {resource.description}
                    </p>

                    {/* Download Button */}
                    <div className={`flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${resource.color} bg-clip-text text-transparent`}>
                      <ArrowDownTrayIcon className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                      <span>Download PDF</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Helpful Sections */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">How We Support You</h3>
              <p className="text-lg text-slate-600">Comprehensive resources designed with parents in mind</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {helpfulSections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-indigo-200"
                  >
                    <div className={`w-12 h-12 ${section.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 ${section.color}`} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-800 mb-2">{section.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{section.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-600 via-blue-600 to-violet-600 rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative p-8 lg:p-12 text-center">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>

              <div className="relative">
                <HeartIcon className="w-16 h-16 text-white/80 mx-auto mb-6" />
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Need Expert Guidance?
                </h3>
                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                  Our team of specialists is here to help. Schedule a consultation to discuss your child&apos;s unique needs and development plan.
                </p>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-8 py-4 rounded-xl text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <HeartIcon className="w-6 h-6" />
                  Contact Us Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterOne />
    </>
  );
}
