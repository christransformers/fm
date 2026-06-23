import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { MiniPlayer } from "@/components/MiniPlayer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SoundCloud - Stream and listen to music online for free",
  description: "Discover and stream music online for free with SoundCloud. The world's largest music library with over 4X the catalog of every major platform.",
  icons: {
    icon: "https://a-v2.sndcdn.com/assets/images/sc-icons/favicon-2cadd14bdb.ico",
  },
  openGraph: {
    title: "SoundCloud",
    description: "Stream and listen to music online for free",
    siteName: "SoundCloud",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased bg-sc-bg-primary text-sc-text-primary min-h-screen`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <MiniPlayer />
      </body>
    </html>
  );
}
