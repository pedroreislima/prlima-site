import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Ubuntu_Sans,
  Ubuntu_Mono,
  Atkinson_Hyperlegible,
} from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";

const ubuntuSans = Ubuntu_Sans({
  variable: "--font-ubuntu-sans",
  subsets: ["latin"],
});

const ubuntuMono = Ubuntu_Mono({
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
  weight: "400",
});

const atkison = Atkinson_Hyperlegible({
  variable: "--font-atkison",
  subsets: ["latin"],
  weight: "400",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pedro Reis Lima",
  description: "Personal website of Pedro Reis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={atkison.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
