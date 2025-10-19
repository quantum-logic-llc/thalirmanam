export const seoConfig = {
  siteName: 'Thalir Manam - Child Development & Therapy Center',
  siteUrl: 'https://thalirmanam.in',
  defaultDescription: 'Thalir Manam provides specialized child development services including speech therapy, behavioral therapy, and neurodevelopmental assessments',
  
  pages: {
    home: {
      title: 'Thalir Manam - Child Development & Therapy Center',
      description: 'Specialized services include speech and language therapy, behavioral therapy, swallowing disorders, sleep disorders, neurodevelopmental assessments, and psychometric evaluations',
      keywords: 'child development, speech therapy, behavioral therapy, autism support, special needs, Chennai'
    },
    'home-2': {
      title: 'Thalir Manam - Nurturing Minds, Shaping Futures',
      description: 'Professional child development and therapy services in Chennai'
    },
    'about-us': {
      title: 'About Thalir Manam - Child Development Center',
      description: 'Learn about Thalir Manam\'s mission to provide comprehensive child development and therapy services'
    },
    'contact-us': {
      title: 'Contact Thalir Manam - Book Your Consultation',
      description: 'Get in touch with Thalir Manam for specialized child development and therapy services in Chennai'
    },
    blog: {
      title: 'Thalir Manam Blog - Child Development Insights',
      description: 'Expert insights on child development, therapy techniques, and parenting tips'
    },
    'blog-details': {
      title: 'Thalir Manam - Article Details',
      description: 'Detailed articles about child development and therapy approaches'
    },
    services: {
      title: 'Thalir Manam Services - Child Development & Therapy',
      description: 'Comprehensive child development services including speech therapy, behavioral therapy, and assessments'
    },
    'service-details': {
      title: 'Thalir Manam - Service Details',
      description: 'Detailed information about our specialized child development and therapy services'
    },
    portfolio: {
      title: 'Thalir Manam - Success Stories & Portfolio',
      description: 'View our success stories and portfolio in child development and therapy'
    },
    faq: {
      title: 'Thalir Manam FAQ - Common Questions',
      description: 'Frequently asked questions about child development and therapy services'
    },
    'parents-corner': {
      title: 'Thalir Manam - Parent\'s Corner',
      description: 'Resources and guidance for parents of children with special needs and developmental challenges'
    }
  }
}

export const getPageSEO = (pageKey) => {
  return seoConfig.pages[pageKey] || {
    title: seoConfig.siteName,
    description: seoConfig.defaultDescription
  }
}