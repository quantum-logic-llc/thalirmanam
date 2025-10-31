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
    <section className="bg-gradient-to-r from-green-50 to-cyan-50 py-20">
      <div className="container mx-auto px-4 text-center">
        {IconComponent && <IconComponent className="w-16 h-16 mx-auto mb-4 text-green-500" />}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{title}</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
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
        <div className="container mx-auto py-16 px-4">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <article
                className="prose lg:prose-xl max-w-none"
                dangerouslySetInnerHTML={{ __html: service.content }}
              />
            </div>
            <aside className="lg:col-span-4">
              <div className="sticky top-24 bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Other Services</h3>
                <ul className="space-y-4">
                  {otherServices.map((s) => (
                    <li key={s.id}>
                      <Link href={`/services/${s.slug}`} className="group flex items-center">
                        <span className="text-green-500 group-hover:text-green-700 transition-colors">
                          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </span>
                        <span className="text-gray-700 group-hover:text-gray-900 font-medium transition-colors">{s.service_name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link href="/contact-us" className="w-full text-center bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors block">
                    Book a Consultation
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <FooterOne />
    </>
  );
}