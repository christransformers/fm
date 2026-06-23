import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FUSEMUSIC - Australia Home | Discover Australian Music",
  description: "Australia's home for music discovery. Stream Flume, RÜFÜS DU SOL, Tame Impala, The Kid LAROI and thousands more Australian artists.",
};

import Link from "next/link";
import { TrackCard } from "@/components/TrackCard";
import { Footer } from "@/components/Footer";
import { trendingTracks } from "@/data/tracks";

export default function Home() {
  return (
    <div className="pt-[50px]">
      {/* Promo Banner */}
      <div className="bg-sc-gradient-hero text-white">
        <div className="max-w-[1440px] mx-auto px-4 py-2 flex items-center justify-between gap-4">
          <p className="text-sm font-medium">
            <strong>G'day, Australia:</strong> stream the best local music, no ads, no limits.{" "}
            <Link href="/sign-up" className="underline font-semibold hover:no-underline">
              Join free
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
        
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-sc-accent/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-600/20 blur-[100px]" />
        
        <div className="relative max-w-[1440px] mx-auto px-4 py-24 md:py-32">
          <div className="max-w-[600px]">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] mb-6">
              AUSTRALIA'S
              <br />
              SOUND. AMPLIFIED.
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-md">
              FUSEMUSIC brings together Australia's biggest artists and freshest underground talent. Stream Flume, RÜFÜS DU SOL, Tame Impala, and thousands more.
            </p>
            <div className="flex items-center gap-3">
              <Link href="/sign-up" className="bg-white text-sc-bg-primary px-6 py-3 rounded font-semibold text-sm hover:bg-gray-100 transition-colors">
                Get started
              </Link>
              <Link href="/discover" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                Explore artists
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
              AUSTRALIAN ARTISTS.
              <br />
              UPLOAD. GET HEARD.
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-md">
              FUSEMUSIC is where Australian artists connect directly with fans. Upload your tracks and join a community that celebrates local sound.
            </p>
            <div className="flex items-center gap-3">
              <Link href="/upload" className="bg-white text-sc-bg-primary px-6 py-3 rounded font-semibold text-sm hover:bg-gray-100 transition-colors">
                Upload your music
              </Link>
              <Link href="/for-artists" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                Artist resources
              </Link>
            </div>
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
              EVERY SOUND.
              <br />
              AUSTRALIAN MADE.
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-lg">
              From Sydney's electronic underground to Melbourne's hip-hop scene, from Perth's indie rock to Brisbane's future bass — FUSEMUSIC has every Australian genre, every hidden gem, every chart-topper.
            </p>
            <div className="flex items-center gap-3">
              <Link href="/discover" className="bg-white text-sc-bg-primary px-6 py-3 rounded font-semibold text-sm hover:bg-gray-100 transition-colors">
                Discover music
              </Link>
              <Link href="/trending" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                Trending now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Tracks */}
      <section className="max-w-[1440px] mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-sc-text-primary mb-1">
              Australia's trending right now
            </h3>
            <p className="text-sm text-sc-text-secondary">
              The tracks blowing up across the Australian music scene
            </p>
          </div>
          <Link 
            href="/trending" 
            className="sc-btn sc-btn-outline text-sm hidden sm:inline-flex"
          >
            Explore trending
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {trendingTracks.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/trending" className="sc-btn sc-btn-outline text-sm">
            Explore trending
          </Link>
        </div>
      </section>

      {/* Featured Australian Track */}
      <section className="max-w-[1440px] mx-auto px-4 py-8 mb-16">
        <h3 className="text-xl font-bold text-sc-text-primary mb-6">
          Featured Australian Artist
        </h3>
        <div className="bg-sc-bg-secondary rounded-lg overflow-hidden border border-sc-border">
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/242537124&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            className="w-full"
          />
        </div>
        <p className="text-xs text-sc-text-secondary mt-2 text-center">
          Flume — Never Be Like You · Streaming via SoundCloud
        </p>
      </section>

      {/* More Australian Artists — SC Embeds */}
      <section className="max-w-[1440px] mx-auto px-4 py-8 mb-16">
        <h3 className="text-xl font-bold text-sc-text-primary mb-6">
          More Australian Artists
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-sc-bg-secondary rounded-lg overflow-hidden border border-sc-border">
            <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/180910056&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true&buying=false&sharing=false"
              className="w-full" />
            <p className="text-xs text-sc-text-secondary p-3 text-center">RÜFÜS DU SOL — Innerbloom</p>
          </div>
          <div className="bg-sc-bg-secondary rounded-lg overflow-hidden border border-sc-border">
            <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/427298251&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true&buying=false&sharing=false"
              className="w-full" />
            <p className="text-xs text-sc-text-secondary p-3 text-center">Fisher — Losing It</p>
          </div>
          <div className="bg-sc-bg-secondary rounded-lg overflow-hidden border border-sc-border">
            <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/199313556&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true&buying=false&sharing=false"
              className="w-full" />
            <p className="text-xs text-sc-text-secondary p-3 text-center">Dom Dolla — Be Right There</p>
          </div>
          <div className="bg-sc-bg-secondary rounded-lg overflow-hidden border border-sc-border">
            <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/220954969&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true&buying=false&sharing=false"
              className="w-full" />
            <p className="text-xs text-sc-text-secondary p-3 text-center">Tame Impala — The Less I Know The Better</p>
          </div>
        </div>
      </section>

      {/* Video Embeds — Australian Artist Music Videos */}
      <section className="max-w-[1440px] mx-auto px-4 py-8 mb-16">
        <h3 className="text-xl font-bold text-sc-text-primary mb-6">
          Watch Australian Music Videos
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-sc-bg-secondary rounded-lg overflow-hidden border border-sc-border">
            <div className="relative pt-[56.25%]">
              <iframe className="absolute inset-0 w-full h-full" 
                src="https://www.youtube.com/embed/Ly7uj0JwgKg"
                title="Flume - Never Be Like You ft. Kai"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-xs text-sc-text-secondary p-3 text-center">Flume — Never Be Like You (Official Video)</p>
          </div>
          <div className="bg-sc-bg-secondary rounded-lg overflow-hidden border border-sc-border">
            <div className="relative pt-[56.25%]">
              <iframe className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/w7WisxVxQJ4"
                title="RÜFÜS DU SOL - Innerbloom"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-xs text-sc-text-secondary p-3 text-center">RÜFÜS DU SOL — Innerbloom (Official Video)</p>
          </div>
        </div>
      </section>

      {/* Community Section — Social Proof with User Avatars */}
      <section className="max-w-[1440px] mx-auto px-4 py-12 mb-8">
        <h3 className="text-xl font-bold text-sc-text-primary mb-6">
          Australian Music Community
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { user: "sarahm", name: "Sarah M.", text: "FUSEMUSIC is my go-to for discovering new Australian artists. Found my new favourite band here!", track: "Listening to Flume" },
            { user: "tommyb", name: "Tommy B.", text: "The curated Aussie playlists are incredible. Way better than algorithms telling me what to hear.", track: "Just discovered Tame Impala" },
            { user: "mia_k", name: "Mia K.", text: "As an independent artist, FUSEMUSIC actually showcases my music. Real community, real listeners.", track: "Streaming RÜFÜS DU SOL" },
          ].map((comment) => (
            <div key={comment.user} className="bg-sc-bg-secondary rounded-lg p-4 border border-sc-border">
              <div className="flex items-center gap-3 mb-3">
                <img src={`/images/sc-assets/users/${comment.user}.svg`} alt={comment.name} className="w-[40px] h-[40px] rounded-full" />
                <div>
                  <p className="text-sm font-semibold text-sc-text-primary">{comment.name}</p>
                  <p className="text-[10px] text-sc-text-tertiary">{comment.track}</p>
                </div>
              </div>
              <p className="text-xs text-sc-text-secondary leading-relaxed">{comment.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sign-up CTA */}
      <section className="bg-sc-bg-secondary border-t border-sc-border">
        <div className="max-w-[1440px] mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-sc-text-primary mb-4">
            FUSEMUSIC
          </h2>
          <p className="text-sc-text-secondary mb-8 text-lg">
            Australia's home for music discovery
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link href="/sign-in" className="sc-btn sc-btn-ghost text-sm">
              Sign in
            </Link>
            <Link href="/sign-up" className="bg-white text-sc-bg-primary px-6 py-3 rounded font-semibold text-sm hover:bg-gray-100 transition-colors">
              Create a FUSEMUSIC account
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
