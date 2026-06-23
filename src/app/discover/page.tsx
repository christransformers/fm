import Link from "next/link";

export default function DiscoverPage() {
  return (
    <div className="pt-[50px]">
      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Discover</h1>
        
        {/* Category grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-12">
          {[
            { name: "Hip-Hop & Rap", color: "sc-gradient-hero" },
            { name: "Electronic", color: "sc-gradient-purple" },
            { name: "Pop", color: "sc-gradient-blue" },
            { name: "R&B & Soul", color: "sc-gradient-hero" },
            { name: "Rock", color: "sc-gradient-purple" },
            { name: "Dance & EDM", color: "sc-gradient-blue" },
            { name: "Indie", color: "sc-gradient-hero" },
            { name: "Alternative", color: "sc-gradient-purple" },
            { name: "Latin", color: "sc-gradient-blue" },
            { name: "Country", color: "sc-gradient-hero" },
            { name: "Jazz", color: "sc-gradient-purple" },
            { name: "Classical", color: "sc-gradient-blue" },
          ].map((genre) => (
            <Link
              key={genre.name}
              href={`/discover/${genre.name.toLowerCase().replace(/\s+/g, "-")}`}
              className={`relative overflow-hidden rounded-lg p-4 h-[100px] ${genre.color} flex items-end group`}
            >
              <span className="text-sm font-bold text-white relative z-10">
                {genre.name}
              </span>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            </Link>
          ))}
        </div>

        {/* Charts section */}
        <h2 className="text-lg font-semibold mb-4">Popular charts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            { name: "SoundCloud Top 50", desc: "The most played tracks on SoundCloud", bg: "sc-gradient-hero" },
            { name: "New & Hot", desc: "Fresh tracks blowing up right now", bg: "sc-gradient-purple" },
            { name: "Underground Gems", desc: "Hidden tracks waiting to be discovered", bg: "sc-gradient-blue" },
          ].map((chart) => (
            <Link
              key={chart.name}
              href="/charts"
              className={`${chart.bg} rounded-lg p-6 hover:opacity-90 transition-opacity`}
            >
              <h3 className="text-lg font-bold text-white mb-1">{chart.name}</h3>
              <p className="text-sm text-white/80">{chart.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
