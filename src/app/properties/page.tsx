"use client";

import * as React from "react";
import { PROPERTIES } from "@/content/properties";
import type { PropertyType } from "@/content/types";
import { BRAND } from "@/content/brand";
import { Section } from "@/components/Section";
import { PropertyCard } from "@/components/PropertyCard";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs: Array<{ key: "all" | PropertyType; label: string }> = [
  { key: "all", label: "الكل" },
  { key: "sale", label: "للبيع" },
  { key: "rent", label: "للإيجار" },
  { key: "exchange", label: "تبادل" },
  { key: "lands", label: "أراضي" },
  { key: "shops", label: "محلات" },
];

export default function PropertiesPage() {
  const [type, setType] = React.useState<"all" | PropertyType>("all");
  const [q, setQ] = React.useState("");

  const filtered = React.useMemo(() => {
    const query = q.trim().toLowerCase();
    return PROPERTIES.filter((p) => {
      const matchesType = type === "all" ? true : p.type === type;
      const hay = `${p.title} ${p.location}`.toLowerCase();
      const matchesQuery = query ? hay.includes(query) : true;
      return matchesType && matchesQuery;
    });
  }, [type, q]);

  return (
    <main>
      <Section className="py-12">
        <div className="text-right">
          <h1 className="text-3xl font-extrabold">العقارات</h1>
          <p className="mt-2 text-slate-600">{BRAND.propertiesHint}</p>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-3 md:items-end">
          <div className="md:col-span-2">
            <label className="mb-2 block text-right text-sm font-semibold">
              بحث
            </label>
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={BRAND.searchPlaceholder}
              className="text-right"
            />
          </div>

          <div className="md:col-span-1">
            <label className="mb-2 block text-right text-sm font-semibold">
              تصفية حسب النوع
            </label>
            <Tabs value={type} onValueChange={(v) => setType(v as any)}>
              <TabsList className="flex w-full justify-between">
                {tabs.map((t) => (
                  <TabsTrigger
                    key={t.key}
                    value={t.key}
                    className="text-xs"
                  >
                    {t.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <PropertyCard key={p.id} p={p} />
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-10 rounded-2xl border bg-white p-8 text-right text-slate-600">
            لا توجد نتائج مطابقة. جرّب تغيير البحث أو الفلتر.
          </div>
        ) : null}
      </Section>
    </main>
  );
}
