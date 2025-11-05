import FooterOne from '@/components/sections/footers/footerOne';
import HeaderOne from '@/components/sections/headers/headerOne';
import { servicesDataOne } from '@/lib/fackdata/servicesDataOne';
import Link from 'next/link';
import * as Icons from '@/assets/icons';

// Helper function to convert kebab-case to PascalCase
const toPascalCase = (str) => {
  return str.replace(/(^\w|-\w)/g, (g) => g.replace('-', '').toUpperCase());
};

// Generate static params for all services
export async function generateStaticParams() {
  return servicesDataOne.map((service) => ({
    slug: service.slug,
  }));
}

// Generate dynamic metadata for each service
export async function generateMetadata({ params }) {
  const service = servicesDataOne.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: 'Service Not Found - Thalir Manam',
      description: 'The requested service could not be found.',
    };
  }

  return {
    title: `${service.service_name} - Thalir Manam`,
    description: service.service_details,
    keywords: `${service.service_name}, child development, therapy, Chennai, Thalir Manam`,
  };
}

// Kid-friendly hero section with playful design
const ServiceHero = ({ title, description }) => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100">
      {/* Decorative floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-50 animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-pink-300 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-300 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-10 right-1/3 w-20 h-20 bg-green-300 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-purple-200 rounded-full opacity-30 animate-ping"></div>

        {/* Stars decoration */}
        <div className="absolute top-1/4 right-1/4 text-yellow-400 text-4xl animate-spin" style={{ animationDuration: '10s' }}>✨</div>
        <div className="absolute bottom-1/4 left-1/4 text-pink-400 text-3xl animate-spin" style={{ animationDuration: '8s', animationDelay: '1s' }}>⭐</div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 mb-6 leading-tight drop-shadow-lg font-bubblegum">
          {title}
        </h1>
        <div className="flex justify-center items-center gap-2 mb-8">
          <div className="w-12 h-2 bg-purple-500 rounded-full"></div>
          <div className="w-12 h-2 bg-pink-500 rounded-full"></div>
          <div className="w-12 h-2 bg-yellow-500 rounded-full"></div>
          <div className="w-12 h-2 bg-green-500 rounded-full"></div>
        </div>
        <p className="text-lg md:text-2xl text-gray-800 font-semibold max-w-4xl mx-auto leading-relaxed bg-white/70 backdrop-blur-sm px-8 py-4 rounded-3xl shadow-lg">
          {description}
        </p>
      </div>
    </section>
  );
};

