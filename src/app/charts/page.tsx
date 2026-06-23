import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Australian Top 50 Charts | FUSEMUSIC",
  description: "The most played Australian tracks this week. Top 50 chart featuring Flume, Fisher, RÜFÜS DU SOL, and more.",
};

import Link from "next/link";
import { Footer } from "@/components/Footer";

const chartData = [
  { rank: 1, title: "Never Be Like You", artist: "Flume ft. Kai", scId: "242537124", change: "—", weeks: 18 },
  { rank: 2, title: "Losing It", artist: "Fisher", scId: "427298251", change: "↑2", weeks: 24 },
  { rank: 3, title: "Innerbloom", artist: "RÜFÜS DU SOL", scId: "180910056", change: "↓1", weeks: 32 },
  { rank: 4, title: "HIGHEST IN THE ROOM", artist: "The Kid LAROI", scId: "707512434", change: "↑5", weeks: 12 },
  { rank: 5, title: "The Less I Know The Better", artist: "Tame Impala", scId: "220954969", change: "↓1", weeks: 28 },
  { rank: 6, title: "Be Right There", artist: "Dom Dolla", scId: "199313556", change: "↑3", weeks: 15 },
  { rank: 7, title: "Final Form", artist: "Sampa the Great", scId: "615217643", change: "—", weeks: 10 },
  { rank: 8, title: "Hyperreal", artist: "Flume ft. Kučka", scId: "315254426", change: "↓2", weeks: 20 },
  { rank: 9, title: "Ghost", artist: "Mallrat", scId: "382585646", change: "↑4", weeks: 8 },
  { rank: 10, title: "On My Knees", artist: "RÜFÜS DU SOL", scId: "891136132", change: "NEW", weeks: 1 },
];

export default function ChartsPage() {
  return (
    <div className="pt-[50px]">
      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold mb-1">Australian Top 50</h1>
            <p className="text-sm text-sc-text-secondary">The most played Australian tracks this week</p>
          </div>
          <span className="text-xs text-sc-text-tertiary">Updated: Today</span>
        </div>

        {/* Top 3 — large cards with SC widget */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {chartData.slice(0, 3).map((track) => (
            <div key={track.rank} className="bg-sc-bg-secondary rounded-lg overflow-hidden border border-sc-border">
              <div className="p-4 flex items-center gap-3">
                <img src={`/images/sc-assets/artworks/album-0${track.rank}.svg`} alt="" className="w-[60px] h-[60px] rounded object-cover flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <span className="text-lg font-extrabold text-sc-text-tertiary">#{track.rank}</span>
                  <p className="text-sm font-semibold text-sc-text-primary truncate">{track.title}</p>
                  <p className="text-xs text-sc-text-secondary">{track.artist}</p>
                  <p className="text-[10px] text-sc-text-tertiary mt-1">
                    {track.change} · {track.weeks} weeks
                  </p>
                </div>
              </div>
              <iframe
                width="100%"
                height="120"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/flume/never-be-like-you&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true&buying=false&sharing=false"
                className="w-full"
              />
            </div>
          ))}
        </div>

        {/* Remaining chart */}
        <div className="bg-sc-bg-secondary rounded-lg border border-sc-border overflow-hidden">
          <div className="grid grid-cols-[50px_1fr_80px_60px] gap-3 px-4 py-2 text-[10px] font-semibold uppercase text-sc-text-tertiary border-b border-sc-border">
            <span>#</span><span>Track</span><span>Change</span><span>Weeks</span>
          </div>
          {chartData.map((track) => (
            <div
              key={track.rank}
              className="grid grid-cols-[50px_1fr_80px_60px] gap-3 px-4 py-3 items-center border-b border-sc-border last:border-0 hover:bg-sc-bg-hover transition-colors cursor-pointer"
            >
              <span className="text-sm font-bold text-sc-text-tertiary">{track.rank}</span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-sc-text-primary truncate">{track.title}</p>
                <p className="text-xs text-sc-text-secondary truncate">{track.artist}</p>
              </div>
              <span className={`text-xs font-medium ${track.change === "NEW" ? "text-sc-accent" : track.change.startsWith("↑") ? "text-green-500" : track.change === "—" ? "text-sc-text-tertiary" : "text-red-500"}`}>
                {track.change}
              </span>
              <span className="text-xs text-sc-text-tertiary">{track.weeks}</span>
            </div>
          ))}
        </div>

        {/* Full chart embed */}
        <div className="mt-12">
          <h2 className="text-lg font-semibold mb-4">Listen to the full chart</h2>
          <div className="bg-sc-bg-secondary rounded-lg overflow-hidden border border-sc-border">
            <iframe
              width="100%"
              height="450"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/flume/sets/ skin&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              className="w-full"
            />
          </div>
          <p className="text-xs text-sc-text-secondary mt-2 text-center">
            Streaming via SoundCloud · Updated weekly
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
