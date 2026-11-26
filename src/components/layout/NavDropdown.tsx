"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import type { FocusEvent, KeyboardEvent, MouseEvent, PointerEvent } from "react";
import { navLinkActive, navLinkBase } from "@/components/layout/navStyles";
import type { NavGroup } from "@/data/nav";
import { isActivePath } from "@/lib/navigation";
import { cn } from "@/lib/utils";

interface NavDropdownProps {
  group: NavGroup;
  pathname: string;
}

export function NavDropdown({ group, pathname }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const mouseInside = useRef(false);
  const menuId = useId();
  const active = group.children.some((child) =>
    isActivePath(pathname, child.href, true),
  );

  useEffect(() => {
    if (!open) return;
    const handlePointerDown = (event: Event) => {
      if (
        event.target instanceof Node &&
        !rootRef.current?.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  function handlePointerEnter(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    mouseInside.current = true;
    setOpen(true);
  }

  function handlePointerLeave(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    mouseInside.current = false;
    setOpen(false);
  }

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    if (mouseInside.current && event.detail > 0) return;
    setOpen((value) => !value);
  }

  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setOpen(false);
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Escape" || !open) return;
    setOpen(false);
    buttonRef.current?.focus();
  }

  return (
    <div
      ref={rootRef}
      className="relative"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={handleClick}
        className={cn(navLinkBase, "gap-1.5", active && navLinkActive)}
      >
        {group.label}
        <ChevronDown
          aria-hidden="true"
          strokeWidth={2}
          className={cn(
            "size-4 transition-transform duration-300 ease-smooth",
            open && "rotate-180",
          )}
        />
      </button>

      <div
        className={cn(
          "absolute left-0 top-full pt-6 transition-[opacity,transform,visibility] duration-300 ease-smooth",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-1 opacity-0",
        )}
      >
        <ul
          id={menuId}
          className="flex min-w-64 flex-col gap-1 rounded-card border border-glass-eyebrow-border bg-blue-900 p-2 shadow-card-hover"
        >
          {group.children.map((child) => {
            const childActive = isActivePath(pathname, child.href, true);
            return (
              <li key={child.href}>
                <Link
                  href={child.href}
                  aria-current={childActive ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex min-h-11 items-center rounded-btn px-4 font-mono text-base font-medium leading-[1.4] text-surface-50 transition-colors duration-300 ease-smooth hover:bg-glass-eyebrow-from hover:text-white focus-visible:outline-white",
                    childActive && "bg-glass-eyebrow-from text-white",
                  )}
                >
                  {child.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}