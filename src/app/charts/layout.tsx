import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Australian Top 50 Charts | FUSEMUSIC",
  description: "The most played Australian tracks this week. Top 50 chart featuring Flume, Fisher, RÜFÜS DU SOL, The Kid LAROI, and more.",
};

export default function ChartsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
