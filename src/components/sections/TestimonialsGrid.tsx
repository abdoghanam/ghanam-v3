import { Star } from "lucide-react";
import { Section } from "@/components/Section";
import { TESTIMONIALS } from "@/content/testimonials";

export function TestimonialsGrid() {
  return (
    <Section className="py-14">
      <div className="text-right">
        <h2 className="text-2xl font-extrabold">آراء عملائنا</h2>
        <p className="mt-2 text-slate-600">كلام الناس أحسن دليل — ثقة حقيقية بتتبني بالمواقف.</p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="rounded-2xl border bg-white p-6 text-right shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="font-bold">{t.name}</div>
                <div className="text-sm text-slate-600">{t.role}</div>
              </div>
              <div className="flex items-center gap-1 text-yellow-500">
                {Array.from({ length: t.rating ?? 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
            <p className="mt-4 leading-relaxed text-slate-700">“{t.content}”</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
