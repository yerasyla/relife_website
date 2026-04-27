import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig, siteUrl } from "@/lib/site-config";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f12" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const base = siteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: {
    default: siteConfig.metaTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.metaTitle,
    description: siteConfig.description,
    url: base,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/brand/relife-logo.png",
        width: 1024,
        height: 1024,
        alt: `${siteConfig.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.metaTitle,
    description: siteConfig.description,
    images: ["/brand/relife-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className={plusJakarta.className}>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
