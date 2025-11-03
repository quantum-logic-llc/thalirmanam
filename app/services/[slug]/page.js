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

const ServiceHero = ({ title, description, icon }) => {
  const IconComponent = Icons[toPascalCase(icon)];
  return (
    <section className="bg-gradient-to-br from-green-50 via-cyan-50 to-blue-50 py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        {IconComponent && (
          <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg">
            <IconComponent className="w-10 h-10 text-green-600" />
          </div>
        )}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">{title}</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">{description}</p>
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
        <main className="bg-gray-50">
          <div className="container mx-auto py-20 text-center">
            <h1 className="text-4xl font-bold text-red-600">Service Not Found</h1>
            <p className="mt-4 text-lg text-gray-700">The requested service could not be found.</p>
            <Link href="/services" className="mt-8 inline-block bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
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
      <main className="bg-gradient-to-b from-white to-gray-50">
        <ServiceHero title={service.service_name} description={service.service_details} icon={service.src} />

        <div className="container mx-auto py-16 px-4 max-w-6xl">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-12">
            <article
              className="prose prose-base md:prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-gray-900
                prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-8 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-3
                prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-6 prose-h3:text-green-700
                prose-h4:text-lg md:prose-h4:text-xl prose-h4:mb-3 prose-h4:mt-4
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
                prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4 prose-ul:space-y-2
                prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-4 prose-ol:space-y-2
                prose-li:text-gray-700
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-img:rounded-xl prose-img:shadow-lg prose-img:mx-auto prose-img:my-8
                [&_img]:max-w-[600px] [&_img]:w-auto [&_img]:h-auto [&_img]:mx-auto"
              dangerouslySetInnerHTML={{ __html: service.content }}
            />
          </div>

          {/* Call to Action Section */}
          <div className="mt-12 bg-gradient-to-r from-green-500 to-cyan-500 p-8 md:p-12 rounded-2xl text-center shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">Book a consultation with our expert team to discuss your child&apos;s needs and create a personalized care plan.</p>
            <Link
              href="/appointments"
              className="inline-block bg-white text-green-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </main>
      <FooterOne />
    </>
  );
}