export default function ServiceDetailsPage({ params }) {
  const service = servicesDataOne.find((s) => s.slug === params.slug);
  const otherServices = servicesDataOne.filter((s) => s.slug !== params.slug);

  if (!service) {
    return (
      <>
        <HeaderOne />
        <main className="bg-gradient-to-br from-red-100 to-orange-100 min-h-screen flex items-center justify-center">
          <div className="container mx-auto py-20 text-center">
            <div className="text-8xl mb-6">😕</div>
            <h1 className="text-5xl font-bold text-red-600 mb-4">Oops! Service Not Found</h1>
            <p className="mt-4 text-2xl text-gray-700 mb-8">We couldn&apos;t find what you&apos;re looking for.</p>
            <Link href="/services" className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-12 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110">
              Back to Services
            </Link>
          </div>
        </main>
        <FooterOne />
      </>
    );
  }

  return (
    <>
      <HeaderOne />
      <main className="bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
        <ServiceHero title={service.service_name} description={service.service_details} />

        {/* Main content area with kid-friendly design */}
        <div className="relative w-full py-16 px-4">
          {/* Decorative wave divider */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100">
            <svg className="absolute bottom-0 w-full h-20" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M0 0C240 80 480 80 720 40C960 0 1200 0 1440 40V80H0V0Z" className="fill-current text-blue-50"/>
            </svg>
          </div>

          <div className="container mx-auto max-w-7xl mt-12">
            {/* Content card with playful border */}
            <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 border-8 border-purple-200 relative overflow-hidden">
              {/* Corner decorations */}
              <div className="absolute top-4 right-4 text-6xl opacity-20">🌈</div>
              <div className="absolute bottom-4 left-4 text-6xl opacity-20">🎨</div>

              <article
                className="prose prose-lg md:prose-xl max-w-none
                  prose-headings:font-bold prose-headings:text-gray-900 prose-headings:font-bubblegum
                  prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mb-8 prose-h2:mt-10
                  prose-h2:pb-4 prose-h2:border-b-4 prose-h2:border-purple-300
                  prose-h2:text-transparent prose-h2:bg-clip-text prose-h2:bg-gradient-to-r prose-h2:from-purple-600 prose-h2:to-pink-600
                  prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:mb-6 prose-h3:mt-8 prose-h3:text-green-600 prose-h3:font-bubblegum
                  prose-h4:text-xl md:prose-h4:text-2xl prose-h4:mb-4 prose-h4:mt-6 prose-h4:text-blue-600
                  prose-p:text-gray-800 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                  prose-ul:list-none prose-ul:pl-0 prose-ul:mb-6 prose-ul:space-y-3
                  prose-ol:list-none prose-ol:pl-0 prose-ol:mb-6 prose-ol:space-y-3
                  prose-li:text-gray-800 prose-li:pl-8 prose-li:relative
                  prose-li:before:content-['🌟'] prose-li:before:absolute prose-li:before:left-0 prose-li:before:top-0
                  prose-strong:text-purple-700 prose-strong:font-bold
                  prose-img:rounded-3xl prose-img:shadow-2xl prose-img:mx-auto prose-img:my-12 prose-img:border-8 prose-img:border-yellow-200
                  [&_img]:max-w-full [&_img]:w-auto [&_img]:h-auto [&_img]:mx-auto
                  [&_.bg-blue-50]:bg-gradient-to-br [&_.bg-blue-50]:from-blue-100 [&_.bg-blue-50]:to-cyan-100 [&_.bg-blue-50]:rounded-3xl [&_.bg-blue-50]:shadow-lg
                  [&_.bg-green-50]:bg-gradient-to-br [&_.bg-green-50]:from-green-100 [&_.bg-green-50]:to-emerald-100 [&_.bg-green-50]:rounded-3xl [&_.bg-green-50]:shadow-lg
                  [&_.bg-purple-50]:bg-gradient-to-br [&_.bg-purple-50]:from-purple-100 [&_.bg-purple-50]:to-pink-100 [&_.bg-purple-50]:rounded-3xl [&_.bg-purple-50]:shadow-lg
                  [&_.bg-yellow-50]:bg-gradient-to-br [&_.bg-yellow-50]:from-yellow-100 [&_.bg-yellow-50]:to-orange-100 [&_.bg-yellow-50]:rounded-3xl [&_.bg-yellow-50]:shadow-lg
                  [&_.bg-orange-50]:bg-gradient-to-br [&_.bg-orange-50]:from-orange-100 [&_.bg-orange-50]:to-red-100 [&_.bg-orange-50]:rounded-3xl [&_.bg-orange-50]:shadow-lg
                  [&_.bg-pink-50]:bg-gradient-to-br [&_.bg-pink-50]:from-pink-100 [&_.bg-pink-50]:to-rose-100 [&_.bg-pink-50]:rounded-3xl [&_.bg-pink-50]:shadow-lg
                  [&_.bg-red-50]:bg-gradient-to-br [&_.bg-red-50]:from-red-100 [&_.bg-red-50]:to-pink-100 [&_.bg-red-50]:rounded-3xl [&_.bg-red-50]:shadow-lg
                  [&_.bg-indigo-50]:bg-gradient-to-br [&_.bg-indigo-50]:from-indigo-100 [&_.bg-indigo-50]:to-purple-100 [&_.bg-indigo-50]:rounded-3xl [&_.bg-indigo-50]:shadow-lg
                  [&_.bg-teal-50]:bg-gradient-to-br [&_.bg-teal-50]:from-teal-100 [&_.bg-teal-50]:to-cyan-100 [&_.bg-teal-50]:rounded-3xl [&_.bg-teal-50]:shadow-lg
                  [&_.bg-white]:rounded-3xl [&_.bg-white]:shadow-xl [&_.bg-white]:transform [&_.bg-white]:hover:scale-105 [&_.bg-white]:transition-transform
                  [&_.border-l-4]:border-l-8 [&_.border-l-4]:rounded-r-2xl"
                dangerouslySetInnerHTML={{ __html: service.content }}
              />
            </div>

            {/* Call to Action Section - Super Kid-Friendly */}
            <div className="mt-16 relative">
              {/* Rainbow background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-200 via-yellow-200 via-green-200 via-blue-200 to-purple-200 rounded-[3rem] blur-xl opacity-70"></div>

              <div className="relative bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-10 md:p-16 rounded-[3rem] text-center shadow-2xl border-8 border-white overflow-hidden">
                {/* Floating elements */}
                <div className="absolute top-4 left-4 text-5xl animate-bounce">🎈</div>
                <div className="absolute top-4 right-4 text-5xl animate-bounce" style={{ animationDelay: '0.3s' }}>🎈</div>
                <div className="absolute bottom-4 left-1/4 text-4xl animate-pulse">⭐</div>
                <div className="absolute bottom-4 right-1/4 text-4xl animate-pulse" style={{ animationDelay: '0.5s' }}>✨</div>

                <div className="relative z-10">
                  <div className="text-6xl mb-6 animate-bounce">🌟</div>
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-6 font-bubblegum drop-shadow-lg">
                    Ready to Get Started?
                  </h3>
                  <p className="text-white text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-semibold drop-shadow-md">
                    Book a consultation with our expert team to discuss your child&apos;s needs and create a personalized care plan! 🎯
                  </p>
                  <Link
                    href="/appointments"
                    className="inline-block bg-white text-purple-600 px-12 py-6 rounded-full font-black text-xl md:text-2xl
                    hover:bg-yellow-300 transition-all duration-300 shadow-2xl hover:shadow-3xl
                    transform hover:scale-110 hover:-rotate-2 border-4 border-purple-300 font-bubblegum"
                  >
                    📅 Book an Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="relative w-full h-32 bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100">
          <svg className="absolute top-0 w-full h-32" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 80C240 0 480 0 720 40C960 80 1200 80 1440 40V0H0V80Z" className="fill-current text-pink-50"/>
          </svg>
        </div>
      </main>
      <FooterOne />
    </>
  );
}