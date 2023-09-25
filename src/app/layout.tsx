import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tequiconf",
  description: "Os Melhores profissionais de tecnologia reunidos em curitiba, com uma missão: Acelerar sua carreira!",
  openGraph: {
    title: "Tequiconf",
    description: "Os Melhores profissionais de tecnologia reunidos em curitiba, com uma missão: Acelerar sua carreira!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contadev",
    description: "Contadev é uma contabilidade pensada 100% pra você que é dev",
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
