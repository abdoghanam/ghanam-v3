import { BRAND } from "@/content/brand";

export function siteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
}

export function localBusinessJsonLd() {
  const url = siteUrl();
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "RealEstateAgent"],
    name: BRAND.name,
    url,
    areaServed: "El Mahalla El Kubra",
    address: {
      "@type": "PostalAddress",
      addressLocality: "El Mahalla El Kubra",
      addressRegion: "Gharbia",
      addressCountry: "EG",
    },
    telephone: BRAND.phone,
    email: BRAND.email,
  };
}
