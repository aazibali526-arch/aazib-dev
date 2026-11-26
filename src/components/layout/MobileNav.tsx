"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { navLinkActive, navLinkBase } from "@/components/layout/navStyles";
import { Button } from "@/components/ui/Button";
import { headerCta, headerLinks } from "@/data/nav";
import { isActivePath } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const open = openedAt === pathname;

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1025px)");
    const handleChange = () => {
      if (query.matches) setOpenedAt(null);
    };
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (!open) return;

    if (event.key === "Escape") {
      setOpenedAt(null);
      buttonRef.current?.focus();
      return;
    }

    if (event.key !== "Tab") return;

    const focusable = rootRef.current?.querySelectorAll<HTMLElement>(
      "a[href], button:not([disabled])",
    );
    if (!focusable || focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <div ref={rootRef} className="lg:hidden" onKeyDown={handleKeyDown}>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpenedAt(open ? null : pathname)}
        className="flex size-11 items-center justify-center rounded-btn text-surface-50 focus-visible:outline-white"
      >
        {open ? (
          <X aria-hidden="true" strokeWidth={2} className="size-6" />
        ) : (
          <Menu aria-hidden="true" strokeWidth={2} className="size-6" />
        )}
      </button>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-glass-eyebrow-border bg-blue-900 px-5 py-8 md:max-h-[calc(100dvh-4.5rem)] md:px-8"
      >
        <ul className="flex flex-col gap-6">
          {headerLinks.map((item) => {
            if ("children" in item) {
              const groupId = `mobile-group-${item.label.toLowerCase()}`;
              const expanded = openGroup === item.label;
              const groupActive = item.children.some((child) =>
                isActivePath(pathname, child.href, true),
              );

              return (
                <li key={item.label}>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={groupId}
                    onClick={() => setOpenGroup(expanded ? null : item.label)}
                    className={cn(
                      navLinkBase,
                      "w-full justify-between",
                      groupActive && navLinkActive,
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      aria-hidden="true"
                      strokeWidth={2}
                      className={cn(
                        "size-5 transition-transform duration-300 ease-smooth",
                        expanded && "rotate-180",
                      )}
                    />
                  </button>
                  {expanded ? (
                    <ul
                      id={groupId}
                      className="mt-4 flex flex-col gap-4 border-l border-glass-eyebrow-border pl-4"
                    >
                      {item.children.map((child) => {
                        const childActive = isActivePath(pathname, child.href, true);
                        return (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              aria-current={childActive ? "page" : undefined}
                              onClick={() => setOpenedAt(null)}
                              className={cn(navLinkBase, childActive && navLinkActive)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </li>
              );
            }

            const active = isActivePath(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpenedAt(null)}
                  className={cn(navLinkBase, active && navLinkActive)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-8">
          <Button
            href={headerCta.href}
            fullWidthOnMobile
            onClick={() => setOpenedAt(null)}
          >
            {headerCta.label}
          </Button>
        </div>
      </nav>
    </div>
  );
}