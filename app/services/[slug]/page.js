import FooterOne from '@/components/sections/footers/footerOne';
import HeaderOne from '@/components/sections/headers/headerOne';
import PageTitle from '@/components/sections/pageTitle';
import ServiceArtical from '@/components/sections/services/serviceArtical';
import Sidebar from '@/components/sections/sidebar/sidebar';
import { servicesDataOne } from '@/lib/fackdata/servicesDataOne';

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

export default function ServiceDetailsPage({ params }) {
  const service = servicesDataOne.find((s) => s.slug === params.slug);

  if (!service) {
    return (
      <>
        <HeaderOne />
        <main>
          <div className="container py-16 text-center">
            <h1 className="text-3xl font-bold text-gray-800">Service Not Found</h1>
            <p className="mt-4 text-gray-600">The requested service could not be found.</p>
          </div>
        </main>
        <FooterOne />
      </>
    );
  }

  return (
    <>
      <HeaderOne />
      <main>
        <PageTitle pageName={service.service_name} />
        <div className="container py-16">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-7.5">
            <div className="lg:col-span-2">
              <ServiceArtical service={service} />
            </div>
            <div>
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
      <FooterOne />
    </>
  );
}