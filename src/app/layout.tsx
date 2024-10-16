
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Akkil M G",
    "Akkil MG",
    "Frontend Developer",
    "Backend Developer",
    "API Developer",
    "FARM Stack Developer",
    "MERN Stack Developer",
    "Automation Developer",
    "Akkil",
  ],
  creator: "AkkilMG",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@AkkilMG",
  },
  authors: [
    {
      name: "Akkil M G",
      url: siteConfig.url,
    },
  ],
  icons: {
    icon: "/site/favicon.ico",
    shortcut: "/site/favicon-16x16.png",
    apple: "/site/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        {/* External CSS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Inter:wght@100;900&family=Poppins&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
    
  );
}

