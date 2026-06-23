"use client";

import { useState, useRef, useCallback } from "react";

interface SCTrack {
  title: string;
  artist: string;
  scUrl: string;
  thumbSlug?: string;
}

interface YTVideo {
  title: string;
  artist: string;
  ytId: string;
}

const thumbMap: Record<string, string> = {
  "flume/never-be-like-you": "flume-nbly",
  "rufusdusol/innerbloom": "rufus-innerbloom",
  "fishm8/losing-it": "fisher-losing",
  "domdolla/be-right-there": "domdolla-brt",
  "tameimpala/the-less-i-know-the-better": "tame-lessiknow",
  "thekidlaroi/stay": "laroi-stay",
  "flume/hyperreal": "flume-hyperreal",
  "rufusdusol/on-my-knees": "rufus-onmyknees",
  "rufusdusol/alive": "rufus-alive",
  "flume/say-it": "flume-sayit",
  "tameimpala/let-it-happen": "tame-letithappen",
};

function getThumbSlug(scUrl: string): string {
  for (const [key, slug] of Object.entries(thumbMap)) {
    if (scUrl.includes(key)) return slug;
  }
  return "flume-nbly";
}

export function UnifiedPlayers({ scTracks, ytVideos }: { scTracks: SCTrack[]; ytVideos: YTVideo[] }) {
  const [activeType, setActiveType] = useState<"sc" | "yt" | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scIframeRef = useRef<HTMLIFrameElement>(null);
  const ytIframeRef = useRef<HTMLIFrameElement>(null);

  const stopAll = useCallback(() => {
    if (scIframeRef.current) scIframeRef.current.src = "";
    if (ytIframeRef.current) ytIframeRef.current.src = "";
    setActiveType(null);
    setActiveIndex(null);
  }, []);

  const playSC = useCallback((index: number) => {
    if (ytIframeRef.current) ytIframeRef.current.src = "";
    const encoded = encodeURIComponent(scTracks[index].scUrl);
    if (scIframeRef.current) {
      scIframeRef.current.src = `https://w.soundcloud.com/player/?url=${encoded}&color=%23ff5500&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true&buying=false&sharing=false`;
    }
    setActiveType("sc");
    setActiveIndex(index);
  }, [scTracks]);

  const playYT = useCallback((index: number) => {
    if (scIframeRef.current) scIframeRef.current.src = "";
    if (ytIframeRef.current) {
      ytIframeRef.current.src = `https://www.youtube.com/embed/${ytVideos[index].ytId}?autoplay=1&rel=0`;
    }
    setActiveType("yt");
    setActiveIndex(index);
  }, [ytVideos]);

  const isSCPlaying = (index: number) => activeType === "sc" && activeIndex === index;
  const isYTPlaying = (index: number) => activeType === "yt" && activeIndex === index;

  return (
    <div className="space-y-12">
      {/* Hidden shared iframes */}
      <div className="hidden">
        <iframe ref={scIframeRef} title="SC Player" allow="autoplay" />
        <iframe ref={ytIframeRef} title="YT Player" allow="autoplay; encrypted-media" allowFullScreen />
      </div>

      {/* Now Playing Bar */}
      {activeType && activeIndex !== null && (
        <div className="fixed bottom-[60px] left-0 right-0 z-50 bg-sc-bg-secondary border-t border-sc-accent shadow-2xl">
          <div className="max-w-[1440px] mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-1 h-12 bg-sc-accent rounded-full animate-pulse" />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-sc-text-primary truncate">
                  {activeType === "sc" ? scTracks[activeIndex].title : ytVideos[activeIndex].title}
                </p>
                <p className="text-xs text-sc-text-secondary truncate">
                  {activeType === "sc" ? scTracks[activeIndex].artist : ytVideos[activeIndex].artist}
                </p>
              </div>
            </div>
            <button onClick={stopAll} className="text-sc-text-secondary hover:text-sc-accent transition-colors p-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
            </button>
          </div>
        </div>
      )}

      {/* SoundCloud Tracks — ALL with thumbnails */}
      <div>
        <h3 className="text-lg font-bold text-sc-text-primary mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-sc-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
          Featured Australian Tracks
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {scTracks.map((track, i) => {
            const slug = track.thumbSlug || getThumbSlug(track.scUrl);
            return (
              <button
                key={track.scUrl}
                onClick={() => isSCPlaying(i) ? stopAll() : playSC(i)}
                className={`flex items-center gap-3 p-2 rounded-lg border text-left transition-all w-full ${
                  isSCPlaying(i) 
                    ? "border-sc-accent bg-sc-bg-tertiary ring-1 ring-sc-accent" 
                    : "border-sc-border bg-sc-bg-secondary hover:border-sc-text-secondary"
                }`}
              >
                {/* Track Thumbnail */}
                <div className="relative w-[56px] h-[56px] rounded overflow-hidden flex-shrink-0 bg-sc-bg-tertiary">
                  <img
                    src={`/images/sc-assets/thumbnails/${slug}.svg`}
                    alt={track.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 flex items-center justify-center transition-colors ${
                    isSCPlaying(i) ? "bg-black/30" : "bg-black/20 hover:bg-black/10"
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      isSCPlaying(i) ? "bg-sc-accent" : "bg-black/40"
                    }`}>
                      {isSCPlaying(i) ? (
                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                      ) : (
                        <svg className="w-3.5 h-3.5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      )}
                    </div>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-sc-text-primary truncate">{track.title}</p>
                  <p className="text-xs text-sc-text-secondary truncate">{track.artist}</p>
                </div>
                {isSCPlaying(i) && (
                  <span className="text-[10px] text-sc-accent font-bold flex-shrink-0">NOW</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* YouTube Videos — ALL thumbnails visible */}
      <div>
        <h3 className="text-lg font-bold text-sc-text-primary mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
          Australian Music Videos
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {ytVideos.map((vid, i) => (
            <button
              key={vid.ytId}
              onClick={() => isYTPlaying(i) ? stopAll() : playYT(i)}
              className={`relative rounded-lg overflow-hidden border transition-all text-left w-full ${
                isYTPlaying(i) 
                  ? "border-sc-accent ring-2 ring-sc-accent" 
                  : "border-sc-border hover:border-sc-text-secondary"
              }`}
            >
              <div className="relative pt-[56.25%] bg-sc-bg-tertiary">
                <img
                  src={`https://img.youtube.com/vi/${vid.ytId}/mqdefault.jpg`}
                  alt={vid.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className={`absolute inset-0 flex items-center justify-center transition-colors ${
                  isYTPlaying(i) ? "bg-black/30" : "bg-black/40 hover:bg-black/20"
                }`}>
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                    {isYTPlaying(i) ? (
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                    ) : (
                      <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-2">
                <p className="text-xs font-medium text-sc-text-primary truncate">{vid.title}</p>
                <p className="text-[10px] text-sc-text-secondary truncate">{vid.artist}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
