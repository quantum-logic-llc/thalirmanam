'use client';
import '../src/index.css'
import WhatsAppIcon from '../src/components/ui/whatsappIcon'
import WhatsAppChatBox from '../src/components/ui/whatsappChatBox'
import { MessageProvider } from '../src/context/messageContext'
import { useState } from 'react';
import Script from 'next/script';
import Head from 'next/head';

// Replace with your actual tracking IDs
const GTM_ID = 'GTM-WM9TP8CS'; // Google Tag Manager ID
const FB_PIXEL_ID = 'XXXXXXXXXXXXXXX'; // Facebook Pixel ID
const GA4_ID = 'G-VR3K4ZDG73'; // Google Analytics 4 ID

// Business Information for SEO
const businessInfo = {
  name: 'Thalir Manam',
  alternateName: 'Thalirmanam - Child & Adolescent Neuro Development Centre',
  description: 'Thalir Manam (@thalirmanam) - The centre offers specialized care for children and adolescents with developmental and behavioural challenges, including Autism Spectrum Disorder (ASD), ADHD, Learning Disabilities, Cerebral Palsy, and other neurodevelopmental conditions.',
  streetAddress: '2nd floor, 13, Kundrathur Main Rd, MS Nagar, Porur',
  addressLocality: 'Chennai',
  addressRegion: 'Tamil Nadu',
  postalCode: '600125',
  addressCountry: 'IN',
  telephone: '+91 8925336967',
  email: 'contact@thalirmanam.in',
  latitude: '13.0367',
  longitude: '80.1396',
  geoRegion: 'IN-TN',
  geoPlacename: 'Chennai',
  priceRange: '$$',
  currency: 'INR',
  openingHours: 'Mo-Sa 09:00-18:00',
  foundingDate: '2020',
  url: 'https://thalirmanam.in'
};

// Social Media Links
const socialLinks = {
  facebook: 'https://www.facebook.com/thalirmanam',
  instagram: 'https://www.instagram.com/thalirmanam',
  youtube: 'https://www.youtube.com/@thalirmanam',
  linkedin: 'https://www.linkedin.com/company/thalirmanam',
  twitter: 'https://twitter.com/thalirmanam'
};

// Services offered
const services = [
  'Speech Therapy',
  'Behavioral Therapy',
  'Occupational Therapy',
  'Autism Support',
  'ADHD Treatment',
  'Learning Disability Support',
  'Neurodevelopmental Assessment',
  'Psychometric Evaluation',
  'Swallowing Disorders Treatment',
  'Sleep Disorders Management'
];

// Area served
const areaServed = [
  'Chennai',
  'Tamil Nadu',
  'India'
];

