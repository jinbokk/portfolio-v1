import { Roboto_Mono, Inconsolata, Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  adjustFontFallback: true,
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  adjustFontFallback: true,
});

export const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
  adjustFontFallback: true,
});
