import { Aldrich, JetBrains_Mono, Poppins, Space_Grotesk } from "next/font/google";

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-poppins",
});

export const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const aldrich = Aldrich({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-aldrich",
});

export const fontVariables = [
  spaceGrotesk.variable,
  poppins.variable,
  jetBrainsMono.variable,
  aldrich.variable,
].join(" ");