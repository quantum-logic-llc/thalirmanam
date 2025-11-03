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
    <section className="bg-gradient-to-r from-green-50 to-cyan-50 py-16">
      <div className="container mx-auto px-4 text-center">
        {IconComponent && <IconComponent className="w-14 h-14 mx-auto mb-4 text-green-500" />}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">{title}</h1>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
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
      <main className="bg-white">
        <ServiceHero title={service.service_name} description={service.service_details} icon={service.src} />
        <div className="container mx-auto py-12 px-4 max-w-5xl">
          <article
            className="prose prose-sm md:prose-base max-w-none service-content-custom"
            dangerouslySetInnerHTML={{ __html: service.content }}
          />

          {/* Call to Action Section */}
          <div className="mt-12 bg-gradient-to-r from-green-50 to-cyan-50 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">Book a consultation with our expert team to discuss your child&apos;s needs.</p>
            <Link href="/appointments" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
              Book an Appointment
            </Link>
          </div>
        </div>
      </main>
      <FooterOne />
    </>
  );
}