import FooterOne from '@/components/sections/footers/footerOne';
import HeaderOne from '@/components/sections/headers/headerOne';
import { servicesDataOne } from '@/lib/fackdata/servicesDataOne';
import Link from 'next/link';

// Generate static params for all services
export async function generateStaticParams() {
  return servicesDataOne.map((service) => ({
    slug: service.slug,
  }));
}

// Generate dynamic metadata for each service
export async function generateMetadata({ params }) {
  const service = servicesDataOne.find((s) => s.slug === params.slug);
  const siteUrl = 'https://thalirmanam.in';
  const ogImage = 'https://thalirmanam.in/assets/og-image.png';
  const twitterHandle = '@thalirmanam';

  if (!service) {
    return {
      title: 'Service Not Found - Thalir Manam',
      description: 'The requested service could not be found.',
    };
  }

  const title = `${service.service_name} - Thalir Manam`;
  const description = service.service_details;
  const canonical = `${siteUrl}/services/${service.slug}`;

  return {
    title,
    description,
    keywords: `${service.service_name}, child development, therapy, Chennai, Thalir Manam`,
    authors: [{ name: 'Thalir Manam' }],
    creator: 'Thalir Manam',
    publisher: 'Thalir Manam - Neuro Development Center',

    alternates: {
      canonical: canonical
    },

    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: canonical,
      title: title,
      description: description,
      siteName: 'Thalir Manam - Neuro Development Center',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },

    twitter: {
      card: 'summary_large_image',
      site: twitterHandle,
      creator: twitterHandle,
      title: title,
      description: description,
      images: [ogImage]
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    category: 'Health',
    classification: 'Child Development Services',
  };
}

export default function ServiceDetailsPage({ params }) {
  const service = servicesDataOne.find((s) => s.slug === params.slug);

  if (!service) {
    return (
      <>
        <HeaderOne />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-red-600 mb-4">Oops! Service Not Found</h1>
            <p className="mt-4 text-2xl text-gray-700 mb-8">We couldn&apos;t find what you&apos;re looking for.</p>
            <Link href="/services" className="inline-block bg-blue-500 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-600 transition-all duration-300">
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
      <main>
        <article
          className="max-w-none"
          dangerouslySetInnerHTML={{ __html: service.content }}
        />
        <div className="py-16 text-center">
          <Link
            href="/appointments"
            className="inline-block bg-blue-500 text-white px-12 py-6 rounded-full font-black text-xl
            hover:bg-blue-600 transition-all duration-300"
          >
            Book an Appointment
          </Link>
        </div>
      </main>
      <FooterOne />
    </>
  );
}