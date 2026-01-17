import Image from "next/image";
import Link from "next/link";
import { MapPin, Building2 } from "lucide-react";
import { BRAND } from "@/content/brand";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";

export function HeroFusion() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/media/hero.jpg"
          alt="عقارات فاخرة"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute -bottom-28 -left-24 h-[28rem] w-[28rem] rounded-full bg-yellow-400/5 blur-3xl" />
      </div>

      <Section className="relative z-10 pt-24 pb-14">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-white/10 px-4 py-2 backdrop-blur">
            <MapPin className="h-4 w-4 text-yellow-300" />
            <span className="text-sm font-semibold text-white/90">
              {BRAND.location}
            </span>
          </div>

          <div className="mx-auto mb-7 flex justify-center">
            <div className="relative h-44 w-44 md:h-56 md:w-56">
              <Image
                src="/brand/logos-3d/ghanam_logo_3d_gold_dark_hero.png"
                alt={BRAND.name}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <h1 className="text-balance text-3xl font-extrabold leading-tight text-white md:text-5xl">
            السوق له قواعد… <br />
            <span className="text-yellow-300">وإحنا فاهمينها</span>
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-pretty text-base leading-relaxed text-white/80 md:text-lg">
            من قلب المحلة الكبرى، نوصلك بالفرصة الصح في الوقت الصح.
            خبرة محلية تفهم السوق… وثقة تبني علاقات.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["بيع", "شراء", "إيجار", "تبادل"].map((x) => (
              <span
                key={x}
                className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/15 px-5 py-2 text-sm font-semibold text-white"
              >
                <Building2 className="h-4 w-4" />
                {x}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`https://wa.me/${BRAND.whatsappIntl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="h-12 rounded-xl px-8 text-base font-bold">
                تواصل عبر واتساب
              </Button>
            </a>

            <Link href="/properties">
              <Button variant="outline" className="h-12 rounded-xl px-8 text-base font-semibold">
                تصفح العقارات
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </section>
  );
}
