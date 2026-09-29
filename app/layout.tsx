import React from "react";
import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import WhatsAppButton from "@/components/whatsapp-button";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
	title: {
		default: "شرف للسفر والسياحة | Sharraf Travel & Tourism",
		template: "%s | شرف للسفر والسياحة",
	},
	description:
		"شركة شرف للسفر والسياحة - بكجات سياحية لروسيا، حجوزات فنادق، جولات سياحية، استقبال وتوديع",
	keywords: ["سياحة روسيا", "شرف", "سفر", "حجوزات فنادق", "جولات سياحية", "شرف"],
	icons: {
		icon: [
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
		],
		apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
		other: [
			{
				rel: "android-chrome",
				url: "/android-chrome-192x192.png",
			},
			{
				rel: "android-chrome",
				url: "/android-chrome-512x512.png",
			},
		],
	},
	manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#dc2626",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
