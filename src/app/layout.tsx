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

const SITE_URL = "https://www.juanisanti.com/";
const WHATSAPP_PREVIEW_IMAGE = "https://9ohczhtqjcehesjt.public.blob.vercel-storage.com/wapp-honda-4grnwD9PymmlZ4p6mqdW6lNW692Suk.jpg";

export const metadata: Metadata = {
  title: "Juanis & Santi - Save the Date",
  description: "¡Guarda la fecha! 06 · 12 · 2025 | Honda, Tolima",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Juanis & Santi - Save the Date",
    description: "¡Guarda la fecha! 06 · 12 · 2025 | Honda, Tolima",
    images: [
      {
        url: WHATSAPP_PREVIEW_IMAGE,
        width: 1200,
        height: 630,
        alt: "Save the Date - Juanis & Santi"
      }
    ],
    locale: "es_CO",
    type: "website",
    siteName: "Juanis & Santi - Boda",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juanis & Santi - Save the Date",
    description: "¡Guarda la fecha! 06 · 12 · 2025 | Honda, Tolima",
    images: [WHATSAPP_PREVIEW_IMAGE],
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
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_CO" />
        <meta property="og:site_name" content="Juanis & Santi - Boda" />
        <meta property="og:title" content="Save the Date - 06 · 12 · 2025" />
        <meta property="og:description" content="¡Guarda la fecha! Nos casamos en Honda, Tolima" />
        <meta property="og:image" content={WHATSAPP_PREVIEW_IMAGE} />
        <meta property="og:image:secure_url" content={WHATSAPP_PREVIEW_IMAGE} />
        <meta property="og:image:alt" content="Juanis & Santi - Save the Date" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${macondo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
