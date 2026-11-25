import type { Metadata } from "next";
import { site } from "@/data/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const defaultMetadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`,
  },
};