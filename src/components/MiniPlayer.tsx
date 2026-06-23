"use client";

import { useState } from "react";

export function MiniPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-sc-bg-secondary border-t border-sc-border h-[56px]">
      <div className="max-w-[1440px] mx-auto px-4 h-full flex items-center gap-4">
        {/* Track info */}
        <div className="flex items-center gap-3 min-w-[200px] max-w-[280px]">
          <div className="w-[40px] h-[40px] rounded bg-sc-gradient-hero flex-shrink-0 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-xs font-medium text-sc-text-primary truncate">Select a track to play</p>
            <p className="text-[11px] text-sc-text-tertiary truncate">FUSEMUSIC Player</p>
          </div>
          <button className="text-sc-text-secondary hover:text-sc-accent transition-colors flex-shrink-0">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
        </div>

        {/* Playback controls */}
        <div className="flex-1 flex flex-col items-center gap-1 max-w-[600px] mx-auto">
          <div className="flex items-center gap-4">
            <button className="text-sc-text-secondary hover:text-sc-text-primary transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
              </svg>
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-8 h-8 rounded-full bg-sc-text-primary flex items-center justify-center hover:scale-105 transition-transform"
            >
              {isPlaying ? (
                <svg className="w-4 h-4 text-sc-bg-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                </svg>
              ) : (
                <svg className="w-4 h-4 text-sc-bg-primary ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
            <button className="text-sc-text-secondary hover:text-sc-text-primary transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
              </svg>
            </button>
            <button className="text-sc-text-secondary hover:text-sc-text-primary transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 7h10v2H7zm0 4h10v2H7zm0 4h7v2H7z"/>
              </svg>
            </button>
          </div>
          <div className="w-full flex items-center gap-2">
            <span className="text-[10px] text-sc-text-tertiary w-8 text-right">0:00</span>
            <div className="flex-1 h-1 bg-sc-bg-elevated rounded-full overflow-hidden">
              <div className="h-full w-0 bg-sc-accent rounded-full transition-all" />
            </div>
            <span className="text-[10px] text-sc-text-tertiary w-8">3:42</span>
          </div>
        </div>

        {/* Right controls */}
        <div className="hidden md:flex items-center gap-3 min-w-[200px] justify-end">
          <button className="text-sc-text-secondary hover:text-sc-text-primary transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-[80px] h-1 accent-sc-accent"
            />
            <button className="text-sc-text-secondary hover:text-sc-text-primary transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 12c0-4.42-3.58-8-8-8v16c4.42 0 8-3.58 8-8z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
