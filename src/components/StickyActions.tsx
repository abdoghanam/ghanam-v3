"use client";

import * as React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { BRAND } from "@/content/brand";
import { cn } from "@/lib/utils";

export function StickyActions() {
  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-2">
      <a
        href={`https://wa.me/${BRAND.whatsappIntl}`}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold",
          "bg-green-600 text-white shadow-lg hover:opacity-95 active:opacity-90"
        )}
        aria-label="تواصل عبر واتساب"
      >
        <MessageCircle className="h-5 w-5" />
        واتساب
      </a>

      <a
        href={`tel:${BRAND.phone}`}
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold",
          "bg-slate-900 text-white shadow-lg hover:opacity-95 active:opacity-90"
        )}
        aria-label="اتصال مباشر"
      >
        <Phone className="h-5 w-5" />
        اتصال
      </a>
    </div>
  );
}
