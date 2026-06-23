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
  title: "FUSEMUSIC - Australian Music. Discover. Stream. Connect.",
  description: "Discover Australia's best music on FUSEMUSIC. Stream tracks from Flume, RÜFÜS DU SOL, Tame Impala, and more. The home of Australian sound.",
  icons: {
    icon: "https://raw.githubusercontent.com/christransformers/fm/main/logo-small.png",
  },
  other: {
    "link": '<link rel="preload" as="image" href="https://raw.githubusercontent.com/christransformers/fm/main/logo-big.png">',
  },
  openGraph: {
    title: "FUSEMUSIC",
    description: "Australian Music. Discover. Stream. Connect.",
    siteName: "FUSEMUSIC",
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
