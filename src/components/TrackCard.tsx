"use client";

import { useState } from "react";

export interface Track {
  id: string;
  title: string;
  artist: string;
  artistUrl: string;
  artwork: string;
  scUrl: string;
  plays: string;
}

export function TrackCard({ track }: { track: Track }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="sc-card group overflow-hidden">
      {/* Click to toggle inline player */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="w-full text-left cursor-pointer"
        aria-label={isPlaying ? `Stop playing ${track.title}` : `Play ${track.title}`}
      >
        {/* Artwork */}
        <div className="relative aspect-square overflow-hidden bg-sc-bg-tertiary">
          <img
            src={track.artwork}
            alt={track.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
          {/* Play button */}
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity ${isPlaying ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
            <div className={`rounded-full flex items-center justify-center shadow-lg transform transition-all ${isPlaying ? "w-10 h-10 bg-sc-text-primary scale-100" : "w-12 h-12 bg-sc-accent scale-90 group-hover:scale-100"}`}>
              {isPlaying ? (
                <svg className="w-4 h-4 text-sc-bg-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </div>
          </div>
          {/* Play count */}
          <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-[10px] font-medium text-white px-2 py-0.5 rounded">
            ▶ {track.plays}
          </div>
        </div>
      </button>

      {/* Track info */}
      <div className="p-3">
        <p className="text-sm font-medium text-sc-text-primary truncate">
          {track.title}
        </p>
        <p className="text-xs text-sc-text-secondary truncate mt-0.5">
          {track.artist}
        </p>
      </div>

      {/* Inline SC Player — appears on click, stays on our site */}
      {isPlaying && (
        <div className="px-2 pb-2">
          <div className="bg-sc-bg-tertiary rounded overflow-hidden border border-sc-border">
            <iframe
              width="100%"
              height="120"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(track.scUrl)}&color=%23ff5500&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true&buying=false&sharing=false`}
              className="w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
