"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Footer } from "@/components/Footer";

const chartData = [
  { rank: 1, title: "Never Be Like You", artist: "Flume ft. Kai", scUrl: "https://soundcloud.com/flume/never-be-like-you", thumb: "flume-nbly", change: "—", weeks: 18 },
  { rank: 2, title: "Losing It", artist: "Fisher", scUrl: "https://soundcloud.com/fishm8/losing-it", thumb: "fisher-losing", change: "↑2", weeks: 24 },
  { rank: 3, title: "Innerbloom", artist: "RÜFÜS DU SOL", scUrl: "https://soundcloud.com/rufusdusol/innerbloom", thumb: "rufus-innerbloom", change: "↓1", weeks: 32 },
  { rank: 4, title: "HIGHEST IN THE ROOM", artist: "The Kid LAROI", scUrl: "https://soundcloud.com/thekidlaroi/highest-in-the-room", thumb: "laroi-highest", change: "↑5", weeks: 12 },
  { rank: 5, title: "The Less I Know The Better", artist: "Tame Impala", scUrl: "https://soundcloud.com/tameimpala/the-less-i-know-the-better", thumb: "tame-lessiknow", change: "↓1", weeks: 28 },
  { rank: 6, title: "Be Right There", artist: "Dom Dolla", scUrl: "https://soundcloud.com/domdolla/be-right-there", thumb: "domdolla-brt", change: "↑3", weeks: 15 },
  { rank: 7, title: "Final Form", artist: "Sampa the Great", scUrl: "https://soundcloud.com/sampathegreat/final-form", thumb: "sampa-finalform", change: "—", weeks: 10 },
  { rank: 8, title: "Hyperreal", artist: "Flume ft. Kučka", scUrl: "https://soundcloud.com/flume/hyperreal", thumb: "flume-hyperreal", change: "↓2", weeks: 20 },
  { rank: 9, title: "Ghost", artist: "Mallrat", scUrl: "https://soundcloud.com/mallrat/ghost", thumb: "mallrat-ghost", change: "↑4", weeks: 8 },
  { rank: 10, title: "On My Knees", artist: "RÜFÜS DU SOL", scUrl: "https://soundcloud.com/rufusdusol/on-my-knees", thumb: "rufus-onmyknees", change: "NEW", weeks: 1 },
];

export default function ChartsPage() {
  const [activeTrack, setActiveTrack] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const play = (url: string) => {
    const encoded = encodeURIComponent(url);
    if (iframeRef.current) {
      iframeRef.current.src = `https://w.soundcloud.com/player/?url=${encoded}&color=%23ff5500&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true&buying=false&sharing=false`;
    }
    setActiveTrack(url);
  };

  const stop = () => {
    if (iframeRef.current) iframeRef.current.src = "";
    setActiveTrack(null);
  };

  const toggle = (url: string) => {
    if (activeTrack === url) stop(); else play(url);
  };

  return (
    <div className="pt-[50px]">
      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">Australian Top 50</h1>
            <p className="text-sm text-sc-text-secondary">The most played Australian tracks this week</p>
          </div>
          <span className="text-xs text-sc-text-tertiary">Updated: Today</span>
        </div>

        {/* Now Playing Bar */}
        {activeTrack && (
          <div className="sticky top-[50px] z-30 bg-sc-bg-secondary border border-sc-accent rounded-lg p-3 mb-6 shadow-lg flex items-center justify-between">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-1.5 h-10 bg-sc-accent rounded-full animate-pulse" />
              <div>
                <p className="text-sm font-semibold text-sc-text-primary">
                  {chartData.find(t => t.scUrl === activeTrack)?.title || ""}
                </p>
                <p className="text-xs text-sc-text-secondary">
                  {chartData.find(t => t.scUrl === activeTrack)?.artist || ""}
                </p>
              </div>
            </div>
            <button onClick={stop} className="text-sc-text-secondary hover:text-sc-accent p-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
            </button>
          </div>
        )}

        {/* Hidden shared iframe */}
        <div className="hidden">
          <iframe ref={iframeRef} title="SC Chart Player" allow="autoplay" />
        </div>

        {/* Top 3 — large cards with thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {chartData.slice(0, 3).map((track) => {
            const isActive = activeTrack === track.scUrl;
            return (
              <button
                key={track.rank}
                onClick={() => toggle(track.scUrl)}
                className={`bg-sc-bg-secondary rounded-lg overflow-hidden border text-left w-full transition-all ${
                  isActive ? "border-sc-accent ring-1 ring-sc-accent" : "border-sc-border hover:border-sc-text-secondary"
                }`}
              >
                <div className="relative pt-[56.25%] bg-sc-bg-tertiary">
                  <img
                    src={`/images/sc-assets/thumbnails/${track.thumb}.svg`}
                    alt={track.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 flex items-end p-4 ${
                    isActive ? "bg-gradient-to-t from-sc-accent/60" : "bg-gradient-to-t from-black/60"
                  }`}>
                    <div>
                      <span className="text-3xl font-extrabold text-white/90">#{track.rank}</span>
                      <p className="text-sm font-semibold text-white truncate">{track.title}</p>
                      <p className="text-xs text-white/70">{track.artist}</p>
                    </div>
                  </div>
                  {isActive && (
                    <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-sc-accent flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                    </div>
                  )}
                </div>
                <div className="p-3 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-sc-text-tertiary">
                      {track.change} · {track.weeks} weeks
                    </p>
                  </div>
                  {!isActive && (
                    <div className="w-6 h-6 rounded-full bg-sc-accent/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-sc-accent ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Full Chart Table with Thumbnails */}
        <div className="bg-sc-bg-secondary rounded-lg border border-sc-border overflow-hidden">
          <div className="grid grid-cols-[40px_48px_1fr_80px_60px] gap-2 px-4 py-2 text-[10px] font-semibold uppercase text-sc-text-tertiary border-b border-sc-border">
            <span></span><span></span><span>Track</span><span>Change</span><span>Weeks</span>
          </div>
          {chartData.map((track) => {
            const isActive = activeTrack === track.scUrl;
            return (
              <button
                key={track.rank}
                onClick={() => toggle(track.scUrl)}
                className={`grid grid-cols-[40px_48px_1fr_80px_60px] gap-2 px-4 py-2 items-center border-b border-sc-border last:border-0 hover:bg-sc-bg-hover transition-colors w-full text-left cursor-pointer ${
                  isActive ? "bg-sc-bg-tertiary" : ""
                }`}
              >
                <span className={`text-sm font-bold ${isActive ? "text-sc-accent" : "text-sc-text-tertiary"}`}>{track.rank}</span>
                <img
                  src={`/images/sc-assets/thumbnails/${track.thumb}.svg`}
                  alt=""
                  className="w-[36px] h-[36px] rounded object-cover flex-shrink-0"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <p className={`text-sm font-medium truncate ${isActive ? "text-sc-accent" : "text-sc-text-primary"}`}>{track.title}</p>
                  <p className="text-xs text-sc-text-secondary truncate">{track.artist}</p>
                </div>
                <span className={`text-xs font-medium ${track.change === "NEW" ? "text-sc-accent" : track.change.startsWith("↑") ? "text-green-500" : track.change === "—" ? "text-sc-text-tertiary" : "text-red-500"}`}>
                  {track.change}
                </span>
                <span className="text-xs text-sc-text-tertiary">{track.weeks}</span>
              </button>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
