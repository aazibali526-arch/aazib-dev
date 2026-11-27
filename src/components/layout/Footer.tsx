import { Coffee, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks, privacyLink } from "@/data/nav";
import type { NavLink } from "@/data/nav";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const headingClass =
  "font-display text-lg font-semibold leading-snug text-surface-50";

const linkClass =
  "inline-flex min-h-8 items-center font-body text-sm font-normal leading-normal text-code-text transition-colors duration-300 ease-smooth hover:text-code-accent focus-visible:outline-white";

const metaClass = "font-mono text-[13px] font-normal leading-normal text-code-title";

interface FooterGroupProps {
  title: string;
  label: string;
  links: NavLink[];
}

function FooterGroup({ title, label, links }: FooterGroupProps) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className={headingClass}>{title}</h2>
      <nav aria-label={label}>
        <ul className="flex flex-col">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkClass}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export function Footer() {
  const phoneHref = `tel:${site.phone.replace(/\s/g, "")}`;

  return (
    <footer className="mt-auto bg-ink-950 px-5 pb-6 pt-12 text-code-text md:px-8 md:pb-8 md:pt-16 lg:px-10">
      <div className="mx-auto max-w-300">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col gap-6 lg:col-span-5 lg:pr-8">
            <Image
              src="/images/logo-header.png"
              alt="Aazib"
              width={648}
              height={192}
              className="h-16 w-auto self-start md:h-20 lg:h-24"
            />
            <p className="max-w-md font-body text-sm font-normal leading-normal text-code-text">
              {site.positioning}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 lg:col-span-7">
            <FooterGroup
              title="Pages"
              label="Footer pages"
              links={footerLinks.pages}
            />
            <FooterGroup
              title="Services"
              label="Footer services"
              links={footerLinks.services}
            />
            <div className="flex flex-col gap-3">
              <h2 className={headingClass}>Contact</h2>
              <address className="flex flex-col not-italic">
                <a href={`mailto:${site.email}`} className={linkClass}>
                  <Mail
                    aria-hidden="true"
                    strokeWidth={2}
                    className="mr-2 size-4 shrink-0"
                  />
                  {site.email}
                </a>
                <a href={phoneHref} className={linkClass}>
                  <Phone
                    aria-hidden="true"
                    strokeWidth={2}
                    className="mr-2 size-4 shrink-0"
                  />
                  {site.phone}
                </a>
                <p className="inline-flex min-h-8 items-center font-body text-sm font-normal leading-normal text-code-text">
                  <MapPin
                    aria-hidden="true"
                    strokeWidth={2}
                    className="mr-2 size-4 shrink-0"
                  />
                  {site.location}
                </p>
              </address>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-code-border pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <p className={metaClass}>
              © {site.copyrightYear} {site.name}. All rights reserved.
            </p>
            <Link
              href={privacyLink.href}
              className={cn(
                metaClass,
                "inline-flex min-h-8 items-center transition-colors duration-300 ease-smooth hover:text-code-accent focus-visible:outline-white",
              )}
            >
              {privacyLink.label}
            </Link>
          </div>
          <p className={cn(metaClass, "inline-flex items-center gap-2")}>
            <Coffee aria-hidden="true" strokeWidth={2} className="size-4 shrink-0" />
            Built with {site.builtWith.join(", ")} and a lot of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
}