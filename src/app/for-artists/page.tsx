import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Artists | Upload & Get Heard on FUSEMUSIC",
  description: "Australian artists — upload your music to SoundCloud and get featured on FUSEMUSIC. Keep 100% royalties. Connect with fans.",
};

import Link from "next/link";
import { Footer } from "@/components/Footer";

export default function ForArtistsPage() {
  return (
    <div className="pt-[50px]">
      <div className="max-w-[800px] mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">For Artists</h1>
        <p className="text-lg text-sc-text-secondary mb-12">
          FUSEMUSIC amplifies Australian sound. Here's how to get your music in front of thousands of listeners.
        </p>

        {/* How it works */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            { step: "01", title: "Upload to SoundCloud", desc: "Upload your tracks to SoundCloud — free, unlimited uploads. You keep 100% of your royalties and rights." },
            { step: "02", title: "Get Featured", desc: "Once your music is on SoundCloud, we feature it alongside Australia's biggest names. No algorithms — real listeners." },
            { step: "03", title: "Grow Your Fanbase", desc: "Connect with Australian music fans, build your following, and join a community that celebrates local sound." },
          ].map((item) => (
            <div key={item.step} className="bg-sc-bg-secondary rounded-lg p-5 border border-sc-border">
              <span className="text-sc-accent font-bold text-sm">{item.step}</span>
              <h3 className="text-sm font-semibold text-sc-text-primary mt-2 mb-1">{item.title}</h3>
              <p className="text-xs text-sc-text-secondary">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Why FUSEMUSIC */}
        <div className="bg-sc-bg-secondary rounded-lg p-6 border border-sc-border mb-12">
          <h2 className="text-xl font-bold text-sc-text-primary mb-4">Why FUSEMUSIC?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Keep 100% Royalties", desc: "We don't take a cut. Your music streams through SoundCloud — you keep every cent you earn." },
              { title: "Full Creative Control", desc: "No label requirements. No gatekeepers. You decide what to upload and when." },
              { title: "Australian Focus", desc: "We're 100% dedicated to Australian music. Your audience is already here." },
              { title: "Direct Fan Connection", desc: "Build your profile, interact with listeners, and grow a real community." },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-sm font-semibold text-sc-text-primary mb-1">{item.title}</h3>
                <p className="text-xs text-sc-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Artists */}
        <h2 className="text-xl font-bold text-sc-text-primary mb-6">Artists Already on FUSEMUSIC</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-12">
          {[
            { slug: "flume", name: "Flume" },
            { slug: "rufusdusol", name: "RÜFÜS DU SOL" },
            { slug: "tameimpala", name: "Tame Impala" },
            { slug: "thekidlaroi", name: "The Kid LAROI" },
            { slug: "fisher", name: "Fisher" },
            { slug: "domdolla", name: "Dom Dolla" },
            { slug: "mallrat", name: "Mallrat" },
            { slug: "sampathegreat", name: "Sampa the Great" },
          ].map((artist) => (
            <Link
              key={artist.slug}
              href={`/artist/${artist.slug}`}
              className="bg-sc-bg-secondary rounded-lg p-3 border border-sc-border hover:border-sc-accent transition-colors text-center"
            >
              <p className="text-sm font-medium text-sc-text-primary">{artist.name}</p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-sc-gradient-hero rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to be heard?</h2>
          <p className="text-white/80 text-sm mb-6 max-w-md mx-auto">
            Upload your music to SoundCloud and get featured on FUSEMUSIC — Australia's fastest growing music discovery platform.
          </p>
          <Link
            href="/upload"
            className="inline-flex bg-white text-sc-bg-primary px-6 py-3 rounded font-semibold text-sm hover:bg-gray-100 transition-colors"
          >
            Upload your music
          </Link>
        </div>

        {/* Contact */}
        <p className="text-sm text-sc-text-secondary mt-12 text-center">
          Questions? Email us at{" "}
          <a href="mailto:hello@fusemusic.com.au" className="text-sc-accent hover:underline">hello@fusemusic.com.au</a>
        </p>
        <p className="text-xs text-sc-text-tertiary mt-4 text-center">
          FUSEMUSIC acknowledges the Traditional Owners of the lands on which we operate.
          We pay respect to Elders past and present. Always was, always will be Aboriginal land.
        </p>
      </div>
      <Footer />
    </div>
  );
}
