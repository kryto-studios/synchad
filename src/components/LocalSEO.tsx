import Script from "next/script";

export default function LocalSEO() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService", "TechArticle"],
        "@id": "https://synchad.com/#organization",
        "name": "synchAD Studios - Web, App & Motion Edits",
        "alternateName": "synchAD",
        "url": "https://synchad.com",
        "logo": "https://synchad.com/logo.png",
        "image": "https://synchad.com/synchAD.png",
        "description": "Top-rated Web Development & Custom Software Studio in Ambikapur, Surguja, Chhattisgarh. Co-founded by Dewansh Chatterjee & Aryan Gupta. Specializing in high-converting landing pages, custom ERP web applications for libraries, coaching institutes, clinics, and motion asset production. Digitalizing The Local.",
        "telephone": ["+919294625866", "+919340411838"],
        "email": "synchad.studio@gmail.com",
        "priceRange": "₹5,879 - ₹13,799",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, UPI, Credit Card, Net Banking",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Main Road, Ambikapur City",
          "addressLocality": "Ambikapur",
          "addressRegion": "Chhattisgarh",
          "postalCode": "497001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 23.1186,
          "longitude": 83.1987
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Ambikapur"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Surguja"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Surajpur"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Chhattisgarh"
          },
          {
            "@type": "Country",
            "name": "India"
          }
        ],
        "founder": [
          {
            "@type": "Person",
            "name": "Dewansh Chatterjee",
            "jobTitle": "Co-Founder & Front-End Architect",
            "telephone": "+919294625866"
          },
          {
            "@type": "Person",
            "name": "Aryan Gupta",
            "jobTitle": "Co-Founder & Backend Architect",
            "telephone": "+919340411838"
          }
        ],
        "sameAs": [
          "https://instagram.com/synchad_tech",
          "https://linkedin.com/company/synchad_tech"
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
        ],
        "knowsAbout": [
          "Web Development in Ambikapur",
          "Website Developers Near Me",
          "Custom WebApp Software",
          "Library Seat Management Systems",
          "Coaching ERP Software",
          "Motion Graphics Video Editing",
          "Local SEO and Analytics",
          "Digitalizing The Local"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "synchAD Digitalization Service Tiers",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Ultra-Basic Aesthetic Landing Page",
                "description": "Minimal high-converting single page, Supabase DB integration, 1 month debugging support."
              },
              "price": "5879.00",
              "priceCurrency": "INR"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Starter Landing Pack",
                "description": "High-converting single page, 1 year Hostinger domain & hosting setup, Google Console & Analytics setup, 3 months free debugging."
              },
              "price": "6799.00",
              "priceCurrency": "INR"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom WebApp Platform Base",
                "description": "Full-stack Next.js web application, Supabase DB, interactive admin dashboard, 1 year domain & hosting setup."
              },
              "price": "10899.00",
              "priceCurrency": "INR"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Niche WebApp + Landing Page Package",
                "description": "Tailored for Libraries, Coaching Institutes, Clinics, Gyms, Cafes, and Rental services with full seat/client management."
              },
              "price": "13799.00",
              "priceCurrency": "INR"
            }
          ]
        }
      }
    ]
  };

  return (
    <Script
      id="synchad-local-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
}
