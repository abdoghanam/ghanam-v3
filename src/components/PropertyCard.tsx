import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/content/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const typeLabel: Record<Property["type"], string> = {
  sale: "للبيع",
  rent: "للإيجار",
  exchange: "تبادل",
  lands: "أراضي",
  shops: "محلات",
};

export function PropertyCard({ p }: { p: Property }) {
  const img = p.images?.[0] || "/placeholders/property.svg";

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[16/10] w-full bg-slate-50">
        <Image
          src={img}
          alt={p.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <CardHeader className="space-y-2 text-right">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="secondary">{typeLabel[p.type]}</Badge>
          {p.isFeatured ? <Badge>مميز</Badge> : null}
        </div>
        <h3 className="line-clamp-2 text-base font-bold">{p.title}</h3>
        <p className="text-sm text-slate-600">{p.location}</p>
      </CardHeader>

      <CardContent className="space-y-3 text-right">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-slate-900">{p.price}</span>
          <span className="text-slate-600">{p.areaM2} م²</span>
        </div>

        <Link
          href={`/properties/${p.slug}`}
          className="inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
        >
          عرض التفاصيل
        </Link>
      </CardContent>
    </Card>
  );
}
