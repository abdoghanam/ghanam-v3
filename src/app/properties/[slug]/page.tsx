import Image from "next/image";
import { notFound } from "next/navigation";
import { PROPERTIES } from "@/content/properties";
import { BRAND } from "@/content/brand";
import { Section } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const typeLabel: Record<string, string> = {
  sale: "للبيع",
  rent: "للإيجار",
  exchange: "تبادل",
  lands: "أراضي",
  shops: "محلات",
};

export default function PropertyDetailsPage({ params }: { params: { slug: string } }) {
  const p = PROPERTIES.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  const img = p.images?.[0] || "/placeholders/property.svg";
  const waText = `أنا مهتم بالعقار: ${p.title}`;

  return (
    <main>
      <Section className="py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border bg-slate-50">
              <Image
                src={img}
                alt={p.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
            </div>

            <div className="mt-6 text-right">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{typeLabel[p.type] ?? p.type}</Badge>
                  {p.isFeatured ? <Badge>مميز</Badge> : null}
                </div>
                <div className="text-sm text-slate-600">{p.location}</div>
              </div>

              <h1 className="mt-3 text-3xl font-extrabold">{p.title}</h1>

              <div className="mt-4 rounded-2xl bg-slate-900 p-5 text-white">
                <div className="flex items-center justify-between text-right">
                  <div className="text-sm text-slate-200">السعر</div>
                  <div className="text-xl font-extrabold">{p.price}</div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border bg-white p-4 text-right">
                  <div className="text-xs text-slate-600">المساحة</div>
                  <div className="mt-1 font-bold">{p.areaM2} م²</div>
                </div>
                <div className="rounded-2xl border bg-white p-4 text-right">
                  <div className="text-xs text-slate-600">غرف النوم</div>
                  <div className="mt-1 font-bold">{p.bedrooms ?? "—"}</div>
                </div>
                <div className="rounded-2xl border bg-white p-4 text-right">
                  <div className="text-xs text-slate-600">الحمامات</div>
                  <div className="mt-1 font-bold">{p.bathrooms ?? "—"}</div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border bg-white p-6 text-right">
                <h2 className="text-lg font-bold">الوصف</h2>
                <p className="mt-3 leading-relaxed text-slate-700">{p.description}</p>

                <h3 className="mt-6 text-lg font-bold">المميزات</h3>
                <ul className="mt-3 list-inside list-disc space-y-2 text-slate-700">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sticky CTA Card */}
          <aside className="lg:sticky lg:top-24">
            <div className="space-y-3 rounded-3xl border bg-white p-6 text-right shadow-sm">
              <h2 className="text-lg font-extrabold">تواصل سريع</h2>
              <p className="text-sm text-slate-600">
                اكتب لنا على واتساب برسالة جاهزة أو اتصل الآن.
              </p>

              <a
                href={`https://wa.me/${BRAND.whatsappIntl}?text=${encodeURIComponent(waText)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full rounded-xl">واتساب (رسالة جاهزة)</Button>
              </a>

              <a href={`tel:${BRAND.phone}`}>
                <Button variant="outline" className="w-full rounded-xl">
                  اتصال الآن
                </Button>
              </a>

              {/* Netlify form */}
              <div className="pt-4">
                <h3 className="text-sm font-bold">طلب معاينة</h3>
                <form
                  className="mt-3 space-y-3"
                  name="property-inquiry"
                  method="POST"
                  data-netlify="true"
                 data-netlify-honeypot="bot-field" action="/thanks">
                  <input type="hidden" name="form-name" value="property-inquiry" />
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="property" value={p.title} />

                  <input
                    name="name"
                    required
                    className="w-full rounded-xl border px-4 py-3 text-right outline-none focus:ring-2"
                    placeholder="الاسم"
                  />
                  <input
                    name="phone"
                    required
                    className="w-full rounded-xl border px-4 py-3 text-right outline-none focus:ring-2"
                    placeholder="رقم الهاتف"
                  />
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full rounded-xl border px-4 py-3 text-right outline-none focus:ring-2"
                    placeholder="اكتب طلبك..."
                    defaultValue={waText}
                  />
                  <Button type="submit" className="w-full rounded-xl">
                    إرسال طلب
                  </Button>
                </form>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* Mobile bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t bg-white/90 p-3 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-6xl gap-2">
          <a
            className="flex-1"
            href={`https://wa.me/${BRAND.whatsappIntl}?text=${encodeURIComponent(waText)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full rounded-xl">واتساب</Button>
          </a>
          <a className="flex-1" href={`tel:${BRAND.phone}`}>
            <Button variant="outline" className="w-full rounded-xl">
              اتصال
            </Button>
          </a>
        </div>
      </div>
    </main>
  );
}
