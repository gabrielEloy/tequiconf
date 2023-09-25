import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tequiconf",
  description:
    "Os Melhores profissionais de tecnologia reunidos em curitiba, com uma missão: Acelerar sua carreira!",
  openGraph: {
    title: "Tequiconf",
    description:
      "Os Melhores profissionais de tecnologia reunidos em curitiba, com uma missão: Acelerar sua carreira!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tequiconf",
    description: "Os Melhores profissionais de tecnologia reunidos em curitiba, com uma missão: Acelerar sua carreira!",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
