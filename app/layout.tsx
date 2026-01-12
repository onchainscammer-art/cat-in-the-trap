import type { Metadata } from "next";
import { Geist, Geist_Mono, Patrick_Hand, Permanent_Marker, Merriweather } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const patrickHand = Patrick_Hand({
  weight: "400",
  variable: "--font-hand",
  subsets: ["latin"],
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  variable: "--font-marker",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Cat in the Trap | Memecoin",
  description: "Real G's move in silence. The darkest Dr. Seuss story never told.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${patrickHand.variable} ${permanentMarker.variable} ${merriweather.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
