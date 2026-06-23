import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trending Australian Music | FUSEMUSIC",
  description: "The hottest tracks trending across the Australian music scene right now. Updated daily.",
};

import { TrackCard } from "@/components/TrackCard";
import { Footer } from "@/components/Footer";
import { trendingTracks } from "@/data/tracks";

export default function TrendingPage() {
  return (
    <div className="pt-[50px]">
      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-2">Trending playlists</h1>
        <p className="text-sm text-sc-text-secondary mb-8">
          The hottest tracks and playlists on FUSEMUSIC right now
        </p>

        {/* FUSEMUSIC Widget Embeds */}
        <div className="space-y-4 mb-12">
          <h2 className="text-lg font-semibold mb-4">Top tracks this week</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fflume%2Fnever-be-like-you&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
              "https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Frufusdusol%2Fsets%2Finnerbloom&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
              "https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Ffishm8%2Flosing-it&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
              "https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fdomdolla%2Fbe-right-there&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
            ].map((src, i) => (
              <div key={i} className="bg-sc-bg-secondary rounded-lg overflow-hidden border border-sc-border">
                <iframe
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={src}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* More Tracks */}
        <h2 className="text-lg font-semibold mb-4">More trending tracks</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {trendingTracks.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
