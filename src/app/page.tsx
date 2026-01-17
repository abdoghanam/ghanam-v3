import Link from "next/link";
import { BRAND } from "@/content/brand";
import { PROPERTIES } from "@/content/properties";
import { HeroFusion } from "@/components/sections/HeroFusion";
import { TestimonialsGrid } from "@/components/sections/TestimonialsGrid";
import { FaqSection } from "@/components/sections/FaqSection";
import { Section } from "@/components/Section";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const featured = PROPERTIES.filter((p) => p.isFeatured).slice(0, 6);

  return (
    <main>
      <HeroFusion />

      {/* Services */}
      <Section className="py-14">
        <div className="mb-6 text-right">
          <h2 className="text-2xl font-extrabold">خدماتنا</h2>
          <p className="mt-2 text-slate-600">تركيزنا: وضوح + سرعة + ثقة.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {BRAND.services.map((s) => (
            <div key={s.title} className="rounded-2xl border bg-white p-6 text-right shadow-sm">
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured */}
      <Section className="py-14">
        <div className="mb-6 flex items-end justify-between gap-4">
          <Link href="/properties" className="text-sm font-semibold text-slate-700 hover:underline">
            عرض كل العقارات
          </Link>
          <div className="text-right">
            <h2 className="text-2xl font-extrabold">عقارات مميزة</h2>
            <p className="mt-2 text-slate-600">{BRAND.propertiesHint}</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <PropertyCard key={p.id} p={p} />
          ))}
        </div>
      </Section>

      <TestimonialsGrid />
      <FaqSection />

      {/* CTA */}
      <Section className="py-16">
        <div className="rounded-3xl bg-slate-900 px-6 py-10 text-right text-white md:px-10">
          <h3 className="text-2xl font-extrabold">{BRAND.homeCta.heading}</h3>
          <p className="mt-3 max-w-2xl text-slate-200">{BRAND.homeCta.text}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <a href={`https://wa.me/${BRAND.whatsappIntl}`} target="_blank" rel="noopener noreferrer">
              <Button className="w-full rounded-full sm:w-auto">
                {BRAND.homeCta.whatsappLabel}
              </Button>
            </a>
            <Link href="/properties">
              <Button variant="outline" className="w-full rounded-full sm:w-auto">
                {BRAND.homeCta.propertiesLabel}
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
