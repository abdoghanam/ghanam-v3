"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { BRAND } from "@/content/brand";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b",
        scrolled
          ? "bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60"
          : "bg-white"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/logos/ghanam-logo-transparent.png"
            alt={BRAND.name}
            width={120}
            height={40}
            priority
          />
          <span className="sr-only">{BRAND.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {BRAND.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-700 hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`https://wa.me/${BRAND.whatsappIntl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="rounded-full">واتساب</Button>
          </a>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="text-right">{BRAND.name}</SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-3">
                {BRAND.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-2 text-right text-base font-semibold hover:bg-slate-100"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={`https://wa.me/${BRAND.whatsappIntl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="mt-2 w-full rounded-full">تواصل عبر واتساب</Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