export default function RootLayout({ children }) {
  const [isChatBoxVisible, setIsChatBoxVisible] = useState(false);

  // Schema.org JSON-LD - Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${businessInfo.url}/#organization`,
    "name": businessInfo.name,
    "alternateName": businessInfo.alternateName,
    "url": businessInfo.url,
    "logo": {
      "@type": "ImageObject",
      "url": `${businessInfo.url}/assets/logo.png`,
      "width": 512,
      "height": 512
    },
    "description": businessInfo.description,
    "sameAs": Object.values(socialLinks),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessInfo.streetAddress,
      "addressLocality": businessInfo.addressLocality,
      "addressRegion": businessInfo.addressRegion,
      "postalCode": businessInfo.postalCode,
      "addressCountry": businessInfo.addressCountry
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": businessInfo.telephone,
        "contactType": "customer service",
        "availableLanguage": ["English", "Tamil", "Hindi"]
      },
      {
        "@type": "ContactPoint",
        "email": businessInfo.email,
        "contactType": "appointments"
      }
    ],
    "foundingDate": businessInfo.foundingDate,
    "areaServed": areaServed.map(area => ({ "@type": "City", "name": area }))
  };

  // Schema.org JSON-LD - LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${businessInfo.url}/#localbusiness`,
    "name": businessInfo.name,
    "alternateName": businessInfo.alternateName,
    "description": businessInfo.description,
    "url": businessInfo.url,
    "telephone": businessInfo.telephone,
    "email": businessInfo.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessInfo.streetAddress,
      "addressLocality": businessInfo.addressLocality,
      "addressRegion": businessInfo.addressRegion,
      "postalCode": businessInfo.postalCode,
      "addressCountry": businessInfo.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": businessInfo.latitude,
      "longitude": businessInfo.longitude
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": businessInfo.priceRange,
    "currency": businessInfo.currency,
    "areaServed": areaServed.map(area => ({ "@type": "City", "name": area })),
    "sameAs": Object.values(socialLinks)
  };

  // Schema.org JSON-LD - MedicalClinic
  const medicalClinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${businessInfo.url}/#medicalclinic`,
    "name": businessInfo.name,
    "description": businessInfo.description,
    "url": businessInfo.url,
    "telephone": businessInfo.telephone,
    "email": businessInfo.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessInfo.streetAddress,
      "addressLocality": businessInfo.addressLocality,
      "addressRegion": businessInfo.addressRegion,
      "postalCode": businessInfo.postalCode,
      "addressCountry": businessInfo.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": businessInfo.latitude,
      "longitude": businessInfo.longitude
    },
    "openingHours": businessInfo.openingHours,
    "medicalSpecialty": services,
    "availableService": services.map(service => ({
      "@type": "MedicalTherapy",
      "name": service
    }))
  };

  // Schema.org JSON-LD - WebSite
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${businessInfo.url}/#website`,
    "url": businessInfo.url,
    "name": "Thalirmanam - Child & Adolescent Neuro Development Centre",
    "description": businessInfo.description,
    "publisher": {
      "@id": `${businessInfo.url}/#organization`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${businessInfo.url}/search?q={search_term_string}`
      },
      "query-input": {
        "@type": "PropertyValueSpecification",
        "valueRequired": true,
        "valueName": "search_term_string"
      }
    }
  };

  // Schema.org JSON-LD - BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": businessInfo.url
      }
    ]
  };

  // Combined Schema.org JSON-LD
  const schemas = [
    organizationSchema,
    localBusinessSchema,
    medicalClinicSchema,
    webSiteSchema,
    breadcrumbSchema
  ];

  return (
    <html lang="en">
      <head>
        {/* Basic Meta Tags */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#10b981" />

        {/* SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Thalir Manam" />
        <meta name="category" content="Health" />
        <meta name="classification" content="Child Development Services" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="language" content="English" />
        <meta name="geo.region" content={businessInfo.geoRegion} />
        <meta name="geo.placename" content={businessInfo.geoPlacename} />
        <meta name="geo.position" content={`${businessInfo.latitude};${businessInfo.longitude}`} />
        <meta name="ICBM" content={`${businessInfo.latitude}, ${businessInfo.longitude}`} />

        {/* Business Contact Meta Tags */}
        <meta name="business:contact_data:street_address" content={businessInfo.streetAddress} />
        <meta name="business:contact_data:locality" content={businessInfo.addressLocality} />
        <meta name="business:contact_data:region" content={businessInfo.addressRegion} />
        <meta name="business:contact_data:postal_code" content={businessInfo.postalCode} />
        <meta name="business:contact_data:country_name" content={businessInfo.addressCountry} />

        {/* Open Graph Additional Meta Tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="ta_IN" />
        <meta property="og:country_name" content="India" />
        <meta property="og:email" content={businessInfo.email} />
        <meta property="og:phone_number" content={businessInfo.telephone} />

        {/* Article Meta Tags (for blog content) */}
        <meta property="article:author" content="Thalir Manam" />
        <meta property="article:section" content="Child Development" />
        <meta property="article:publisher" content={socialLinks.facebook} />

        {/* Site Verification Tags */}
        <meta name="google-site-verification" content="Sl1te7xtOypd1W7jB-BoZyxo3ZdGvyB4L-tbLJVZGag" />
        {/* <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" /> */}
        {/* <meta name="p:domain_verify" content="YOUR_PINTEREST_VERIFICATION_CODE" /> */}
        {/* <meta name="yandex-verification" content="YOUR_YANDEX_VERIFICATION_CODE" /> */}
        {/* <meta name="facebook-domain-verification" content="YOUR_FACEBOOK_VERIFICATION_CODE" /> */}

        {/* Schema.org JSON-LD */}
        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}

        {/* Google Analytics 4 */}
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_ID}');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>

        {/* Facebook Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>

        {/* Structured Data Testing */}
        {/* Add this for debugging: https://search.google.com/test/rich-results */}
      </head>

      {/* Google Tag Manager noscript fallback */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

      <body className="overflow-x-hidden">
        <MessageProvider>
          {children}
          <WhatsAppIcon onClick={() => setIsChatBoxVisible(!isChatBoxVisible)} />
          <WhatsAppChatBox isVisible={isChatBoxVisible} onClose={() => setIsChatBoxVisible(false)} />
        </MessageProvider>
      </body>
    </html>
  )
}