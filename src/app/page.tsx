import Link from "next/link";
import { TrackCard } from "@/components/TrackCard";
import { Footer } from "@/components/Footer";
import { trendingTracks, featuredArtists } from "@/data/tracks";

export default function Home() {
  return (
    <div className="pt-[50px]">
      {/* Promo Banner */}
      <div className="bg-sc-gradient-hero text-white">
        <div className="max-w-[1440px] mx-auto px-4 py-2 flex items-center justify-between gap-4">
          <p className="text-sm font-medium">
            <strong>Keep flowing:</strong> Skip the ads, keep the beats flowing with Go+.{" "}
            <Link href="/go-plus" className="underline font-semibold hover:no-underline">
              Start Free Trial
            </Link>
          </p>
          <button className="text-white/70 hover:text-white transition-colors flex-shrink-0">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 sc-gradient-hero opacity-90" />
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-sc-accent/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-600/20 blur-[100px]" />
        
        <div className="relative max-w-[1440px] mx-auto px-4 py-24 md:py-32">
          <div className="max-w-[600px]">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] mb-6">
              DISCOVER.
              <br />
              GET DISCOVERED.
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-md">
              Discover your next obsession, or become someone else&apos;s. SoundCloud is the only community where fans and artists come together to discover and connect through music.
            </p>
            <div className="flex items-center gap-3">
              <Link href="/sign-up" className="bg-white text-sc-bg-primary px-6 py-3 rounded font-semibold text-sm hover:bg-gray-100 transition-colors">
                Get started
              </Link>
              <Link href="/dc-the-don" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                DC the Don <span className="text-white/50">· SoundCloud Artist Pro</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="relative overflow-hidden bg-sc-bg-secondary">
        <div className="absolute inset-0 sc-gradient-purple opacity-50" />
        <div className="absolute inset-0 bg-sc-bg-secondary/60" />
        
        <div className="relative max-w-[1440px] mx-auto px-4 py-24 md:py-32">
          <div className="max-w-[600px]">
            <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] mb-6">
              IT ALL STARTS WITH
              <br />
              AN UPLOAD.
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-md">
              SoundCloud is where you define what&apos;s next in music. Just hit upload.
            </p>
            <div className="flex items-center gap-3">
              <Link href="/upload" className="bg-white text-sc-bg-primary px-6 py-3 rounded font-semibold text-sm hover:bg-gray-100 transition-colors">
                Upload
              </Link>
              <Link href="/artist-pro" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                Explore Artist Pro
              </Link>
            </div>
            <p className="mt-4 text-sm text-white/60">
              1900Rugrat · Ascending Artist
            </p>
          </div>
        </div>
      </section>

      {/* Every Scene Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 sc-gradient-blue opacity-40" />
        <div className="absolute inset-0 bg-sc-bg-primary/80" />
        
        <div className="relative max-w-[1440px] mx-auto px-4 py-24 md:py-32">
          <div className="max-w-[700px]">
            <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] mb-6">
              EVERY SCENE
              <br />
              LIVES HERE.
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-lg">
              Discover the world&apos;s largest music library, with over 4X the catalog of every major platform: every chart topper you know, plus demos, secret tracks, remixes, and DJ sets you can&apos;t find anywhere else.
            </p>
            <div className="flex items-center gap-3">
              <Link href="/upload" className="bg-white text-sc-bg-primary px-6 py-3 rounded font-semibold text-sm hover:bg-gray-100 transition-colors">
                Upload
              </Link>
              <Link href="/go-plus" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                Explore Go+
              </Link>
            </div>
            <p className="mt-4 text-sm text-white/60">
              IDEMI · Ascending Artist
            </p>
          </div>
        </div>
      </section>

      {/* Trending Tracks */}
      <section className="max-w-[1440px] mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-sc-text-primary mb-1">
              Hear what&apos;s trending
            </h3>
            <p className="text-sm text-sc-text-secondary">
              The most played tracks on SoundCloud right now
            </p>
          </div>
          <Link 
            href="/trending" 
            className="sc-btn sc-btn-outline text-sm hidden sm:inline-flex"
          >
            Explore trending playlists
          </Link>
        </div>

        {/* Track Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {trendingTracks.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/trending" className="sc-btn sc-btn-outline text-sm">
            Explore trending playlists
          </Link>
        </div>
      </section>

      {/* SoundCloud Player Embed Demo */}
      <section className="max-w-[1440px] mx-auto px-4 py-8 mb-16">
        <h3 className="text-xl font-bold text-sc-text-primary mb-6">
          Featured Track
        </h3>
        <div className="bg-sc-bg-secondary rounded-lg overflow-hidden border border-sc-border">
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            className="w-full"
          />
        </div>
      </section>

      {/* Sign-up CTA */}
      <section className="bg-sc-bg-secondary border-t border-sc-border">
        <div className="max-w-[1440px] mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-sc-text-primary mb-4">
            SoundCloud
          </h2>
          <p className="text-sc-text-secondary mb-8">
            Join the world&apos;s largest music community
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link href="/sign-in" className="sc-btn sc-btn-ghost text-sm">
              Sign in
            </Link>
            <Link href="/sign-up" className="bg-white text-sc-bg-primary px-6 py-3 rounded font-semibold text-sm hover:bg-gray-100 transition-colors">
              Create a SoundCloud account
            </Link>
          </div>
          <div className="mt-6">
            <Link href="/for-artists" className="text-sm text-sc-text-secondary hover:text-sc-text-primary transition-colors">
              For artists
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
