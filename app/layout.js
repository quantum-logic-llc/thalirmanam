'use client';
import '../src/index.css'
import WhatsAppIcon from '../src/components/ui/whatsappIcon'
import WhatsAppChatBox from '../src/components/ui/whatsappChatBox'
import { MessageProvider } from '../src/context/messageContext'
import { useState } from 'react';
import Script from 'next/script';

// Tracking IDs
const GTM_ID = 'GTM-WM9TP8CS';
const FB_PIXEL_ID = 'XXXXXXXXXXXXXXX';
const GA4_ID = 'G-VR3K4ZDG73';

const businessInfo = {
  name: 'Thalir Manam',
  description: 'Child & Adolescent Neuro Development Centre in Chennai offering therapy for autism, ADHD, learning disabilities, and behavioural challenges.',
  url: 'https://thalirmanam.in'
};

export default function RootLayout({ children }) {
  const [isChatBoxVisible, setIsChatBoxVisible] = useState(false);

  return (
    <html lang="en">
      <head>
        {/* ✅ BASIC */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ✅ TITLE */}
        <title>Thalir Manam | Child Development Centre in Chennai</title>

        {/* ✅ META DESCRIPTION (FIXED LENGTH) */}
        <meta
          name="description"
          content="Thalir Manam in Chennai provides therapy for autism, ADHD, learning disabilities and developmental challenges in children and adolescents."
        />

        {/* ✅ CANONICAL (CRITICAL FIX) */}
        <link rel="canonical" href="https://thalirmanam.in/" />

        {/* ✅ ROBOTS */}
        <meta name="robots" content="index, follow" />

        {/* ✅ BING VERIFICATION (ADD YOUR REAL CODE) */}
        {/* <meta name="msvalidate.01" content="YOUR_BING_CODE_HERE" /> */}

        {/* ✅ OPEN GRAPH (IMPORTANT FOR TRUST) */}
        <meta property="og:title" content="Thalir Manam - Child Development Centre" />
        <meta property="og:description" content={businessInfo.description} />
        <meta property="og:url" content={businessInfo.url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://thalirmanam.in/assets/logo.png" />

        {/* ✅ TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Thalir Manam" />
        <meta name="twitter:description" content={businessInfo.description} />

        {/* ✅ JSON-LD (keep only ONE main schema to reduce noise) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "name": "Thalir Manam",
              "url": "https://thalirmanam.in",
              "description": businessInfo.description,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chennai",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              }
            })
          }}
        />

        {/* ✅ GOOGLE ANALYTICS */}
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} />
        <Script id="ga">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_ID}');
          `}
        </Script>
      </head>

      <body>
        <MessageProvider>
          {children}
          <WhatsAppIcon onClick={() => setIsChatBoxVisible(!isChatBoxVisible)} />
          <WhatsAppChatBox isVisible={isChatBoxVisible} onClose={() => setIsChatBoxVisible(false)} />
        </MessageProvider>
      </body>
    </html>
  )
}