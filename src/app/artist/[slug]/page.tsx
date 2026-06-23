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
    scId: "242537124",
    tracks: [
      { title: "Never Be Like You ft. Kai", scId: "242537124" },
      { title: "Hyperreal ft. Kučka", scId: "315254426" },
      { title: "Say It ft. Tove Lo", scId: "228987563" },
    ],
  },
  rufusdusol: {
    name: "RÜFÜS DU SOL",
    genre: "Electronic / Live",
    city: "Sydney",
    bio: "Grammy-winning Australian electronic trio. Known for their immersive live shows and atmospheric productions that blend deep house with indie sensibilities.",
    scUrl: "https://soundcloud.com/rufusdusol",
    scId: "180910056",
    tracks: [
      { title: "Innerbloom", scId: "180910056" },
      { title: "On My Knees", scId: "891136132" },
      { title: "Alive", scId: "395527949" },
    ],
  },
  tameimpala: {
    name: "Tame Impala",
    genre: "Psychedelic Rock / Pop",
    city: "Perth",
    bio: "Kevin Parker's project that evolved from psychedelic rock into one of the most influential pop acts of the decade. Multiple ARIA and Grammy awards.",
    scUrl: "https://soundcloud.com/tameimpala",
    scId: "220954969",
    tracks: [
      { title: "The Less I Know The Better", scId: "220954969" },
      { title: "Let It Happen", scId: "192640179" },
    ],
  },
  thekidlaroi: {
    name: "The Kid LAROI",
    genre: "Hip-Hop / Pop",
    city: "Sydney",
    bio: "Australian rapper and singer who went from SoundCloud uploads to global chart dominance. One of Australia's biggest musical exports.",
    scUrl: "https://soundcloud.com/thekidlaroi",
    scId: "707512434",
    tracks: [
      { title: "HIGHEST IN THE ROOM", scId: "707512434" },
    ],
  },
  fisher: {
    name: "Fisher",
    genre: "House / Tech House",
    city: "Gold Coast",
    bio: "Australian DJ and producer whose infectious tech house anthems have dominated dance floors worldwide. Grammy-nominated for 'Losing It'.",
    scUrl: "https://soundcloud.com/fishm8",
    scId: "427298251",
    tracks: [
      { title: "Losing It", scId: "427298251" },
    ],
  },
  domdolla: {
    name: "Dom Dolla",
    genre: "House / Electronic",
    city: "Melbourne",
    bio: "Melbourne-born DJ and producer riding the global house music wave. Multiple platinum records and ARIA nominations.",
    scUrl: "https://soundcloud.com/domdolla",
    scId: "199313556",
    tracks: [
      { title: "Be Right There", scId: "199313556" },
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
              src={`/images/artists/${slug}.svg`}
              alt={artist.name}
              className="w-[200px] h-[200px] rounded-lg object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-sc-accent mb-2">{artist.genre}</p>
            <h1 className="text-4xl font-extrabold mb-2">{artist.name}</h1>
            <p className="text-sm text-sc-text-secondary mb-4">{artist.city}, Australia</p>
            <p className="text-sm text-sc-text-secondary max-w-lg mb-4">{artist.bio}</p>
            <Link
              href={artist.scUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sc-btn sc-btn-outline text-sm"
            >
              Open in SoundCloud ↗
            </Link>
          </div>
        </div>

        {/* Track Embeds */}
        <h2 className="text-xl font-bold mb-6">Top Tracks</h2>
        <div className="space-y-4">
          {artist.tracks.map((track) => (
            <div key={track.scId} className="bg-sc-bg-secondary rounded-lg overflow-hidden border border-sc-border">
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
                src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track.scId}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true&buying=false&sharing=false`}
                className="w-full"
              />
            </div>
          ))}
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
