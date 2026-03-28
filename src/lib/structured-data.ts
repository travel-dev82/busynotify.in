// Structured Data for SEO - Busynotify ERP Chatbot
// This helps search engines understand our content better

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "BusyNotify - Busy Accounting Software Chatbot",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, WhatsApp, Telegram",
  "description": "AI-powered chatbot for Busy Accounting Software. Automate customer queries for balance inquiries, ledgers, invoices, payment receipts, and more. 24/7 customer support automation for Indian businesses.",
  "offers": {
    "@type": "Offer",
    "price": "500",
    "priceCurrency": "INR",
    "priceValidUntil": "2027-12-31",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  },
  "provider": {
    "@type": "Organization",
    "name": "BusyNotify",
    "url": "https://busynotify.in",
    "logo": "https://busynotify.in/logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["Hindi", "English"]
    }
  },
  "featureList": [
    "Balance Inquiry Automation",
    "Ledger Statement Generation",
    "Bill-by-Bill Statement",
    "Invoice Delivery via WhatsApp",
    "Payment Receipt Automation",
    "Transportation Slip Delivery",
    "General Voucher Access",
    "Pending Sales Order Status"
  ]
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Busy Accounting Software Chatbot Service",
  "serviceType": "ERP Chatbot Integration",
  "description": "24/7 AI chatbot service for Busy Accounting Software users. Automate customer queries and document delivery.",
  "provider": {
    "@type": "Organization",
    "name": "BusyNotify"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "BusyNotify Plans",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Free Demo",
          "description": "3-day free trial of BusyNotify ERP Chatbot"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Basic Plan",
          "description": "₹500/month - Perfect for small businesses"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Standard Plan",
          "description": "₹1,200/month - For growing businesses"
        }
      }
    ]
  }
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://busynotify.in"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Busy ERP Chatbot Solutions",
      "item": "https://busynotify.in/solutions"
    }
  ]
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BusyNotify",
  "url": "https://busynotify.in",
  "logo": "https://busynotify.in/logo.svg",
  "description": "AI-powered notification infrastructure and ERP chatbot solutions for Indian businesses using Busy Accounting Software.",
  "sameAs": [
    "https://twitter.com/busynotify",
    "https://linkedin.com/company/busynotify",
    "https://github.com/busynotify"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "areaServed": "IN",
    "availableLanguage": ["Hindi", "English"]
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Busy Accounting Software Chatbot?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Busy Accounting Software Chatbot is an AI-powered automation tool that connects with your Busy ERP to handle customer queries automatically. Customers can request balance details, ledgers, invoices, and other documents through WhatsApp or Telegram without contacting your office."
      }
    },
    {
      "@type": "Question",
      "name": "How does the Busy ERP Chatbot work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The chatbot integrates directly with your Busy Software database. When a customer sends a query via WhatsApp or Telegram, our AI processes the request, fetches data from Busy in real-time, and sends back the requested information within seconds."
      }
    },
    {
      "@type": "Question",
      "name": "Which Busy Software versions are supported?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BusyNotify works with all major Busy Accounting Software versions including Busy 17, Busy 18, Busy 21, and the latest releases. We support both single-user and multi-user editions."
      }
    },
    {
      "@type": "Question",
      "name": "Is my Busy Software data secure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We use enterprise-grade encryption and never store your accounting data on external servers. The chatbot only reads data on-demand with proper authentication. We comply with Indian data protection guidelines."
      }
    },
    {
      "@type": "Question",
      "name": "Can customers access data 24/7?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! The chatbot operates round-the-clock. Your customers can check balances, download invoices, or track orders at any time - midnight, weekends, or holidays."
      }
    },
    {
      "@type": "Question",
      "name": "How much does Busy ERP Chatbot cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing starts at just ₹500/month for basic plans. We offer flexible plans based on your query volume and number of customers. Start with a free 3-day demo to test the service."
      }
    }
  ]
};

// Combine all schemas
export const allSchemas = [
  softwareApplicationSchema,
  serviceSchema,
  breadcrumbSchema,
  faqSchema,
];
