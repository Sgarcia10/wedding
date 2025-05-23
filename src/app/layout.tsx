import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display, Macondo } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const macondo = Macondo({
  variable: "--font-macondo",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juanis & Santi - Save the Date",
  description: "¡Guarda la fecha! 06 · 12 · 2025 | Honda, Tolima",
  openGraph: {
    title: "Juanis & Santi - Save the Date",
    description: "¡Guarda la fecha! 06 · 12 · 2025 | Honda, Tolima",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Save the Date - Juanis & Santi"
      }
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juanis & Santi - Save the Date",
    description: "¡Guarda la fecha! 06 · 12 · 2025 | Honda, Tolima",
    images: ["/api/og"],
  },
  icons: {
    icon: [
      { url: "/heart.png", type: "image/png" }
    ],
    apple: [
      { url: "/heart.png" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_CO" />
        {/* WhatsApp specific meta tags */}
        <meta property="og:site_name" content="Juanis & Santi - Boda" />
        <meta property="og:title" content="Save the Date - 06 · 12 · 2025" />
        <meta property="og:description" content="¡Guarda la fecha! Nos casamos en Honda, Tolima" />
        <meta property="og:image" content="/api/og" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${macondo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
