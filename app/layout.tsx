"use client";

import "./globals.css";
import Menu from "@/components/menu/Menu";
import Loader from "./loader";
import RouteLoader from "@/components/RouteLoader";
import { useState, useEffect } from "react";
import { Geist, Geist_Mono, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2200); // optional: fallback if GSAP doesn't call onFinish

    return () => clearTimeout(timeout);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${inter.className} ${geistSans.variable} ${geistMono.variable}`}
      >
        {loading ? (
          <Loader onFinish={() => setLoading(false)} />
        ) : (
          <RouteLoader>
            <Menu />
            {children}
          </RouteLoader>
        )}
      </body>
    </html>
  );
}
