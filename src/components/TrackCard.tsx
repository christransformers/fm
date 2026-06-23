import Link from "next/link";

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
  return (
    <Link
      href={track.scUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="sc-card group block overflow-hidden"
    >
      {/* Artwork — real image hosted in repo */}
      <div className="relative aspect-square overflow-hidden bg-sc-bg-tertiary">
        <img
          src={track.artwork}
          alt={track.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 rounded-full bg-sc-accent flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
        {/* Play count */}
        <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-[10px] font-medium text-white px-2 py-0.5 rounded">
          ▶ {track.plays}
        </div>
      </div>
      {/* Track info */}
      <div className="p-3">
        <p className="text-sm font-medium text-sc-text-primary truncate group-hover:text-sc-text-primary">
          {track.title}
        </p>
        <p className="text-xs text-sc-text-secondary truncate mt-0.5 hover:text-sc-text-primary transition-colors">
          {track.artist}
        </p>
      </div>
    </Link>
  );
}
