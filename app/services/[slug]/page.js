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

export const metadata = {
  title: 'Ascent - Service Details',
  description: 'Learn more about our specific childcare and educational services',
};

export default function ServiceDetailsPage({ params }) {
  const service = servicesDataOne.find((s) => s.slug === params.slug);

  return (
    <>
      <HeaderOne />
      <main>
        <PageTitle pageName="Service Details" />
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