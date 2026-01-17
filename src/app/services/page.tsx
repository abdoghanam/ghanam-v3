import Link from "next/link";
import { BRAND } from "@/content/brand";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <main>
      <Section className="py-12">
        <div className="text-right">
          <h1 className="text-3xl font-extrabold">خدماتنا</h1>
          <p className="mt-2 text-slate-600">خدمات عملية مبنية على الثقة وسرعة التنفيذ.</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {BRAND.services.map((s) => (
            <div key={s.title} className="rounded-2xl border bg-white p-6 text-right shadow-sm">
              <h2 className="text-lg font-bold">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <a href={`https://wa.me/${BRAND.whatsappIntl}`} target="_blank" rel="noopener noreferrer">
            <Button className="w-full rounded-full sm:w-auto">تواصل عبر واتساب</Button>
          </a>
          <Link href="/properties">
            <Button variant="outline" className="w-full rounded-full sm:w-auto">
              بحث عن عقار
            </Button>
          </Link>
        </div>
      </Section>
    </main>
  );
}
