import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader, SiteFooter } from "@/components/site";

export const metadata: Metadata = {
  title: "GreenLoop | Waste, Reimagined",
  description: "Reliable waste collection, responsible recycling and sustainable disposal for homes and businesses.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}