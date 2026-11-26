"use client";

import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { MobileNav } from "@/components/layout/MobileNav";
import { Button } from "@/components/ui/Button";
import { headerCta } from "@/data/nav";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 8;

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

function getScrolled() {
  return window.scrollY > SCROLL_THRESHOLD;
}

function getServerScrolled() {
  return false;
}

export function Header() {
  const scrolled = useSyncExternalStore(
    subscribe,
    getScrolled,
    getServerScrolled,
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-16 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ease-smooth md:h-18",
        "has-[#mobile-nav:not([hidden])]:border-glass-eyebrow-border has-[#mobile-nav:not([hidden])]:bg-blue-900",
        scrolled
          ? "border-glass-eyebrow-border bg-blue-900/85 backdrop-blur-sm"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-full max-w-300 items-center justify-between px-5 md:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-10">
        <Link
          href="/"
          aria-label="Aazib, go to home page"
          className="flex items-center justify-self-start focus-visible:outline-white"
        >
          <Image
            src="/images/logo-header.png"
            alt=""
            width={648}
            height={192}
            loading="eager"
            className="h-9 w-auto md:h-10"
          />
        </Link>

        <DesktopNav />

        <div className="flex items-center justify-self-end">
          <Button href={headerCta.href} className="hidden lg:inline-flex">
            {headerCta.label}
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}