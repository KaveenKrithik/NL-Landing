import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Lumiere Foundation - Lighting Lives Through Education, Compassion & Service",
  description:
    "Lumiere Foundation is a charitable and educational trust committed to empowering individuals and communities through inclusive education, healthcare access, social welfare, and sustainable development initiatives.",
  icons: {
    icon: "/lumiere-logo.png",
    apple: "/lumiere-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
