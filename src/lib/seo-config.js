export const seoConfig = {
  siteName: 'Thalir Manam - Neuro Development Center',
  siteUrl: 'https://thalirmanam.in',
  defaultDescription: 'Thalir Manam provides specialized child development services including speech therapy, behavioral therapy, and neurodevelopmental assessments',
  ogImage: 'https://thalirmanam.in/assets/og-image.png',
  twitterHandle: '@thalirmanam',
  author: 'Thalir Manam',
  locale: 'en_US',
  type: 'website',

  pages: {
    home: {
      title: 'Thalir Manam - Neuro Development Center',
      description: 'Specialized services include speech and language therapy, behavioral therapy, swallowing disorders, sleep disorders, neurodevelopmental assessments, and psychometric evaluations',
      keywords: 'child development, speech therapy, behavioral therapy, autism support, special needs, Chennai',
      ogImage: 'https://thalirmanam.in/assets/og-home.png',
      canonical: 'https://thalirmanam.in/'
    },
    'home-2': {
      title: 'Thalir Manam - Supporting Every Stage of Development',
      description: 'From babies to teens, comprehensive family-centered care for developmental challenges. Specialized support for autism, ADHD, and learning disabilities with evidence-based interventions.',
      keywords: 'child development, teen transition, family care, autism support, ADHD therapy, developmental services, Chennai',
      canonical: 'https://thalirmanam.in/'
    },
    home2: {
      title: 'Thalir Manam - Supporting Every Stage of Development',
      description: 'From babies to teens, comprehensive family-centered care for developmental challenges. Specialized support for autism, ADHD, and learning disabilities with evidence-based interventions.',
      keywords: 'child development, teen transition, family care, autism support, ADHD therapy, developmental services, Chennai',
      canonical: 'https://thalirmanam.in/'
    },
    'about-us': {
      title: 'About Thalir Manam - Neuro Development Center',
      description: 'Learn about Thalir Manam\'s mission to provide comprehensive child development and therapy services. Meet our expert team of specialists dedicated to helping children reach their full potential.',
      keywords: 'about thalir manam, child development center, therapy team, developmental specialists, Chennai',
      canonical: 'https://thalirmanam.in/about-us'
    },
    'contact-us': {
      title: 'Contact Thalir Manam - Book Your Consultation',
      description: 'Get in touch with Thalir Manam for specialized child development and therapy services in Chennai. Visit our center or call us to schedule a consultation.',
      keywords: 'contact thalir manam, child therapy Chennai, book appointment, developmental assessment, speech therapy contact',
      canonical: 'https://thalirmanam.in/contact-us'
    },
    blog: {
      title: 'Thalir Manam Blog - Neuro Development Insights',
      description: 'Expert insights on child development, therapy techniques, and parenting tips. Stay informed with the latest research and practical advice from our specialists.',
      keywords: 'child development blog, parenting tips, therapy techniques, autism articles, speech therapy insights',
      canonical: 'https://thalirmanam.in/blog'
    },
    'blog-details': {
      title: 'Thalir Manam - Article Details',
      description: 'Detailed articles about child development and therapy approaches. Deep dive into evidence-based practices and expert guidance.',
      keywords: 'child development articles, therapy details, expert advice, developmental guidance',
      canonical: 'https://thalirmanam.in/blog-details'
    },
    services: {
      title: 'Services - Thalir Manam Neuro Development Center',
      description: 'Comprehensive child development services including speech therapy, behavioral therapy, occupational therapy, and neurodevelopmental assessments in Chennai.',
      keywords: 'child development services, speech therapy Chennai, behavioral therapy, occupational therapy, autism treatment',
      canonical: 'https://thalirmanam.in/services'
    },
    'service-details': {
      title: 'Service Details - Thalir Manam',
      description: 'Detailed information about our specialized child development and therapy services. Learn about our evidence-based approaches and personalized treatment plans.',
      keywords: 'therapy service details, developmental treatment, child assessment, personalized therapy',
      canonical: 'https://thalirmanam.in/service-details'
    },
    portfolio: {
      title: 'Success Stories - Thalir Manam',
      description: 'View our success stories and portfolio in child development and therapy. Read inspiring stories of children who have achieved milestones with our support.',
      keywords: 'child development success stories, therapy outcomes, patient testimonials, developmental milestones',
      canonical: 'https://thalirmanam.in/portfolio'
    },
    faq: {
      title: 'FAQ - Thalir Manam Neuro Development Center',
      description: 'Frequently asked questions about child development and therapy services. Find answers about our therapies, assessment process, appointments, and more.',
      keywords: 'child therapy FAQ, developmental questions, therapy process, assessment FAQ, appointment queries',
      canonical: 'https://thalirmanam.in/faq'
    },
    'parents-corner': {
      title: 'Parent\'s Corner - Thalir Manam',
      description: 'Resources and guidance for parents of children with special needs and developmental challenges. Expert tips, articles, and support for your parenting journey.',
      keywords: 'parenting resources, special needs parenting, child development tips, parent guidance, therapy support',
      canonical: 'https://thalirmanam.in/parents-corner'
    },
    appointments: {
      title: 'Book an Appointment - Thalir Manam',
      description: 'Schedule an appointment with our child development specialists. Book speech therapy, behavioral therapy, and developmental assessments in Chennai. Easy online booking available.',
      keywords: 'book appointment, child therapy, speech therapy booking, developmental assessment, Chennai child development center',
      canonical: 'https://thalirmanam.in/appointments'
    }
  }
}

/**
 * Generates comprehensive Next.js metadata object for a given page
 * @param {string} pageKey - The key of the page from seoConfig.pages
 * @param {string} path - Optional path override for canonical URL
 * @returns {object} Next.js metadata object
 */
export const getPageSEO = (pageKey, path = null) => {
  const pageData = seoConfig.pages[pageKey] || {}
  const title = pageData.title || seoConfig.siteName
  const description = pageData.description || seoConfig.defaultDescription
  const keywords = pageData.keywords || ''
  const canonical = path
    ? `${seoConfig.siteUrl}${path}`
    : pageData.canonical || `${seoConfig.siteUrl}/${pageKey === 'home' ? '' : pageKey}`
  const ogImage = pageData.ogImage || seoConfig.ogImage

  return {
    title,
    description,
    keywords,
    authors: [{ name: seoConfig.author }],
    creator: seoConfig.author,
    publisher: seoConfig.siteName,
    keywords,

    // Canonical URL
    alternates: {
      canonical: canonical
    },

    // Open Graph / Facebook
    openGraph: {
      type: seoConfig.type,
      locale: seoConfig.locale,
      url: canonical,
      title: title,
      description: description,
      siteName: seoConfig.siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },

    // Twitter
    twitter: {
      card: 'summary_large_image',
      site: seoConfig.twitterHandle,
      creator: seoConfig.twitterHandle,
      title: title,
      description: description,
      images: [ogImage]
    },

    // Additional meta tags
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

    // Verification tags (add your verification codes here)
    verification: {
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
    },

    // Icons
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },

    // App manifest
    manifest: '/manifest.json',

    // Additional SEO
    category: 'Health',
    classification: 'Child Development Services',
  }
}
