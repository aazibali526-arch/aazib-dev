import Image from "next/image";
import Link from "next/link";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { MobileNav } from "@/components/layout/MobileNav";
import { Button } from "@/components/ui/Button";
import { headerCta } from "@/data/nav";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-glass-eyebrow-border bg-blue-900/85 backdrop-blur-sm md:h-18">
      <div className="mx-auto flex h-full max-w-1200px items-center justify-between px-5 md:px-8 lg:px-10">
        <Link
          href="/"
          aria-label="Aazib, go to home page"
          className="flex items-center focus-visible:outline-white"
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

        <div className="flex items-center gap-8">
          <DesktopNav />
          <Button href={headerCta.href} className="hidden lg:inline-flex">
            {headerCta.label}
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}