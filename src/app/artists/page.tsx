import Link from "next/link";
import { Footer } from "@/components/Footer";

const australianArtists = [
  { slug: "flume", name: "Flume", genre: "Electronic", city: "Sydney", image: "/artists/flume.jpg", tracks: 34, followers: "2.1M", scUrl: "https://soundcloud.com/flume" },
  { slug: "rufusdusol", name: "RÜFÜS DU SOL", genre: "Electronic", city: "Sydney", image: "/artists/rufus.jpg", tracks: 28, followers: "1.8M", scUrl: "https://soundcloud.com/rufusdusol" },
  { slug: "tameimpala", name: "Tame Impala", genre: "Psychedelic Rock", city: "Perth", image: "/artists/tame.jpg", tracks: 42, followers: "3.2M", scUrl: "https://soundcloud.com/tameimpala" },
  { slug: "thekidlaroi", name: "The Kid LAROI", genre: "Hip-Hop", city: "Sydney", image: "/artists/laroi.jpg", tracks: 19, followers: "4.5M", scUrl: "https://soundcloud.com/thekidlaroi" },
  { slug: "sampathegreat", name: "Sampa the Great", genre: "Hip-Hop / Soul", city: "Melbourne", image: "/artists/sampa.jpg", tracks: 24, followers: "890K", scUrl: "https://soundcloud.com/sampathegreat" },
  { slug: "mallrat", name: "Mallrat", genre: "Indie Pop", city: "Brisbane", image: "/artists/mallrat.jpg", tracks: 18, followers: "1.1M", scUrl: "https://soundcloud.com/mallrat" },
  { slug: "fisher", name: "Fisher", genre: "House / Tech House", city: "Gold Coast", image: "/artists/fisher.jpg", tracks: 22, followers: "3.8M", scUrl: "https://soundcloud.com/fishm8" },
  { slug: "domdolla", name: "Dom Dolla", genre: "House / Electronic", city: "Melbourne", image: "/artists/domdolla.jpg", tracks: 16, followers: "2.3M", scUrl: "https://soundcloud.com/domdolla" },
  { slug: "goldenfeatures", name: "Golden Features", genre: "Electronic", city: "Sydney", image: "/artists/golden.jpg", tracks: 25, followers: "980K", scUrl: "https://soundcloud.com/goldenfeatures" },
  { slug: "whatsonot", name: "What So Not", genre: "Electronic / Trap", city: "Sydney", image: "/artists/whatsonot.jpg", tracks: 31, followers: "1.4M", scUrl: "https://soundcloud.com/whatsonot" },
  { slug: "haydenjames", name: "Hayden James", genre: "Electronic / Pop", city: "Sydney", image: "/artists/hayden.jpg", tracks: 20, followers: "760K", scUrl: "https://soundcloud.com/haydenjames" },
  { slug: "tkaymaidza", name: "Tkay Maidza", genre: "Hip-Hop / Pop", city: "Adelaide", image: "/artists/tkay.jpg", tracks: 27, followers: "650K", scUrl: "https://soundcloud.com/tkaymaidza" },
];

export default function ArtistsPage() {
  return (
    <div className="pt-[50px]">
      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-2">Australian Artists</h1>
        <p className="text-sm text-sc-text-secondary mb-8">
          Browse Australia's most exciting musicians — from underground to headline acts
        </p>

        {/* Genre filter */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {["All", "Electronic", "Hip-Hop", "Indie", "House", "Pop"].map((genre) => (
            <button
              key={genre}
              className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${
                genre === "All"
                  ? "bg-sc-accent text-white border-sc-accent"
                  : "text-sc-text-secondary border-sc-border hover:text-sc-text-primary hover:border-sc-text-secondary"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Artist grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {australianArtists.map((artist) => (
            <Link
              key={artist.slug}
              href={artist.scUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sc-card group overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden">
                <div className="absolute inset-0 bg-sc-gradient-hero opacity-70" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-2xl font-bold text-white opacity-70 group-hover:opacity-100 transition-opacity">
                    {artist.name.split(" ").map(w => w[0]).join("")}
                  </p>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-xs font-semibold text-white truncate">{artist.name}</p>
                  <p className="text-[10px] text-white/70">{artist.city}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
