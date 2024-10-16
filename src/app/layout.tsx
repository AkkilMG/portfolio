
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akkil M G | Portfolio",
  description: "This is a portfolio website of Akkil M G"
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

