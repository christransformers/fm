import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Feed | FUSEMUSIC",
  description: "Your personalised Australian music feed. Trending tracks, new releases, and artists you follow.",
};

import { TrackCard } from "@/components/TrackCard";
import { Footer } from "@/components/Footer";
import { trendingTracks } from "@/data/tracks";
import Link from "next/link";

export default function FeedPage() {
  return (
    <div className="pt-[50px]">
      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Your Feed</h1>
          <div className="flex gap-2">
            <Link href="/discover" className="sc-btn sc-btn-outline text-sm">Discover</Link>
            <Link href="/library" className="sc-btn sc-btn-outline text-sm">Library</Link>
          </div>
        </div>

        {/* Friend Activity */}
        <div className="mb-8 bg-sc-bg-secondary rounded-lg p-4 border border-sc-border">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-sc-text-tertiary mb-3">Friends Activity</h3>
          <div className="space-y-3">
            {[
              { user: "emmaw", name: "Emma W.", action: "liked", track: "Never Be Like You", artist: "Flume" },
              { user: "jackt", name: "Jack T.", action: "reposted", track: "Innerbloom", artist: "RÜFÜS DU SOL" },
              { user: "oliviab", name: "Olivia B.", action: "listened to", track: "Losing It", artist: "Fisher" },
            ].map((act) => (
              <div key={act.user} className="flex items-center gap-3">
                <img src={`/images/sc-assets/users/${act.user}.svg`} alt="" className="w-[32px] h-[32px] rounded-full" />
                <p className="text-xs text-sc-text-secondary">
                  <span className="font-medium text-sc-text-primary">{act.name}</span> {act.action}{" "}
                  <span className="font-medium text-sc-text-primary">{act.track}</span>
                  <span className="text-sc-text-tertiary"> by {act.artist}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-sc-border mb-6">
          {["Trending", "New & hot", "Charts", "Music", "Audio"].map((tab) => (
            <button
              key={tab}
              className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                tab === "Trending"
                  ? "border-sc-accent text-sc-text-primary"
                  : "border-transparent text-sc-text-secondary hover:text-sc-text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Track Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {trendingTracks.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="sc-btn sc-btn-outline text-sm">
            Load more tracks
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
