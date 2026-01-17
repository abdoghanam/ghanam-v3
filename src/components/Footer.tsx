import Link from "next/link";
import { BRAND } from "@/content/brand";
import { Section } from "@/components/Section";

export function Footer() {
  return (
    <footer className="mt-12 border-t bg-white">
      <Section className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3 text-right">
            <h3 className="text-lg font-bold">{BRAND.name}</h3>
            <p className="text-sm text-slate-600">{BRAND.footerDescription}</p>
          </div>

          <div className="space-y-3 text-right">
            <h4 className="text-sm font-bold text-slate-900">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              {BRAND.nav.map((n) => (
                <li key={n.href}>
                  <Link className="text-slate-700 hover:text-slate-900" href={n.href}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 text-right">
            <h4 className="text-sm font-bold text-slate-900">تواصل</h4>
            <div className="text-sm text-slate-700">
              <div>{BRAND.location}</div>
              <div className="mt-1">
                <a className="hover:underline" href={`tel:${BRAND.phone}`}>
                  {BRAND.phone}
                </a>
              </div>
              <div className="mt-1">
                <a className="hover:underline" href={`mailto:${BRAND.email}`}>
                  {BRAND.email}
                </a>
              </div>
              <div className="mt-3">
                <a
                  className="hover:underline"
                  href={`https://wa.me/${BRAND.whatsappIntl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  تواصل عبر واتساب
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-right text-xs text-slate-500">
          © {new Date().getFullYear()} {BRAND.name}. جميع الحقوق محفوظة.
        </div>
      </Section>
    </footer>
  );
}
