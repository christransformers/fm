import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { notFound } from "next/navigation";

const artists = {
  flume: {
    name: "Flume",
    genre: "Electronic",
    city: "Sydney",
    bio: "Flume is the alias of Australian electronic musician and producer Harley Streten. His self-titled debut album redefined electronic music and put Australian future bass on the global map.",
    scUrl: "https://soundcloud.com/flume",
    tracks: [
      { title: "Never Be Like You ft. Kai", scUrl: "https://soundcloud.com/flume/never-be-like-you" },
      { title: "Hyperreal ft. Kučka", scUrl: "https://soundcloud.com/flume/hyperreal" },
      { title: "Say It ft. Tove Lo", scUrl: "https://soundcloud.com/flume/say-it" },
    ],
  },
  rufusdusol: {
    name: "RÜFÜS DU SOL",
    genre: "Electronic / Live",
    city: "Sydney",
    bio: "Grammy-winning Australian electronic trio. Known for their immersive live shows and atmospheric productions that blend deep house with indie sensibilities.",
    scUrl: "https://soundcloud.com/rufusdusol",
    
    tracks: [
      { title: "Innerbloom", scUrl: "https://soundcloud.com/rufusdusol/innerbloom" },
      { title: "On My Knees", scUrl: "https://soundcloud.com/rufusdusol/on-my-knees" },
      { title: "Alive", scUrl: "https://soundcloud.com/rufusdusol/alive" },
    ],
  },
  tameimpala: {
    name: "Tame Impala",
    genre: "Psychedelic Rock / Pop",
    city: "Perth",
    bio: "Kevin Parker's project that evolved from psychedelic rock into one of the most influential pop acts of the decade. Multiple ARIA and Grammy awards.",
    scUrl: "https://soundcloud.com/tameimpala",
    
    tracks: [
      { title: "The Less I Know The Better", scUrl: "https://soundcloud.com/tameimpala/the-less-i-know-the-better" },
      { title: "Let It Happen", scUrl: "https://soundcloud.com/tameimpala/let-it-happen" },
    ],
  },
  thekidlaroi: {
    name: "The Kid LAROI",
    genre: "Hip-Hop / Pop",
    city: "Sydney",
    bio: "Australian rapper and singer who went from SoundCloud uploads to global chart dominance. One of Australia's biggest musical exports.",
    scUrl: "https://soundcloud.com/thekidlaroi",
    
    tracks: [
      { title: "HIGHEST IN THE ROOM", scUrl: "https://soundcloud.com/thekidlaroi" },
    ],
  },
  fisher: {
    name: "Fisher",
    genre: "House / Tech House",
    city: "Gold Coast",
    bio: "Australian DJ and producer whose infectious tech house anthems have dominated dance floors worldwide. Grammy-nominated for 'Losing It'.",
    scUrl: "https://soundcloud.com/fishm8",
    
    tracks: [
      { title: "Losing It", scUrl: "https://soundcloud.com/fishm8/losing-it" },
    ],
  },
  domdolla: {
    name: "Dom Dolla",
    genre: "House / Electronic",
    city: "Melbourne",
    bio: "Melbourne-born DJ and producer riding the global house music wave. Multiple platinum records and ARIA nominations.",
    scUrl: "https://soundcloud.com/domdolla",
    
    tracks: [
      { title: "Be Right There", scUrl: "https://soundcloud.com/domdolla/be-right-there" },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(artists).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const artist = artists[slug as keyof typeof artists];
  if (!artist) return { title: "Artist Not Found | FUSEMUSIC" };
  return {
    title: `${artist.name} | FUSEMUSIC`,
    description: `Stream ${artist.name} on FUSEMUSIC. ${artist.bio.slice(0, 120)}`,
  };
}

export default async function ArtistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artist = artists[slug as keyof typeof artists];
  if (!artist) notFound();

  return (
    <div className="pt-[50px]">
      <div className="max-w-[1000px] mx-auto px-4 py-8">
        {/* Artist Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="flex-shrink-0">
            <img
              src={`/images/sc-assets/profiles/${slug}.svg`}
              alt={artist.name}
              className="w-[200px] h-[200px] rounded-lg object-cover shadow-lg"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-sc-accent mb-2">{artist.genre}</p>
            <h1 className="text-4xl font-extrabold mb-2">{artist.name}</h1>
            <p className="text-sm text-sc-text-secondary mb-4">{artist.city}, Australia</p>
            <p className="text-sm text-sc-text-secondary max-w-lg mb-4">{artist.bio}</p>
            <Link
              href={`/artist/${slug}`}
              className="sc-btn sc-btn-outline text-sm"
            >
              View full artist page
            </Link>
          </div>
        </div>

        {/* Track Embeds */}
        <h2 className="text-xl font-bold mb-6">Top Tracks</h2>
        <div className="space-y-4">
          {artist.tracks.map((track) => (
            <div key={track.scUrl} className="bg-sc-bg-secondary rounded-lg overflow-hidden border border-sc-border">
              <div className="p-4 pb-0">
                <p className="text-sm font-medium text-sc-text-primary">{track.title}</p>
                <p className="text-xs text-sc-text-secondary">{artist.name}</p>
              </div>
              <iframe
                width="100%"
                height="120"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(track.scUrl)}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true&buying=false&sharing=false`}
                className="w-full"
              />
            </div>
          ))}
        </div>

        {/* Top Listeners */}
        <div className="mt-12 bg-sc-bg-secondary rounded-lg p-6 border border-sc-border">
          <h3 className="text-sm font-semibold text-sc-text-primary mb-4 flex items-center gap-2">
            <svg className="w-4 h-4 text-sc-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
            Top Listeners
          </h3>
          <div className="flex flex-wrap gap-4">
            {["emmaw","jackt","oliviab","noahw","charlottes","liamj","miat","oliverd"].map((user, i) => (
              <div key={user} className="flex items-center gap-2">
                <img src={`/images/sc-assets/users/${user}.svg`} alt="" className="w-[36px] h-[36px] rounded-full" />
                <div>
                  <p className="text-xs font-medium text-sc-text-primary">{["Emma W.","Jack T.","Olivia B.","Noah W.","Charlotte S.","Liam J.","Mia T.","Oliver D."][i]}</p>
                  <p className="text-[10px] text-sc-text-tertiary">Top fan</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/artists" className="sc-btn sc-btn-outline text-sm">
            ← Back to all artists
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
