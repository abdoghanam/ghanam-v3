import Image from "next/image";
import { BRAND } from "@/content/brand";
import { Section } from "@/components/Section";

export default function AboutPage() {
  return (
    <main>
      <Section className="py-12">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="space-y-4 text-right">
            <h1 className="text-3xl font-extrabold">من نحن</h1>
            <p className="whitespace-pre-line leading-relaxed text-slate-700">{BRAND.aboutStory}</p>

            <div className="mt-6 rounded-2xl border bg-white p-6">
              <h2 className="text-lg font-bold text-right">لماذا غنام؟</h2>
              <ul className="mt-3 list-inside list-disc space-y-2 text-right text-slate-700">
                {BRAND.aboutFeatures.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border bg-slate-50">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/placeholders/property.svg"
                alt="عن غنام للعقارات"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-right">
              <h3 className="text-lg font-bold">{BRAND.location}</h3>
              <p className="mt-2 text-sm text-slate-600">
                نركز على المحلة الكبرى والغربية بخبرة محلية ومعايير احترافية.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
