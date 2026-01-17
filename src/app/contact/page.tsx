import { BRAND } from "@/content/brand";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main>
      <Section className="py-12">
        <div className="text-right">
          <h1 className="text-3xl font-extrabold">اتصل بنا</h1>
          <p className="mt-2 text-slate-600">
            تواصل سريع عبر واتساب أو اتصال مباشر — ونرتب المعاينة في أقرب وقت.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 text-right shadow-sm">
            <h2 className="text-lg font-bold">بيانات التواصل</h2>

            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <div>
                <span className="font-semibold">العنوان: </span>
                {BRAND.location}
              </div>
              <div>
                <span className="font-semibold">الهاتف: </span>
                <a className="hover:underline" href={`tel:${BRAND.phone}`}>
                  {BRAND.phone}
                </a>
              </div>
              <div>
                <span className="font-semibold">البريد: </span>
                <a className="hover:underline" href={`mailto:${BRAND.email}`}>
                  {BRAND.email}
                </a>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <a
                href={`https://wa.me/${BRAND.whatsappIntl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full rounded-full sm:w-auto">تواصل عبر واتساب</Button>
              </a>
              <a href={`tel:${BRAND.phone}`}>
                <Button variant="outline" className="w-full rounded-full sm:w-auto">
                  اتصال الآن
                </Button>
              </a>
            </div>

            <div className="mt-6 rounded-xl bg-slate-50 p-4 text-right text-xs text-slate-600">
              <div className="font-semibold text-slate-700">خريطة</div>
              <div className="mt-2">
                (Placeholder) — سيتم وضع خريطة Google هنا بدون مفاتيح API.
              </div>
            </div>
          </div>

          {/* Simple Netlify Form (no backend) */}
          <div className="rounded-2xl border bg-white p-6 text-right shadow-sm">
            <h2 className="text-lg font-bold">طلب تواصل / معاينة</h2>
            <p className="mt-2 text-sm text-slate-600">
              اترك بياناتك وسنتواصل معك.
            </p>

            <form
              className="mt-6 space-y-3"
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/thanks"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div>
                <label className="mb-1 block text-sm font-semibold">الاسم</label>
                <input
                  name="name"
                  required
                  className="w-full rounded-xl border px-4 py-3 text-right outline-none focus:ring-2"
                  placeholder="اكتب اسمك"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold">رقم الهاتف</label>
                <input
                  name="phone"
                  required
                  className="w-full rounded-xl border px-4 py-3 text-right outline-none focus:ring-2"
                  placeholder="مثال: 010..."
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold">الرسالة</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-xl border px-4 py-3 text-right outline-none focus:ring-2"
                  placeholder="اكتب طلبك (بيع/شراء/إيجار/تبادل)..."
                />
              </div>

              <Button type="submit" className="w-full rounded-xl">
                إرسال
              </Button>

              <p className="text-xs text-slate-500">
                بإرسالك للبيانات فأنت توافق على التواصل معك بخصوص طلبك.
              </p>
            </form>
          </div>
        </div>
      </Section>
    </main>
  );
}
