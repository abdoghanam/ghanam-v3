import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  phoneIntl: string; // e.g. "201011244308"
  text?: string;
  className?: string;
  children: React.ReactNode;
};

function buildWaLink(phoneIntl: string, text?: string) {
  const base = `https://wa.me/${phoneIntl.replace(/\D/g, "")}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function WhatsAppButton({ phoneIntl, text, className, children }: Props) {
  const href = buildWaLink(phoneIntl, text);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(className)}
      aria-label="تواصل عبر واتساب"
    >
      {children}
    </a>
  );
}
