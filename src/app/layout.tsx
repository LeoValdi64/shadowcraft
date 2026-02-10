import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShadowCraft - CSS Box Shadow Generator",
  description: "Create beautiful CSS box shadows visually with ShadowCraft. An intuitive tool for generating box-shadow CSS with multiple layers, live preview, presets, and one-click copy.",
  keywords: ["CSS", "box-shadow", "generator", "shadow", "design tool", "web development", "CSS generator"],
  authors: [{ name: "ShadowCraft" }],
  openGraph: {
    title: "ShadowCraft - CSS Box Shadow Generator",
    description: "Create beautiful CSS box shadows visually with an intuitive editor. Add multiple layers, adjust properties, and copy the generated CSS.",
    type: "website",
    locale: "en_US",
    siteName: "ShadowCraft",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShadowCraft - CSS Box Shadow Generator",
    description: "Create beautiful CSS box shadows visually with an intuitive editor. Add multiple layers, adjust properties, and copy the generated CSS.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
