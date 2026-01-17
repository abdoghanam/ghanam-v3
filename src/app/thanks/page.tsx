import Link from "next/link";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";

export default function ThanksPage() {
  return (
    <main>
      <Section className="py-16">
        <div className="mx-auto max-w-2xl rounded-3xl border bg-white p-10 text-right shadow-sm">
          <h1 className="text-3xl font-extrabold">تم استلام طلبك ✅</h1>
          <p className="mt-3 text-slate-700">
            شكرًا لك. سنقوم بالتواصل معك في أقرب وقت.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Link href="/properties">
              <Button className="rounded-xl">تصفح العقارات</Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="rounded-xl">العودة للرئيسية</Button>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
