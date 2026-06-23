import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FUSEMUSIC - Australia Home | Discover Australian Music",
  description: "Australia's home for music discovery. Stream Flume, RÜFÜS DU SOL, Tame Impala, The Kid LAROI and thousands more Australian artists.",
};

import Link from "next/link";
import { TrackCard } from "@/components/TrackCard";
import { Footer } from "@/components/Footer";
import { UnifiedPlayers } from "@/components/UnifiedPlayers";
import { trendingTracks } from "@/data/tracks";

export default function Home() {
  return (
    <div className="pt-[50px]">
      {/* BUILD: unified-players-v2 */}
      <div dangerouslySetInnerHTML={{ __html: "<!-- BUILD-MARKER: unified-players-v2 -->" }} />
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

      {/* Unified Players — SoundCloud + YouTube, all thumbnails visible, one plays at a time */}
      <section className="max-w-[1440px] mx-auto px-4 py-8 mb-16">
        <UnifiedPlayers
          scTracks={[
            { title: "Never Be Like You ft. Kai", artist: "Flume", scUrl: "https://soundcloud.com/flume/never-be-like-you" },
            { title: "Innerbloom", artist: "RÜFÜS DU SOL", scUrl: "https://soundcloud.com/rufusdusol/innerbloom" },
            { title: "Losing It", artist: "Fisher", scUrl: "https://soundcloud.com/fishm8/losing-it" },
            { title: "Be Right There", artist: "Dom Dolla", scUrl: "https://soundcloud.com/domdolla/be-right-there" },
            { title: "The Less I Know The Better", artist: "Tame Impala", scUrl: "https://soundcloud.com/tameimpala/the-less-i-know-the-better" },
            { title: "STAY", artist: "The Kid LAROI", scUrl: "https://soundcloud.com/thekidlaroi/stay" },
          ]}
          ytVideos={[
            { title: "Never Be Like You (Official Video)", artist: "Flume ft. Kai", ytId: "Ly7uj0JwgKg" },
            { title: "Innerbloom (Official Video)", artist: "RÜFÜS DU SOL", ytId: "dM57m31VjJQ" },
            { title: "The Less I Know The Better", artist: "Tame Impala", ytId: "sBzrzS1Ag_g" },
            { title: "Losing It (Official Video)", artist: "Fisher", ytId: "u31thuMehjM" },
            { title: "Be Right There (Official Video)", artist: "Dom Dolla", ytId: "OvW5y3lZ7rc" },
            { title: "STAY (Official Video)", artist: "The Kid LAROI", ytId: "kTJczUoc26U" },
          ]}
        />
      </section>

      {/* Recently Played By — Avatars Row */}
      <section className="max-w-[1440px] mx-auto px-4 py-8 mb-8">
        <div className="bg-sc-bg-secondary rounded-lg p-6 border border-sc-border">
          <h3 className="text-sm font-semibold text-sc-text-primary mb-4">🎧 Recently played by</h3>
          <div className="flex flex-wrap items-center gap-3">
            {["emmaw","jackt","oliviab","noahw","charlottes","liamj","miat","oliverd","avam","williamb","isabellac","ethanw","sophiah","lucasy","harperg"].map((user, i) => (
              <img key={user} src={`/images/sc-assets/users/${user}.svg`} alt="" className="w-[44px] h-[44px] rounded-full border-2 border-sc-bg-primary hover:border-sc-accent transition-colors cursor-pointer" title={["Emma W.","Jack T.","Olivia B.","Noah W.","Charlotte S.","Liam J.","Mia T.","Oliver D.","Ava M.","Will B.","Isabella C.","Ethan W.","Sophia H.","Lucas Y.","Harper G."][i]} />
            ))}
            <span className="text-xs text-sc-text-secondary ml-2">+ 1,247 others</span>
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
            { user: "emmaw", name: "Emma W.", text: "FUSEMUSIC is my go-to for discovering new Australian artists. Found my new favourite band here!", track: "Listening to Flume" },
            { user: "jackt", name: "Jack T.", text: "The curated Aussie playlists are incredible. Way better than algorithms telling me what to hear.", track: "Just discovered Tame Impala" },
            { user: "oliviab", name: "Olivia B.", text: "As an independent artist, FUSEMUSIC actually showcases my music. Real community, real listeners.", track: "Streaming RÜFÜS DU SOL" },
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
