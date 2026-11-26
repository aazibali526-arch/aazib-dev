"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavDropdown } from "@/components/layout/NavDropdown";
import { navLinkActive, navLinkBase } from "@/components/layout/navStyles";
import { headerLinks } from "@/data/nav";
import { isActivePath } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="hidden lg:block">
      <ul className="flex items-center gap-8">
        {headerLinks.map((item) => {
          if ("children" in item) {
            return (
              <li key={item.label}>
                <NavDropdown group={item} pathname={pathname} />
              </li>
            );
          }

          const active = isActivePath(pathname, item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(navLinkBase, active && navLinkActive)}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}