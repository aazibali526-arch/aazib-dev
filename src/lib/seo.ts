import type { Metadata } from "next";
import { site } from "@/data/site";

/** Parses NEXT_PUBLIC_SITE_URL safely so malformed env values never crash startup. */
function parseSiteUrl(rawUrl?: string): URL | undefined {
  const trimmed = rawUrl?.trim();
  if (!trimmed) return undefined;

  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return parsed;
    }
    return undefined;
  } catch {
    return undefined;
  }
}

const siteUrl = parseSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const defaultMetadata: Metadata = {
  ...(siteUrl ? { metadataBase: siteUrl } : {}),
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`,
  },
};
