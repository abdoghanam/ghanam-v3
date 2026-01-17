import { BRAND } from "@/content/brand";

/**
 * Robust base URL resolver:
 * 1) NEXT_PUBLIC_SITE_URL (you set it)
 * 2) Netlify auto envs: URL, DEPLOY_PRIME_URL
 * 3) Safe fallback (your current production domain)
 */
export function siteUrl() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.URL ||
    process.env.DEPLOY_PRIME_URL ||
    "https://ghanam.netlify.app";

  return raw.replace(/\/$/, "");
}

export function localBusinessJsonLd() {
  const base = siteUrl();

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "RealEstateAgent"],
    name: BRAND.name,
    url: base,
    areaServed: BRAND.location,
    telephone: BRAND.phone,
    email: BRAND.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "المحلة الكبرى",
      addressRegion: "الغربية",
      addressCountry: "EG",
    },
  };
}
