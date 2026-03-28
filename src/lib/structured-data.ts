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
  "url": "https://busynotify.in/solutions/busy-accounting-software-chatbot",
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
      "name": "Solutions",
      "item": "https://busynotify.in/solutions"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Busy Accounting Software Chatbot",
      "item": "https://busynotify.in/solutions/busy-accounting-software-chatbot"
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

// Transportation Slip Management Schemas
export const transportationSlipServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Transportation Slip Management System",
  "serviceType": "Document Management",
  "description": "Digital transport challan management with Google Drive integration. Upload LR copies via PWA, let customers access transport details through chatbot. Paperless logistics documentation for Indian businesses.",
  "url": "https://busynotify.in/solutions/transportation-slip-management",
  "provider": {
    "@type": "Organization",
    "name": "BusyNotify"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "featureList": [
    "Transport Slip Photo Capture",
    "Google Drive Auto Upload",
    "Bill-wise Organization",
    "Customer Access Portal",
    "Chatbot Integration",
    "Mobile PWA",
    "Paperless Documentation"
  ]
};

export const transportationSlipBreadcrumbSchema = {
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
      "name": "Solutions",
      "item": "https://busynotify.in/solutions"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Transportation Slip Management",
      "item": "https://busynotify.in/solutions/transportation-slip-management"
    }
  ]
};

// Customer Map Report Schemas
export const customerMapServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Customer Map Report - Geographic Analytics Dashboard",
  "serviceType": "Business Analytics",
  "description": "Google Maps-powered dashboard showing customer distribution across India. State-wise and district-wise business analytics, outstanding payment visualization, and demand trend analysis for Busy Accounting Software users.",
  "url": "https://busynotify.in/solutions/customer-map-report",
  "provider": {
    "@type": "Organization",
    "name": "BusyNotify"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "featureList": [
    "All-India Customer Map",
    "State-wise Business Analytics",
    "District-level Insights",
    "Outstanding Payment Visualization",
    "Demand Trend Analysis",
    "Historical Comparisons",
    "Export Reports"
  ]
};

export const customerMapBreadcrumbSchema = {
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
      "name": "Solutions",
      "item": "https://busynotify.in/solutions"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Customer Map Report",
      "item": "https://busynotify.in/solutions/customer-map-report"
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

export const transportationSlipSchemas = [
  transportationSlipServiceSchema,
  transportationSlipBreadcrumbSchema,
];

export const customerMapSchemas = [
  customerMapServiceSchema,
  customerMapBreadcrumbSchema,
];

// Credit Line Sender Schemas
export const creditLineServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Credit Line Sender - Smart Credit Management System",
  "serviceType": "Credit Control",
  "description": "Intelligent credit management system for Busy Accounting Software. Automatically monitor credit limits and credit days at customer level. Send reminders when limits are breached for timely recoveries.",
  "url": "https://busynotify.in/solutions/credit-line-sender",
  "provider": {
    "@type": "Organization",
    "name": "BusyNotify"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "featureList": [
    "Credit Limit Monitoring",
    "Credit Days Tracking",
    "Dual Condition Check",
    "Customer-Level Control",
    "Smart Targeting",
    "Multi-Channel Alerts",
    "Policy Enforcement",
    "Recovery Analytics"
  ]
};

export const creditLineBreadcrumbSchema = {
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
      "name": "Solutions",
      "item": "https://busynotify.in/solutions"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Credit Line Sender",
      "item": "https://busynotify.in/solutions/credit-line-sender"
    }
  ]
};

export const creditLineSchemas = [
  creditLineServiceSchema,
  creditLineBreadcrumbSchema,
];

// Google Sheet Automation Schemas
export const googleSheetServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Busy Accounting Software Google Sheet Automation",
  "serviceType": "Data Integration",
  "description": "Automatically sync Busy Accounting Software data to Google Sheets using pull-based updates. Free templates for customers, invoices, receipts, and products. Custom query management system available.",
  "url": "https://busynotify.in/solutions/google-sheet-automation",
  "provider": {
    "@type": "Organization",
    "name": "BusyNotify"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "featureList": [
    "Pull-Based Data Sync",
    "Configurable Update Intervals",
    "No API Rate Limits",
    "Free Data Templates",
    "Custom Query Management",
    "Multiple Sheet Support",
    "Real-time Updates"
  ]
};

export const googleSheetBreadcrumbSchema = {
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
      "name": "Solutions",
      "item": "https://busynotify.in/solutions"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Google Sheet Automation",
      "item": "https://busynotify.in/solutions/google-sheet-automation"
    }
  ]
};

export const googleSheetSchemas = [
  googleSheetServiceSchema,
  googleSheetBreadcrumbSchema,
];

// Custom APIs Schemas
export const customAPIsServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom APIs for Busy Accounting Software",
  "serviceType": "API Integration",
  "description": "RESTful API access to Busy Accounting Software data. Free endpoints for customers, bills, products, and ledgers. Custom query development for specific business integration needs.",
  "url": "https://busynotify.in/solutions/custom-apis",
  "provider": {
    "@type": "Organization",
    "name": "BusyNotify"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "featureList": [
    "Customer Information API",
    "Bill-by-Bill Information API",
    "Product Information API",
    "Ledger Data API",
    "Custom Query Development",
    "RESTful Architecture",
    "Token Authentication",
    "API Documentation"
  ]
};

export const customAPIsBreadcrumbSchema = {
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
      "name": "Solutions",
      "item": "https://busynotify.in/solutions"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Custom APIs",
      "item": "https://busynotify.in/solutions/custom-apis"
    }
  ]
};

export const customAPIsSchemas = [
  customAPIsServiceSchema,
  customAPIsBreadcrumbSchema,
];
