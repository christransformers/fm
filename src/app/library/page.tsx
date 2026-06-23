import { TrackCard } from "@/components/TrackCard";
import { Footer } from "@/components/Footer";
import { trendingTracks } from "@/data/tracks";
import Link from "next/link";

export default function LibraryPage() {
  return (
    <div className="pt-[50px]">
      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Your Library</h1>
          <Link href="/upload" className="sc-btn sc-btn-primary text-sm">
            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Upload
          </Link>
        </div>

        {/* Library tabs */}
        <div className="flex gap-4 border-b border-sc-border mb-6">
          {["Likes", "Playlists", "Albums", "Following", "History"].map((tab) => (
            <button
              key={tab}
              className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                tab === "Likes"
                  ? "border-sc-accent text-sc-text-primary"
                  : "border-transparent text-sc-text-secondary hover:text-sc-text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Liked tracks */}
        <p className="text-sm text-sc-text-secondary mb-6">
          Sign in to see your liked tracks and playlists
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {trendingTracks.slice(0, 5).map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-sc-bg-secondary rounded-lg border border-sc-border">
          <h3 className="text-lg font-semibold mb-2">Start building your library</h3>
          <p className="text-sm text-sc-text-secondary mb-4">
            Like tracks and create playlists to build your personal music collection
          </p>
          <Link href="/sign-up" className="sc-btn sc-btn-primary text-sm">
            Create account
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
